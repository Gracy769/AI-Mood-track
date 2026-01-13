
import { Counselor } from './types';

export const COLORS = {
  primary: '#4f46e5', // Indigo
  secondary: '#10b981', // Emerald
  accent: '#f43f5e', // Rose
  surface: '#ffffff',
  background: '#f8fafc',
  text: '#1e293b'
};

export const AI_COMPANIONS: any[] = [
  {
    id: 'ai-1',
    name: 'Atlas',
    personality: 'stoic',
    description: 'The Resilience Anchor. Steady as a rock when deadlines pile up. He helps you build mental toughness.',
    pulse: 'Grounded',
    avatarColor: 'from-slate-700 to-indigo-900',
    icon: 'fa-shield-halved',
    supportStyle: 'Resilience Coach',
    vibe: 'Steady & Strong'
  },
  {
    id: 'ai-2',
    name: 'Nova',
    personality: 'cheerleader',
    description: 'Your Personal Hype Engine. She turns every small win into a celebration. Pure electric energy.',
    pulse: 'Radiant',
    avatarColor: 'from-amber-400 to-rose-500',
    icon: 'fa-bolt-lightning',
    supportStyle: 'Motivation Mentor',
    vibe: 'High Energy'
  },
  {
    id: 'ai-3',
    name: 'Luna',
    personality: 'zen',
    description: 'The Serenity Guide. For when your mind is racing. She brings the calm of a quiet night on campus.',
    pulse: 'Zen',
    avatarColor: 'from-teal-300 to-indigo-500',
    icon: 'fa-leaf',
    supportStyle: 'Mindfulness Expert',
    vibe: 'Peaceful & Soft'
  },
  {
    id: 'ai-4',
    name: 'Sol',
    personality: 'mentor',
    description: 'The Clarity Master. Logical, clear-eyed, and strategic. He helps you map out a way through the chaos.',
    pulse: 'Focused',
    avatarColor: 'from-sky-400 to-blue-700',
    icon: 'fa-compass',
    supportStyle: 'Strategic Ally',
    vibe: 'Wise & Clear'
  }
];

export const ANONYMOUS_NICKNAMES = [
  "Silver Spark", "Quiet Phoenix", "Steady Anchor", "Brave Heart", 
  "Ethereal Wave", "Mellow Echo", "Radiant Spirit", "Resilient Soul",
  "Calm Nomad", "Wandering Cloud", "Kind Observer", "Silent Ally"
];

export const COUNSELORS: Counselor[] = [
  { 
    id: 'c4', 
    name: 'Ms. S. Bhuvaneswari', 
    role: 'Student Counselor', 
    phone: '9791142617', 
    email: 'bhuvaneswari.s@vit.ac.in', 
    available: true,
    specialty: 'Academic Wellness & Support',
    location: 'Academic Block 1, First Floor',
    imageUrl: 'https://i.ibb.co/hFNVz2dD/bhuvaneswari.jpg' 
  },
  { 
    id: 'c5', 
    name: 'Dr. Maya R', 
    role: 'Wellness Specialist', 
    phone: '9444333030', 
    email: 'maya.r@vit.ac.in', 
    available: true,
    specialty: 'Clinical Psychology',
    location: 'Academic Block 2, Seventh Floor',
    imageUrl: 'https://i.ibb.co/j9BbYK9b/maya.jpg' 
  },
  { 
    id: 'c6', 
    name: 'Dr. Vijayabanu U', 
    role: 'Clinical Psychologist', 
    phone: '9791092232', 
    email: 'vijayabanu.u@vit.ac.in', 
    available: true,
    specialty: 'Cognitive Behavioral Therapy',
    location: 'Room No:7, Academic Block 3, Ground Floor',
    imageUrl: 'https://i.ibb.co/0phhxmNw/vijayabanu.jpg' 
  },
  { 
    id: 'c2', 
    name: 'Dr. Sarah Mitchell', 
    role: 'Clinical Psychologist', 
    phone: '04448136222', 
    email: 'sarah.m@campuscare.com', 
    available: true,
    specialty: 'Academic Pressure & Burnout',
    location: 'Building B, Room 402',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'c3', 
    name: 'Prof. David Chen', 
    role: 'Student Mentor', 
    phone: '9444008050', 
    email: 'd.chen@admin.ac.in', 
    available: false,
    specialty: 'Grief & Social Transition',
    location: 'Main Admin Office',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'c1', 
    name: 'Wellness Center', 
    role: 'Primary Support', 
    phone: '04422578521', 
    email: 'wellness@iitm.ac.in', 
    available: true,
    specialty: 'Crisis & General Counseling',
    location: 'Wellness Wing, Ground Floor',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=200'
  }
];

export const SAMPLE_RESOURCES = [
  {
    id: 'res-1',
    title: 'Mindful Breathing',
    description: 'A simple guided breathing exercise to center yourself during high-stress study sessions.',
    url: 'https://www.youtube.com/watch?v=inpok4MKVLM',
    type: 'video',
    category: 'breathe'
  },
  {
    id: 'res-2',
    title: 'Campus Zen Meditation',
    description: '10-minute mindfulness practice specifically designed for student life pressures.',
    url: 'https://www.youtube.com/watch?v=ZToicYcHIOU',
    type: 'video',
    category: 'meditation'
  }
];

export const MOOD_CONFIG: any = {
  Happy: { color: '#10b981', icon: 'fa-smile-beam' },
  Stressed: { color: '#f43f5e', icon: 'fa-tired' },
  Anxious: { color: '#f59e0b', icon: 'fa-wind' },
  Calm: { color: '#6366f1', icon: 'fa-peace' },
  Depressed: { color: '#475569', icon: 'fa-cloud-showers-heavy' },
  Energized: { color: '#fbbf24', icon: 'fa-bolt' }
};
