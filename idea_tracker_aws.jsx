import React, { useState, useEffect, useMemo } from 'react';
import { 
  CognitoIdentityProviderClient, 
  InitiateAuthCommand 
} from '@aws-sdk/client-cognito-identity-provider';
import { 
  DynamoDBClient 
} from '@aws-sdk/client-dynamodb';
import { 
  DynamoDBDocumentClient, 
  PutCommand, 
  QueryCommand, 
  UpdateCommand, 
  DeleteCommand,
  ScanCommand
} from '@aws-sdk/lib-dynamodb';
import { 
  Plus, Lightbulb, Archive, Trash2, CheckCircle2, Clock, 
  Zap, LayoutGrid, List as ListIcon, ArrowRight, ArrowLeft, 
  X, Moon, Sun, Flower2, Pencil
} from 'lucide-react';

/**
 * --- AWS CONFIGURATION ---
 * Replace with your AWS credentials and region
 */
const AWS_CONFIG = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  },
  userPoolId: 'YOUR_USER_POOL_ID',
  clientId: 'YOUR_CLIENT_ID'
};

// Initialize AWS clients
const dynamoClient = new DynamoDBClient(AWS_CONFIG);
const docClient = DynamoDBDocumentClient.from(dynamoClient);

const TABLES = {
  IDEAS: 'ideaspark-ideas',
  GROUPS: 'ideaspark-groups'
};

