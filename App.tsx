
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import BuddyManager from './components/BuddyManager';
import Forum from './components/Forum';
import RelaxHub from './components/RelaxHub';
import CounselorConnect from './components/CounselorConnect';
import ChatView from './components/ChatView';
import LiveChatView from './components/LiveChatView';
import { MoodEntry, Buddy, BuddyMessage, UserAccount } from './types';
import { ANONYMOUS_NICKNAMES } from './constants';
import { BackendDB } from './services/backend';

type Theme = 'light' | 'dark' | 'amoled';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path 
      d="M3 13C3 13 5.5 13 7 18C8.5 13 11 4 12.5 4C14 4 16.5 13 18 18C19.5 13 22 13 22 13" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const AppContent: React.FC = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [buddies, setBuddies] = useState<Buddy[]>([]);
  const [messages, setMessages] = useState<BuddyMessage[]>([]);
  const [account, setAccount] = useState<UserAccount | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('vibecheck_theme') as Theme) || 'light';
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vibecheck_theme', theme);
  }, [theme]);

  useEffect(() => {
    const session = BackendDB.getActiveSession();
    if (session) {
      setAccount(session);
    } else {
      const randomNick = ANONYMOUS_NICKNAMES[Math.floor(Math.random() * ANONYMOUS_NICKNAMES.length)];
      const tempUser: UserAccount = {
        id: 'guest-' + Date.now(),
        username: randomNick.toLowerCase().replace(/\s/g, '_'),
        nickname: randomNick,
        email: 'guest@vibecheck.app',
        phone: '0000000000',
        createdAt: Date.now()
      };
      setAccount(tempUser);
      BackendDB.setActiveSession(tempUser);
    }
    
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'amoled';
      return 'light';
    });
  };

  const handleNewEntry = (entry: MoodEntry) => {
    setEntries(prev => [entry, ...prev]);
    navigate('/dashboard');
  };

  const handleAddBuddy = (buddy: Buddy) => setBuddies(prev => [...prev, buddy]);
  const handleRemoveBuddy = (id: string) => setBuddies(prev => prev.filter(b => b.id !== id));
  const handleUpdateBuddy = (buddy: Buddy) => setBuddies(prev => prev.map(b => b.id === buddy.id ? buddy : b));
  const handleMarkRead = (id: string) => setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));

  const isActive = (path: string) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '')) return true;
    return location.pathname === path;
  };

  const isLiveView = location.pathname.startsWith('/live');

  const navItems = [
    { path: '/', icon: 'fa-comments-alt', label: 'Global Feed' },
    { path: '/buddies', icon: 'fa-users-medical', label: 'Buddy Network' },
    { path: '/relax', icon: 'fa-couch', label: 'Relaxation' },
    { path: '/support', icon: 'fa-user-doctor', label: 'Professional Support' },
  ];

  const getThemeIcon = () => {
    if (theme === 'light') return 'fa-sun';
    if (theme === 'dark') return 'fa-moon';
    return 'fa-star';
  };

  if (!account) return null;

  return (
    <div className="min-h-screen flex flex-col h-screen overflow-hidden transition-colors duration-500">
      {!isLiveView && (
        <header className="fixed top-6 left-6 right-6 h-20 z-50 px-6 md:px-10 flex items-center justify-between liquid-glass squircle-md mx-auto max-w-[1400px]">
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 transition-all border border-indigo-500/10 shadow-sm"
            >
              <i className={`fas ${isSidebarOpen ? 'fa-arrow-left-long' : 'fa-bars-staggered'} text-lg`}></i>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Logo />
              </div>
              <span className="font-black text-2xl tracking-tighter hidden sm:inline-block">VibeCheck</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
             <button 
               onClick={toggleTheme}
               className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all shadow-sm group"
             >
               <i className={`fas ${getThemeIcon()} text-lg group-hover:rotate-12 transition-transform`}></i>
             </button>

             <div className="hidden lg:flex flex-col items-end px-2">
               <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest leading-none mb-1 opacity-70">Persona</span>
               <span className="font-black text-sm italic">@{account.username}</span>
             </div>
             
             <div className="flex items-center gap-3">
               <Link to="/tracker" className="h-11 px-5 bg-indigo-600 text-white rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:scale-[1.03] transition-transform">
                 <i className="fas fa-plus"></i> <span className="hidden md:inline">Log Mood</span>
               </Link>
             </div>
          </div>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden relative pt-24 md:pt-32 pb-8 px-6 h-full">
        {!isLiveView && (
          <aside className={`fixed lg:relative flex flex-col transition-all duration-500 ease-in-out z-40 h-[calc(100vh-140px)] overflow-hidden ${isSidebarOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0'}`}>
            <div className="w-80 h-full p-8 liquid-glass squircle-lg flex flex-col">
              <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Navigation</p>
              <nav className="space-y-3 flex-1">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-4 px-6 py-5 rounded-[1.8rem] font-black transition-all group overflow-hidden whitespace-nowrap ${isActive(item.path) ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/40 translate-x-2' : 'hover:bg-indigo-500/10 hover:translate-x-1'}`}
                  >
                    <div className="w-6 flex justify-center shrink-0"><i className={`fas ${item.icon} text-xl group-hover:scale-110 transition-transform`}></i></div>
                    <span className="text-sm tracking-tight">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Today's Focus</p>
                <p className="text-sm font-bold leading-relaxed">"One step at a time, you're doing great."</p>
              </div>
            </div>
          </aside>
        )}

        <main className={`flex-1 overflow-y-auto custom-scrollbar transition-all duration-500 relative px-2 md:px-10 ${isSidebarOpen && !isLiveView ? 'lg:pl-8' : ''}`}>
          <div className={`${isLiveView ? '' : 'max-w-6xl mx-auto w-full pb-20'}`}>
            <Routes>
              <Route path="/" element={<Forum userNickname={account.nickname} />} />
              <Route path="/buddies" element={<BuddyManager buddies={buddies} onAddBuddy={handleAddBuddy} onRemoveBuddy={handleRemoveBuddy} onUpdateBuddy={handleUpdateBuddy} />} />
              <Route path="/relax" element={<RelaxHub entries={entries} />} />
              <Route path="/support" element={<CounselorConnect entries={entries} userNickname={account.nickname} />} />
              <Route path="/dashboard" element={<Dashboard entries={entries} buddies={buddies} messages={messages} onMarkRead={handleMarkRead} />} />
              <Route path="/tracker" element={<MoodTracker onEntryComplete={handleNewEntry} />} />
              <Route path="/chat/:buddyId" element={<ChatView />} />
              <Route path="/live/:buddyId" element={<LiveChatView />} />
            </Routes>
          </div>
        </main>
      </div>

      {isSidebarOpen && !isLiveView && <div className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-md z-30" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
};

const App: React.FC = () => <Router><AppContent /></Router>;
export default App;
