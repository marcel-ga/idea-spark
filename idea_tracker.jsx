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
  Plus, Lightbulb, Rocket, Archive, Trash2, CheckCircle2, Clock, 
  AlertCircle, Search, Zap, LayoutGrid, List as ListIcon, 
  ArrowRight, ArrowLeft, HelpCircle, X, CheckSquare, Square, 
  History, TrendingUp, BarChart3, User, ShieldCheck, LogOut, 
  Copy, Users, Settings, UserPlus, Home, Crown, Edit3, Eye, 
  UserMinus, Moon, Sun, Flower2, Pencil
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from 'recharts';

/**
 * --- FIREBASE CONFIGURATION ---
 * Replace the placeholder values below with the keys from your 
 * Firebase Console (Project Settings -> General -> Your Apps).
 */
const firebaseConfig = {
  apiKey: "AIzaSyDe1D8qPWbUsMMYqxeBUoKoQtN-8RUFcD0",
  authDomain: "project-67957ccb-9754-4814-864.firebaseapp.com",
  projectId: "project-67957ccb-9754-4814-864",
  storageBucket: "project-67957ccb-9754-4814-864.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'idea-tracker-v1';

const STATUS_OPTIONS = [
  { id: 'brainstorm', label: 'Brainstorming', icon: Lightbulb, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10 spring:bg-yellow-500/10', border: 'border-yellow-200 dark:border-yellow-500/20 spring:border-yellow-500/20' },
  { id: 'incubating', label: 'Incubating', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10 spring:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/20 spring:border-blue-500/20' },
  { id: 'active', label: 'In Motion', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10 spring:bg-pink-500/10', border: 'border-purple-200 dark:border-purple-500/20 spring:border-pink-500/20' },
  { id: 'completed', label: 'Launched', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-500/10 spring:bg-emerald-500/10', border: 'border-green-200 dark:border-green-500/20 spring:border-emerald-500/20' },
  { id: 'archived', label: 'Archived', icon: Archive, color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-500/10 spring:bg-slate-500/10', border: 'border-gray-200 dark:border-gray-500/20 spring:border-slate-500/20' },
];

const PRIORITIES = [
  { id: 'low', label: 'Low', color: 'bg-slate-200 dark:bg-slate-700 spring:bg-emerald-100 text-slate-700 dark:text-slate-300 spring:text-emerald-700' },
  { id: 'medium', label: 'Medium', color: 'bg-orange-200 dark:bg-orange-500/20 spring:bg-rose-100 text-orange-700 dark:text-orange-400 spring:text-rose-700' },
  { id: 'high', label: 'High', color: 'bg-red-200 dark:bg-red-500/20 spring:bg-pink-200 text-red-700 dark:text-red-400 spring:text-pink-800' },
];

const EFFORT_SIZES = [
  { id: 'XS', label: 'XS', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 spring:bg-emerald-200/50' },
  { id: 'S', label: 'S', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/5 spring:bg-emerald-100/50' },
  { id: 'M', label: 'M', color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 spring:bg-sky-100/50' },
  { id: 'L', label: 'L', color: 'bg-pink-50 text-pink-600 dark:bg-pink-500/10 spring:bg-rose-100/50' },
  { id: 'XL', label: 'XL', color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 spring:bg-purple-100/50' },
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
  const [theme, setTheme] = useState('light');
  
  // UI State Modals
  const [isAdding, setIsAdding] = useState(false);
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [inviteId, setInviteId] = useState('');
  const [editingIdeaId, setEditingIdeaId] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Form State
  const [sparkForm, setSparkForm] = useState({ title: '', description: '', nextStep: '', status: 'brainstorm', priority: 'medium', effort: 'M' });
  const [newGroupName, setNewGroupName] = useState('');

  // 1. Auth Init
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else signInAnonymously(auth).catch(console.error);
    });
    return () => unsubscribe();
  }, []);

  // 2. Groups Fetch
  useEffect(() => {
    if (!user) return;
    const groupsRef = collection(db, 'artifacts', appId, 'public', 'data', 'groups');
    return onSnapshot(query(groupsRef), (snap) => {
      setGroups(snap.docs.map(d => ({id: d.id, ...d.data()})).filter(g => g.members?.includes(user.uid)));
    });
  }, [user]);

  // 3. Ideas Fetch
  useEffect(() => {
    if (!user) return;
    const collPath = activeSpace.type === 'personal' 
      ? ['artifacts', appId, 'users', user.uid, 'ideas']
      : ['artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`];
    
    return onSnapshot(query(collection(db, ...collPath)), (snap) => {
      const list = snap.docs.map(d => ({
        id: d.id, ...d.data(),
        createdAt: d.data().createdAt?.toDate() || new Date(),
        updatedAt: d.data().updatedAt?.toDate() || new Date(),
        tasks: d.data().tasks || []
      }));
      setIdeas(list.sort((a,b) => b.createdAt - a.createdAt));
      setLoading(false);
    }, () => setLoading(false));
  }, [user, activeSpace]);

  // Helpers
  const permissions = useMemo(() => {
    if (activeSpace.type === 'personal') return { role: 'owner', canEdit: true, canManage: true };
    const group = groups.find(g => g.id === activeSpace.id);
    const role = group?.roles?.[user?.uid] || 'viewer';
    return { role, canEdit: role === 'owner' || role === 'editor', canManage: role === 'owner' };
  }, [activeSpace, groups, user]);

  const toggleTheme = () => {
    const modes = ['light', 'dark', 'spring'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const handleSparkSubmit = async (e) => {
    e.preventDefault();
    if (!user || !sparkForm.title.trim() || !permissions.canEdit) return;
    const collPath = activeSpace.type === 'personal' 
      ? ['artifacts', appId, 'users', user.uid, 'ideas']
      : ['artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`];
    
    if (editingIdeaId) {
      await updateDoc(doc(db, ...collPath, editingIdeaId), { ...sparkForm, updatedAt: serverTimestamp() });
    } else {
      await addDoc(collection(db, ...collPath), {
        ...sparkForm, tasks: sparkForm.nextStep ? [{id: crypto.randomUUID(), text: sparkForm.nextStep, completed: false}] : [],
        createdBy: user.uid, creatorName: user.uid.substring(0, 5), createdAt: serverTimestamp(), updatedAt: serverTimestamp()
      });
    }
    setIsAdding(false);
    setEditingIdeaId(null);
  };

  const updateStatus = async (id, s) => {
    if (!permissions.canEdit) return;
    const collPath = activeSpace.type === 'personal' ? ['artifacts', appId, 'users', user.uid, 'ideas'] : ['artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`];
    await updateDoc(doc(db, ...collPath, id), { status: s, updatedAt: serverTimestamp() });
  };

  const deleteIdea = async (id) => {
    if (!permissions.canEdit) return;
    const collPath = activeSpace.type === 'personal' ? ['artifacts', appId, 'users', user.uid, 'ideas'] : ['artifacts', appId, 'public', 'data', `group_ideas_${activeSpace.id}`];
    await deleteDoc(doc(db, ...collPath, id));
  };

  const filteredIdeas = useMemo(() => {
    return ideas.filter(i => {
      const matchSearch = i.title.toLowerCase().includes(searchQuery.toLowerCase()) || i.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchFilter = filterStatus === 'all' || i.status === filterStatus;
      return matchSearch && matchFilter;
    });
  }, [ideas, searchQuery, filterStatus]);

  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 spring:bg-[#fdf9f1]"><Zap className="animate-pulse text-indigo-600 w-12 h-12" /></div>;

  const IdeaCard = ({ idea, compact = false }) => {
    const statusCfg = STATUS_OPTIONS.find(s => s.id === idea.status);
    const effortCfg = EFFORT_SIZES.find(e => e.id === idea.effort);
    return (
      <div className={`p-4 rounded-xl border transition-all group relative ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : theme === 'spring' ? 'bg-white border-emerald-100' : 'bg-white border-slate-200'}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 flex-wrap">
            <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${PRIORITIES.find(p => p.id === idea.priority)?.color}`}>{idea.priority}</span>
            <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${effortCfg?.color}`}>{idea.effort}</span>
          </div>
          <div className="flex gap-1">
            <button onClick={() => { setEditingIdeaId(idea.id); setSparkForm({ ...idea }); setIsAdding(true); }} className="p-1 opacity-0 group-hover:opacity-100 hover:text-indigo-600"><Pencil className="w-3.5 h-3.5" /></button>
            <button onClick={() => deleteIdea(idea.id)} className="p-1 opacity-0 group-hover:opacity-100 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
        <h3 className="font-bold mb-1 truncate dark:text-white spring:text-emerald-900">{idea.title}</h3>
        {!compact && <p className="text-xs opacity-60 line-clamp-2 mb-3">{idea.description}</p>}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-50 dark:border-slate-800 spring:border-emerald-50">
          <div className="flex gap-1">
            <button disabled={!permissions.canEdit} onClick={() => updateStatus(idea.id, 'brainstorm')} className="p-1 hover:bg-slate-100 rounded"><ArrowLeft className="w-3.5 h-3.5" /></button>
            <button disabled={!permissions.canEdit} onClick={() => updateStatus(idea.id, 'completed')} className="p-1 hover:bg-slate-100 rounded"><ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
          <span className={`text-[10px] font-bold uppercase ${statusCfg?.color}`}>{statusCfg?.label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : theme === 'spring' ? 'spring' : ''} min-h-screen flex`}>
      <div className={`flex-1 flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-white' : theme === 'spring' ? 'bg-[#fdf9f1] text-emerald-900' : 'bg-slate-50 text-slate-900'}`}>
        <header className="p-4 border-b dark:border-slate-800 spring:border-emerald-100 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 spring:bg-white/60 backdrop-blur sticky top-0 z-40">
          <div className="flex items-center gap-4">
             <div className="p-2 bg-indigo-600 spring:bg-emerald-500 rounded-lg text-white"><Zap className="w-5 h-5" /></div>
             <h1 className="font-bold text-xl lg:block hidden">IdeaSpark</h1>
             <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg ml-4">
                <button onClick={() => setViewMode('kanban')} className={`px-3 py-1.5 rounded-md text-xs font-bold ${viewMode === 'kanban' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'opacity-50'}`}><LayoutGrid className="w-4 h-4" /></button>
                <button onClick={() => setViewMode('list')} className={`px-3 py-1.5 rounded-md text-xs font-bold ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'opacity-50'}`}><ListIcon className="w-4 h-4" /></button>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
               {theme === 'light' ? <Sun className="w-5 h-5" /> : theme === 'dark' ? <Moon className="w-5 h-5" /> : <Flower2 className="w-5 h-5" />}
             </button>
             <button onClick={openAddModal} className="bg-indigo-600 spring:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"><Plus className="w-4 h-4" /></button>
          </div>
        </header>

        <main className="p-6 overflow-y-auto">
          {viewMode === 'kanban' ? (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {STATUS_OPTIONS.map(col => (
                <div key={col.id} className="min-w-[300px] flex-shrink-0">
                  <div className={`p-3 rounded-xl border mb-4 flex justify-between items-center ${col.bg} ${col.border}`}>
                    <span className={`text-xs font-bold uppercase ${col.color}`}>{col.label}</span>
                    <span className="text-[10px] opacity-50">{filteredIdeas.filter(i => i.status === col.id).length}</span>
                  </div>
                  <div className="space-y-3">
                    {filteredIdeas.filter(i => i.status === col.id).map(idea => <IdeaCard key={idea.id} idea={idea} compact />)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredIdeas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}
            </div>
          )}
        </main>
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
           <div className="bg-white dark:bg-slate-900 spring:bg-[#fdf9f1] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
             <div className="p-6 border-b flex justify-between items-center">
               <h2 className="text-xl font-bold dark:text-white spring:text-emerald-900">{editingIdeaId ? 'Edit Spark' : 'New Spark'}</h2>
               <button onClick={() => setIsAdding(false)}><X className="w-5 h-5" /></button>
             </div>
             <form onSubmit={handleSparkSubmit} className="p-6 space-y-4">
               <input autoFocus required type="text" placeholder="Title" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700" value={sparkForm.title} onChange={e => setSparkForm({...sparkForm, title: e.target.value})} />
               <textarea rows="3" placeholder="Description" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700" value={sparkForm.description} onChange={e => setSparkForm({...sparkForm, description: e.target.value})} />
               <div className="grid grid-cols-3 gap-3">
                 <select className="p-2 rounded-lg border dark:bg-slate-800" value={sparkForm.priority} onChange={e => setSparkForm({...sparkForm, priority: e.target.value})}>{PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}</select>
                 <select className="p-2 rounded-lg border dark:bg-slate-800" value={sparkForm.effort} onChange={e => setSparkForm({...sparkForm, effort: e.target.value})}>{EFFORT_SIZES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
                 <select className="p-2 rounded-lg border dark:bg-slate-800" value={sparkForm.status} onChange={e => setSparkForm({...sparkForm, status: e.target.value})}>{STATUS_OPTIONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
               </div>
               <button type="submit" className="w-full py-3 bg-indigo-600 spring:bg-emerald-600 text-white font-bold rounded-xl shadow-lg">Save Spark</button>
             </form>
           </div>
        </div>
      )}
    </div>
  );
}
