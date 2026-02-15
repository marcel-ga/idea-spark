import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  onSnapshot, 
  query, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  where,
  getDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithCustomToken, 
  signInAnonymously, 
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { 
  Plus, 
  Lightbulb, 
  Rocket, 
  Archive, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Search,
  Filter,
  ChevronRight,
  Zap,
  LayoutGrid,
  List as ListIcon,
  ArrowRight,
  ArrowLeft,
  MoreVertical,
  Scale,
  HelpCircle,
  Info,
  X,
  CheckSquare,
  Square,
  History,
  TrendingUp,
  BarChart3,
  Calendar,
  Activity,
  User,
  ShieldCheck,
  LogOut,
  Copy,
  Users,
  Settings,
  UserPlus,
  Home,
  Crown,
  Edit3,
  Eye,
  UserMinus,
  Moon,
  Sun
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

// --- Firebase Configuration ---
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'idea-tracker-v1';

const STATUS_OPTIONS = [
  { id: 'brainstorm', label: 'Brainstorming', icon: Lightbulb, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10', border: 'border-yellow-200 dark:border-yellow-500/20' },
  { id: 'incubating', label: 'Incubating', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/20' },
  { id: 'active', label: 'In Motion', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/20' },
  { id: 'completed', label: 'Launched', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-200 dark:border-green-500/20' },
  { id: 'archived', label: 'Archived', icon: Archive, color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-500/10', border: 'border-gray-200 dark:border-gray-500/20' },
];

const PRIORITIES = [
  { id: 'low', label: 'Low', color: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300', desc: 'Nice to have / Someday' },
  { id: 'medium', label: 'Medium', color: 'bg-orange-200 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400', desc: 'Important / Meaningful' },
  { id: 'high', label: 'High', color: 'bg-red-200 dark:bg-red-500/20 text-red-700 dark:text-red-400', desc: 'Critical / Time-sensitive' },
];

const EFFORT_SIZES = [
  { id: 'XS', label: 'XS', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400', desc: '< 1 hour' },
  { id: 'S', label: 'S', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/5 dark:text-emerald-500', desc: 'A few hours' },
  { id: 'M', label: 'M', color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400', desc: '1-3 days' },
  { id: 'L', label: 'L', color: 'bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400', desc: '1 week+' },
  { id: 'XL', label: 'XL', color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400', desc: '1 month+' },
];

const ROLES = {
  OWNER: { id: 'owner', label: 'Owner', icon: Crown, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-500/10' },
  EDITOR: { id: 'editor', label: 'Editor', icon: Edit3, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  VIEWER: { id: 'viewer', label: 'Viewer', icon: Eye, color: 'text-slate-500', bg: 'bg-slate-50 dark:bg-slate-500/10' },
};

export default function App() {
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeSpace, setActiveSpace] = useState({ id: 'personal', type: 'personal', name: 'Personal Space' });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState('kanban'); 
  const [isDark, setIsDark] = useState(false);
  
  // UI State
  const [showGuidance, setShowGuidance] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [inviteId, setInviteId] = useState('');
  
  const [newIdea, setNewIdea] = useState({ title: '', description: '', nextStep: '', status: 'brainstorm', priority: 'medium', effort: 'M' });
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth error:", error);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const groupsCollection = collection(db, 'artifacts', appId, 'public', 'data', 'groups');
    const unsubscribe = onSnapshot(query(groupsCollection), (snapshot) => {
      const groupsList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(group => group.members?.includes(user.uid));
      setGroups(groupsList);
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    let ideasCollection;
    if (activeSpace.type === 'personal') {
      ideasCollection = collection(db, 'artifacts', appId, 'users', user.uid, 'ideas');
    } else {
      ideasCollection = collection(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`);
    }
    const unsubscribe = onSnapshot(query(ideasCollection), (snapshot) => {
      const ideasList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
        tasks: doc.data().tasks || [],
      }));
      ideasList.sort((a, b) => b.createdAt - a.createdAt);
      setIdeas(ideasList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user, activeSpace]);

  const userPermissions = useMemo(() => {
    if (activeSpace.type === 'personal') return { role: 'owner', canEdit: true, canManage: true };
    const currentGroup = groups.find(g => g.id === activeSpace.id);
    if (!currentGroup) return { role: 'viewer', canEdit: false, canManage: false };
    const role = currentGroup.roles?.[user?.uid] || 'viewer';
    return { role, canEdit: role === 'owner' || role === 'editor', canManage: role === 'owner' };
  }, [activeSpace, groups, user]);

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    if (!user || !newGroupName.trim()) return;
    try {
      const groupsCollection = collection(db, 'artifacts', appId, 'public', 'data', 'groups');
      const docRef = await addDoc(groupsCollection, {
        name: newGroupName,
        createdBy: user.uid,
        members: [user.uid],
        roles: { [user.uid]: 'owner' },
        createdAt: serverTimestamp()
      });
      setNewGroupName('');
      setIsAddingGroup(false);
      setActiveSpace({ id: docRef.id, type: 'group', name: newGroupName });
    } catch (err) { console.error(err); }
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    if (!user || !inviteId.trim() || activeSpace.type !== 'group') return;
    try {
      const groupDoc = doc(db, 'artifacts', appId, 'public', 'data', 'groups', activeSpace.id);
      await updateDoc(groupDoc, {
        members: arrayUnion(inviteId.trim()),
        [`roles.${inviteId.trim()}`]: 'editor'
      });
      setInviteId('');
      setIsInviting(false);
    } catch (err) { console.error(err); }
  };

  const handleAddIdea = async (e) => {
    e.preventDefault();
    if (!user || !newIdea.title.trim() || !userPermissions.canEdit) return;
    try {
      let ideasCollection;
      if (activeSpace.type === 'personal') {
        ideasCollection = collection(db, 'artifacts', appId, 'users', user.uid, 'ideas');
      } else {
        ideasCollection = collection(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`);
      }
      const initialTasks = newIdea.nextStep ? [{ id: crypto.randomUUID(), text: newIdea.nextStep, completed: false }] : [];
      await addDoc(ideasCollection, {
        ...newIdea,
        tasks: initialTasks,
        createdBy: user.uid,
        creatorName: user.uid.substring(0, 5),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setNewIdea({ title: '', description: '', nextStep: '', status: 'brainstorm', priority: 'medium', effort: 'M' });
      setIsAdding(false);
    } catch (err) { console.error(err); }
  };

  const updateStatus = async (id, newStatus) => {
    if (!user || !userPermissions.canEdit) return;
    let ideaDoc = activeSpace.type === 'personal' 
      ? doc(db, 'artifacts', appId, 'users', user.uid, 'ideas', id)
      : doc(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`, id);
    await updateDoc(ideaDoc, { status: newStatus, updatedAt: serverTimestamp() });
  };

  const toggleTask = async (ideaId, taskId) => {
    if (!user || !userPermissions.canEdit) return;
    const idea = ideas.find(i => i.id === ideaId);
    if (!idea) return;
    const updatedTasks = idea.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
    let ideaDoc = activeSpace.type === 'personal'
      ? doc(db, 'artifacts', appId, 'users', user.uid, 'ideas', ideaId)
      : doc(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`, ideaId);
    await updateDoc(ideaDoc, { tasks: updatedTasks, updatedAt: serverTimestamp() });
  };

  const addTask = async (ideaId, taskText) => {
    if (!user || !taskText.trim() || !userPermissions.canEdit) return;
    const idea = ideas.find(i => i.id === ideaId);
    if (!idea) return;
    const newTask = { id: crypto.randomUUID(), text: taskText, completed: false };
    let ideaDoc = activeSpace.type === 'personal'
      ? doc(db, 'artifacts', appId, 'users', user.uid, 'ideas', ideaId)
      : doc(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`, ideaId);
    await updateDoc(ideaDoc, { tasks: [...idea.tasks, newTask], updatedAt: serverTimestamp() });
  };

  const deleteIdea = async (id) => {
    if (!user || !userPermissions.canEdit) return;
    let ideaDoc = activeSpace.type === 'personal'
      ? doc(db, 'artifacts', appId, 'users', user.uid, 'ideas', id)
      : doc(db, 'artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`, id);
    await deleteDoc(ideaDoc);
  };

  const filteredIdeas = useMemo(() => {
    return ideas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            idea.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterStatus === 'all' || idea.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [ideas, searchQuery, filterStatus]);

  const momentumData = useMemo(() => {
    const last14Days = Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      return d.toISOString().split('T')[0];
    });
    return last14Days.map(date => ({
      date: date.split('-').slice(1).join('/'),
      captured: ideas.filter(i => i.createdAt.toISOString().split('T')[0] === date).length,
      launched: ideas.filter(i => i.status === 'completed' && i.updatedAt.toISOString().split('T')[0] === date).length
    }));
  }, [ideas]);

  const productivityScores = useMemo(() => {
    if (ideas.length === 0) return { actionRate: 0, velocity: 0 };
    const hasProgress = ideas.filter(i => i.tasks.some(t => t.completed)).length;
    const actionRate = Math.round((hasProgress / ideas.length) * 100);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentlyActive = ideas.filter(i => i.updatedAt > sevenDaysAgo).length;
    return { actionRate, velocity: (recentlyActive / 7).toFixed(1) };
  }, [ideas]);

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;

  const IdeaCard = ({ idea, compact = false }) => {
    const statusConfig = STATUS_OPTIONS.find(s => s.id === idea.status) || STATUS_OPTIONS[0];
    const effortConfig = EFFORT_SIZES.find(e => e.id === idea.effort) || EFFORT_SIZES[2];
    const StatusIcon = statusConfig.icon;
    const currentIndex = STATUS_OPTIONS.findIndex(s => s.id === idea.status);
    const [isExpanding, setIsExpanding] = useState(false);
    const [newTaskText, setNewTaskText] = useState('');
    const progress = idea.tasks.length > 0 ? (idea.tasks.filter(t => t.completed).length / idea.tasks.length) * 100 : 0;
    const isStagnant = (new Date() - idea.updatedAt) > 7 * 24 * 60 * 60 * 1000 && idea.status !== 'completed' && idea.status !== 'archived';

    return (
      <div className={`bg-white dark:bg-slate-900 rounded-xl border ${isStagnant ? 'border-amber-200 dark:border-amber-900/50 bg-amber-50/10 dark:bg-amber-900/5' : 'border-slate-200 dark:border-slate-800'} p-4 hover:shadow-md transition-all group relative ${compact ? 'shadow-sm' : ''}`}>
        {isStagnant && <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 z-10"><Clock className="w-2.5 h-2.5" /> STAGNANT</div>}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${idea.priority === 'high' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' : idea.priority === 'medium' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>{idea.priority}</span>
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${effortConfig.color} border border-current opacity-70`}>{idea.effort}</span>
            {!compact && <span className={`flex items-center gap-1 text-[10px] font-semibold ${statusConfig.color}`}><StatusIcon className="w-3 h-3" />{statusConfig.label}</span>}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setIsExpanding(!isExpanding)} className={`p-1 rounded transition-colors ${isExpanding ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'}`}><CheckSquare className="w-3.5 h-3.5" /></button>
            {userPermissions.canEdit && (
              <button onClick={() => deleteIdea(idea.id)} className="p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all rounded hover:bg-red-50 dark:hover:bg-red-900/20"><Trash2 className="w-3.5 h-3.5" /></button>
            )}
          </div>
        </div>
        <h3 className={`font-bold text-slate-800 dark:text-slate-100 mb-1 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${compact ? 'text-sm' : 'text-base'}`}>{idea.title}</h3>
        {!compact && idea.description && <p className="text-slate-500 dark:text-slate-400 text-xs mb-3 line-clamp-2">{idea.description}</p>}
        {activeSpace.type === 'group' && <div className="text-[9px] font-bold text-slate-400 mb-2">By: {idea.creatorName || 'Member'}</div>}
        {idea.tasks.length > 0 && (
          <div className="mt-2 mb-1">
            <div className="flex justify-between items-center mb-1"><span className="text-[9px] font-bold text-slate-400 uppercase">Progress</span><span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400">{Math.round(progress)}%</span></div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} /></div>
          </div>
        )}
        {isExpanding && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {idea.tasks.map(task => (
              <div key={task.id} onClick={() => userPermissions.canEdit && toggleTask(idea.id, task.id)} className={`flex items-center gap-2 ${userPermissions.canEdit ? 'cursor-pointer' : 'cursor-default'} group/task`}>
                {task.completed ? <CheckSquare className="w-4 h-4 text-green-500 fill-green-50" /> : <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover/task:text-indigo-400" />}
                <span className={`text-xs ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300 font-medium'}`}>{task.text}</span>
              </div>
            ))}
            {userPermissions.canEdit && (
              <div className="flex items-center gap-2 mt-3 pt-2">
                <input type="text" placeholder="Add sub-task..." className="flex-1 text-xs bg-slate-50 dark:bg-slate-950 border-none rounded p-1.5 focus:ring-1 focus:ring-indigo-500 outline-none dark:text-slate-200" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { addTask(idea.id, newTaskText); setNewTaskText(''); }}} />
                <button onClick={() => { addTask(idea.id, newTaskText); setNewTaskText(''); }} className="p-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"><Plus className="w-3.5 h-3.5" /></button>
              </div>
            )}
          </div>
        )}
        <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
          <div className="flex gap-1">
            <button disabled={currentIndex === 0 || !userPermissions.canEdit} onClick={() => {const ni = currentIndex-1; updateStatus(idea.id, STATUS_OPTIONS[ni].id)}} className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 text-slate-400"><ArrowLeft className="w-3.5 h-3.5" /></button>
            <button disabled={currentIndex === STATUS_OPTIONS.length - 1 || !userPermissions.canEdit} onClick={() => {const ni = currentIndex+1; updateStatus(idea.id, STATUS_OPTIONS[ni].id)}} className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 text-slate-400"><ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
          {!compact && (
            <select disabled={!userPermissions.canEdit} className="text-[10px] border-none bg-slate-50 dark:bg-slate-800 rounded-md py-1 px-1.5 text-slate-500 dark:text-slate-400 focus:ring-0 cursor-pointer disabled:opacity-50" value={idea.status} onChange={(e) => updateStatus(idea.id, e.target.value)}>
              {STATUS_OPTIONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex">
        {/* Sidebar for Spaces */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 flex flex-col hidden lg:flex">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-100 dark:shadow-indigo-900/20"><Zap className="text-white w-5 h-5" /></div>
              <h1 className="text-xl font-bold tracking-tight">IdeaSpark</h1>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-8 overflow-y-auto">
            <div>
              <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">Personal</h3>
              <button onClick={() => setActiveSpace({ id: 'personal', type: 'personal', name: 'Personal Space' })} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeSpace.id === 'personal' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                <Home className="w-4 h-4" /> My Sparks
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Shared Groups</h3>
                <button onClick={() => setIsAddingGroup(true)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-indigo-600 dark:text-indigo-400"><Plus className="w-3 h-3" /></button>
              </div>
              <div className="space-y-1">
                {groups.map(group => (
                  <button key={group.id} onClick={() => setActiveSpace({ id: group.id, type: 'group', name: group.name })} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeSpace.id === group.id ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    <Users className="w-4 h-4" /> {group.name}
                  </button>
                ))}
                {groups.length === 0 && <p className="text-[10px] text-slate-400 dark:text-slate-600 px-3 italic">No shared groups</p>}
              </div>
            </div>
          </nav>

          <div className="p-4 border-t border-slate-50 dark:border-slate-800">
             <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">Active Space Role</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 capitalize flex items-center gap-2">
                  {userPermissions.role === 'owner' ? <Crown className="w-3 h-3 text-amber-500" /> : <Eye className="w-3 h-3 text-slate-400" />}
                  {userPermissions.role}
                </p>
             </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <button onClick={() => setViewMode('list')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}><ListIcon className="w-3.5 h-3.5" />List</button>
                  <button onClick={() => setViewMode('kanban')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === 'kanban' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}><LayoutGrid className="w-3.5 h-3.5" />Board</button>
                  <button onClick={() => setViewMode('insights')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === 'insights' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}><BarChart3 className="w-3.5 h-3.5" />Insights</button>
                </div>

                {activeSpace.type === 'group' && (
                  <div className="flex gap-2">
                    <button onClick={() => setIsInviting(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all"><UserPlus className="w-3.5 h-3.5" /> Invite</button>
                    <button onClick={() => setIsSettingsOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"><Settings className="w-3.5 h-3.5" /> Settings</button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" placeholder="Search ideas..." className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner dark:text-slate-200" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                {userPermissions.canEdit && (
                  <button onClick={() => setIsAdding(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 whitespace-nowrap"><Plus className="w-4 h-4" />New Spark</button>
                )}
                <div className="relative">
                  <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><User className="w-5 h-5 text-slate-600 dark:text-slate-400" /></button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 z-50">
                      <div className="flex items-center gap-3 mb-3 border-b border-slate-50 dark:border-slate-700 pb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /></div>
                        <div><p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Your Identity</p><p className="text-xs font-mono text-slate-600 dark:text-slate-400 break-all">{user?.uid}</p></div>
                      </div>
                      <button onClick={() => { copyUserId(); setShowUserMenu(false); }} className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-colors"><Copy className="w-3.5 h-3.5" /> Copy User ID</button>
                      <button onClick={() => signOut(auth)} className="w-full text-left px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex items-center gap-2 transition-colors"><LogOut className="w-3.5 h-3.5" /> Sign Out</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <main className={`mx-auto px-4 py-6 w-full ${viewMode === 'kanban' || viewMode === 'insights' ? 'max-w-full' : 'max-w-4xl'}`}>
            {viewMode !== 'insights' && (
              <div className="flex items-center justify-between mb-6 bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-100 dark:shadow-indigo-900/30">
                <div>
                  <h2 className="text-lg font-bold">{activeSpace.name}</h2>
                  <p className="text-indigo-100 text-xs mt-1 flex items-center gap-1">
                     {userPermissions.canEdit ? <Zap className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                     {activeSpace.type === 'personal' ? 'Private Workspace' : `Role: ${userPermissions.role.toUpperCase()}`}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center"><div className="text-2xl font-black">{ideas.filter(i => i.status === 'completed').length}</div><div className="text-[10px] font-bold uppercase opacity-60 tracking-wider">Launched</div></div>
                  <div className="bg-white/10 w-px h-10" /><div className="text-center"><div className="text-2xl font-black">{ideas.length}</div><div className="text-[10px] font-bold uppercase opacity-60 tracking-wider">Captured</div></div>
                </div>
              </div>
            )}

            {viewMode === 'insights' ? (
              <div className="max-w-6xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"><h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Action Rate</h3><div className="text-3xl font-black text-slate-800 dark:text-slate-100">{productivityScores.actionRate}%</div></div>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"><h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Velocity</h3><div className="text-3xl font-black text-slate-800 dark:text-slate-100">{productivityScores.velocity}</div></div>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"><h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Stagnant</h3><div className="text-3xl font-black text-slate-800 dark:text-slate-100">{ideas.filter(i => (new Date() - i.updatedAt) > 7 * 24 * 60 * 60 * 1000).length}</div></div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 h-[350px]">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-8">Creative Momentum</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={momentumData}>
                      <XAxis dataKey="date" hide />
                      <Tooltip contentStyle={{ backgroundColor: isDark ? '#1e293b' : '#fff', border: 'none', color: isDark ? '#f1f5f9' : '#1e293b' }} />
                      <Area type="monotone" dataKey="captured" stroke="#6366f1" fill="#6366f120" />
                      <Area type="monotone" dataKey="launched" stroke="#22c55e" fill="#22c55e20" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : (
              viewMode === 'list' ? (
                <div className="grid grid-cols-1 gap-4">{filteredIdeas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}</div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x">
                  {STATUS_OPTIONS.map(column => {
                    const columnIdeas = filteredIdeas.filter(i => i.status === column.id);
                    return (
                      <div key={column.id} className="flex-shrink-0 w-[300px] snap-start">
                        <div className={`mb-3 p-3 rounded-xl border ${column.border} ${column.bg} flex items-center justify-between shadow-sm`}>
                          <div className="flex items-center gap-2"><column.icon className={`w-4 h-4 ${column.color}`} /><h3 className={`font-bold text-sm ${column.color}`}>{column.label}</h3></div>
                          <span className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 dark:text-slate-300">{columnIdeas.length}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          {columnIdeas.map(idea => <IdeaCard key={idea.id} idea={idea} compact />)}
                          {columnIdeas.length === 0 && <div className="py-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center opacity-40"><span className="text-[10px] font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest">Stage Empty</span></div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </main>
        </div>

        {/* MODALS */}
        {isAddingGroup && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
              <h2 className="text-xl font-bold mb-4 dark:text-slate-100">Create Group Space</h2>
              <form onSubmit={handleCreateGroup}>
                <input autoFocus required type="text" placeholder="Group Name (e.g. Family Projects)" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl mb-4 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" value={newGroupName} onChange={e => setNewGroupName(e.target.value)} />
                <div className="flex gap-3">
                  <button type="button" onClick={() => setIsAddingGroup(false)} className="flex-1 py-3 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Cancel</button>
                  <button type="submit" className="flex-2 px-8 py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all">Create Space</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isInviting && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-4 dark:text-slate-100">Invite to {activeSpace.name}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Paste the User ID of the person you want to invite.</p>
              <form onSubmit={handleInvite}>
                <input autoFocus required type="text" placeholder="User ID" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl mb-4 font-mono text-xs dark:text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={inviteId} onChange={e => setInviteId(e.target.value)} />
                <div className="flex gap-3">
                  <button type="button" onClick={() => setIsInviting(false)} className="flex-1 py-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Cancel</button>
                  <button type="submit" className="flex-2 px-8 py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-indigo-700">Add Member</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isSettingsOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                <h2 className="text-xl font-bold flex items-center gap-2 dark:text-slate-100"><Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Space Settings</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-6">
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Members & Roles</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {groups.find(g => g.id === activeSpace.id)?.members.map(memberId => {
                    const role = groups.find(g => g.id === activeSpace.id)?.roles?.[memberId] || 'viewer';
                    const RoleIcon = ROLES[role.toUpperCase()]?.icon || Eye;
                    return (
                      <div key={memberId} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                            <User className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{memberId.substring(0, 12)}...</p>
                            <div className="flex items-center gap-1">
                               <RoleIcon className={`w-3 h-3 ${ROLES[role.toUpperCase()]?.color}`} />
                               <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 capitalize">{role}</span>
                            </div>
                          </div>
                        </div>
                        {userPermissions.canManage && memberId !== user.uid && (
                          <div className="flex items-center gap-1">
                            <select className="text-[10px] border-none bg-white dark:bg-slate-700 rounded-lg py-1 px-2 text-slate-600 dark:text-slate-300 focus:ring-0 shadow-sm cursor-pointer" value={role} onChange={(e) => handleUpdateRole(memberId, e.target.value)}>
                              {Object.values(ROLES).map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                            </select>
                            <button onClick={() => handleRemoveMember(memberId)} className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"><UserMinus className="w-4 h-4" /></button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {isAdding && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-2"><div className="bg-indigo-600 p-1.5 rounded-lg"><Zap className="text-white w-4 h-4" /></div><h2 className="text-xl font-bold dark:text-slate-100">New Spark</h2></div>
                <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600 p-2"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={handleAddIdea} className="p-6 space-y-4">
                <input autoFocus required type="text" placeholder="What's the core idea?" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-slate-100" value={newIdea.title} onChange={e => setNewIdea({...newIdea, title: e.target.value})} />
                <textarea placeholder="Add details..." rows="3" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-slate-100" value={newIdea.description} onChange={e => setNewIdea({...newIdea, description: e.target.value})} />
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/20">
                  <label className="block text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">Immediate Action</label>
                  <input type="text" placeholder="First actionable step..." className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/30 rounded-lg text-sm dark:text-slate-200 outline-none" value={newIdea.nextStep} onChange={e => setNewIdea({...newIdea, nextStep: e.target.value})} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs dark:text-slate-300" value={newIdea.effort} onChange={e => setNewIdea({...newIdea, effort: e.target.value})}>{EFFORT_SIZES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
                  <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs dark:text-slate-300" value={newIdea.priority} onChange={e => setNewIdea({...newIdea, priority: e.target.value})}>{PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}</select>
                  <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs dark:text-slate-300" value={newIdea.status} onChange={e => setNewIdea({...newIdea, status: e.target.value})}>{STATUS_OPTIONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
                </div>
                <button type="submit" className="w-full py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all">Ignite Spark</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