const STATUS_OPTIONS = [
  { id: 'brainstorm', label: 'Brainstorming', icon: Lightbulb, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10', border: 'border-yellow-200 dark:border-yellow-500/20' },
  { id: 'incubating', label: 'Incubating', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/20' },
  { id: 'active', label: 'In Motion', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/20' },
  { id: 'completed', label: 'Launched', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-200 dark:border-green-500/20' },
  { id: 'archived', label: 'Archived', icon: Archive, color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-500/10', border: 'border-gray-200 dark:border-gray-500/20' },
];

const PRIORITIES = [
  { id: 'low', label: 'Low', color: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' },
  { id: 'medium', label: 'Medium', color: 'bg-orange-200 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400' },
  { id: 'high', label: 'High', color: 'bg-red-200 dark:bg-red-500/20 text-red-700 dark:text-red-400' },
];

const EFFORT_SIZES = [
  { id: 'XS', label: 'XS', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10' },
  { id: 'S', label: 'S', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/5' },
  { id: 'M', label: 'M', color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10' },
  { id: 'L', label: 'L', color: 'bg-pink-50 text-pink-600 dark:bg-pink-500/10' },
  { id: 'XL', label: 'XL', color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10' },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('kanban');
  const [theme, setTheme] = useState('light');
  const [isAdding, setIsAdding] = useState(false);
  const [editingIdeaId, setEditingIdeaId] = useState(null);
  const [sparkForm, setSparkForm] = useState({ 
    title: '', 
    description: '', 
    status: 'brainstorm', 
    priority: 'medium', 
    effort: 'M' 
  });

  // Initialize anonymous user
  useEffect(() => {
    const userId = localStorage.getItem('userId') || `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('userId', userId);
    setUser({ uid: userId });
  }, []);

  // Fetch ideas
  useEffect(() => {
    if (!user) return;
    fetchIdeas();
  }, [user]);

  const fetchIdeas = async () => {
    try {
      const command = new QueryCommand({
        TableName: TABLES.IDEAS,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
          ':pk': `USER#${user.uid}`
        }
      });
      
      const response = await docClient.send(command);
      const items = response.Items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status,
        priority: item.priority,
        effort: item.effort,
        tasks: JSON.parse(item.tasks || '[]'),
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      }));
      
      setIdeas(items.sort((a, b) => b.createdAt - a.createdAt));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ideas:', error);
      setLoading(false);
    }
  };

  const handleSparkSubmit = async (e) => {
    e.preventDefault();
    if (!user || !sparkForm.title.trim()) return;

    try {
      const now = new Date().toISOString();
      const ideaId = editingIdeaId || `idea-${Date.now()}`;

      const command = new PutCommand({
        TableName: TABLES.IDEAS,
        Item: {
          PK: `USER#${user.uid}`,
          SK: `IDEA#${ideaId}`,
          id: ideaId,
          userId: user.uid,
          title: sparkForm.title,
          description: sparkForm.description || '',
          status: sparkForm.status,
          priority: sparkForm.priority,
          effort: sparkForm.effort,
          tasks: '[]',
          createdBy: user.uid,
          creatorName: user.uid.substring(0, 5),
          createdAt: editingIdeaId ? ideas.find(i => i.id === ideaId)?.createdAt.toISOString() : now,
          updatedAt: now
        }
      });

      await docClient.send(command);
      await fetchIdeas();
      setIsAdding(false);
      setEditingIdeaId(null);
      setSparkForm({ title: '', description: '', status: 'brainstorm', priority: 'medium', effort: 'M' });
    } catch (error) {
      console.error('Error saving idea:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const command = new UpdateCommand({
        TableName: TABLES.IDEAS,
        Key: {
          PK: `USER#${user.uid}`,
          SK: `IDEA#${id}`
        },
        UpdateExpression: 'SET #status = :status, updatedAt = :updatedAt',
        ExpressionAttributeNames: {
          '#status': 'status'
        },
        ExpressionAttributeValues: {
          ':status': status,
          ':updatedAt': new Date().toISOString()
        }
      });

      await docClient.send(command);
      await fetchIdeas();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteIdea = async (id) => {
    try {
      const command = new DeleteCommand({
        TableName: TABLES.IDEAS,
        Key: {
          PK: `USER#${user.uid}`,
          SK: `IDEA#${id}`
        }
      });

      await docClient.send(command);
      await fetchIdeas();
    } catch (error) {
      console.error('Error deleting idea:', error);
    }
  };

  const toggleTheme = () => {
    const modes = ['light', 'dark'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const openAddModal = () => {
    setSparkForm({ title: '', description: '', status: 'brainstorm', priority: 'medium', effort: 'M' });
    setEditingIdeaId(null);
    setIsAdding(true);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Zap className="animate-pulse text-indigo-600 w-12 h-12" />
      </div>
    );
  }

  const IdeaCard = ({ idea, compact = false }) => {
    const statusCfg = STATUS_OPTIONS.find(s => s.id === idea.status);
    const effortCfg = EFFORT_SIZES.find(e => e.id === idea.effort);
    const priorityCfg = PRIORITIES.find(p => p.id === idea.priority);

    return (
      <div className={`p-4 rounded-xl border transition-all group relative ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 flex-wrap">
            <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${priorityCfg?.color}`}>
              {idea.priority}
            </span>
            <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${effortCfg?.color}`}>
              {idea.effort}
            </span>
          </div>
          <div className="flex gap-1">
            <button 
              onClick={() => { 
                setEditingIdeaId(idea.id); 
                setSparkForm({ ...idea }); 
                setIsAdding(true); 
              }} 
              className="p-1 opacity-0 group-hover:opacity-100 hover:text-indigo-600"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => deleteIdea(idea.id)} 
              className="p-1 opacity-0 group-hover:opacity-100 hover:text-red-600"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <h3 className="font-bold mb-1 truncate dark:text-white">{idea.title}</h3>
        {!compact && <p className="text-xs opacity-60 line-clamp-2 mb-3">{idea.description}</p>}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-50 dark:border-slate-800">
          <div className="flex gap-1">
            <button 
              onClick={() => updateStatus(idea.id, 'brainstorm')} 
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => updateStatus(idea.id, 'completed')} 
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className={`text-[10px] font-bold uppercase ${statusCfg?.color}`}>
            {statusCfg?.label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen flex`}>
      <div className={`flex-1 flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <header className="p-4 border-b dark:border-slate-800 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Zap className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl lg:block hidden">IdeaSpark</h1>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg ml-4">
              <button 
                onClick={() => setViewMode('kanban')} 
                className={`px-3 py-1.5 rounded-md text-xs font-bold ${viewMode === 'kanban' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'opacity-50'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`px-3 py-1.5 rounded-md text-xs font-bold ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'opacity-50'}`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={openAddModal} 
              className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </header>

        <main className="p-6 overflow-y-auto">
          {viewMode === 'kanban' ? (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {STATUS_OPTIONS.map(col => (
                <div key={col.id} className="min-w-[300px] flex-shrink-0">
                  <div className={`p-3 rounded-xl border mb-4 flex justify-between items-center ${col.bg} ${col.border}`}>
                    <span className={`text-xs font-bold uppercase ${col.color}`}>{col.label}</span>
                    <span className="text-[10px] opacity-50">
                      {ideas.filter(i => i.status === col.id).length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {ideas.filter(i => i.status === col.id).map(idea => (
                      <IdeaCard key={idea.id} idea={idea} compact />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ideas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}
            </div>
          )}
        </main>
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold dark:text-white">
                {editingIdeaId ? 'Edit Spark' : 'New Spark'}
              </h2>
              <button onClick={() => setIsAdding(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSparkSubmit} className="p-6 space-y-4">
              <input 
                autoFocus 
                required 
                type="text" 
                placeholder="Title" 
                className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700" 
                value={sparkForm.title} 
                onChange={e => setSparkForm({...sparkForm, title: e.target.value})} 
              />
              <textarea 
                rows="3" 
                placeholder="Description" 
                className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700" 
                value={sparkForm.description} 
                onChange={e => setSparkForm({...sparkForm, description: e.target.value})} 
              />
              <div className="grid grid-cols-3 gap-3">
                <select 
                  className="p-2 rounded-lg border dark:bg-slate-800" 
                  value={sparkForm.priority} 
                  onChange={e => setSparkForm({...sparkForm, priority: e.target.value})}
                >
                  {PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
                </select>
                <select 
                  className="p-2 rounded-lg border dark:bg-slate-800" 
                  value={sparkForm.effort} 
                  onChange={e => setSparkForm({...sparkForm, effort: e.target.value})}
                >
                  {EFFORT_SIZES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
                <select 
                  className="p-2 rounded-lg border dark:bg-slate-800" 
                  value={sparkForm.status} 
                  onChange={e => setSparkForm({...sparkForm, status: e.target.value})}
                >
                  {STATUS_OPTIONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg"
              >
                Save Spark
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
