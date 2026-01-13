
export enum MoodType {
  HAPPY = 'Happy',
  STRESSED = 'Stressed',
  ANXIOUS = 'Anxious',
  CALM = 'Calm',
  DEPRESSED = 'Depressed',
  ENERGIZED = 'Energized'
}

export interface UserAccount {
  id: string;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  createdAt: number;
}

export interface ForumPost {
  id: string;
  authorNickname: string;
  content: string;
  timestamp: number;
  tags: string[];
  replies: ForumReply[];
  supports: number;
  isFlagged: boolean;
  aiSuggestion?: string;
}

export interface ForumReply {
  id: string;
  authorNickname: string;
  content: string;
  timestamp: number;
  isAI: boolean;
}

export interface MoodEntry {
  id: string;
  timestamp: number;
  mood: MoodType;
  stressLevel: number;
  confidence: number;
  note?: string;
  analysis: string;
  interventions: Intervention[];
}

export interface Intervention {
  title: string;
  description: string;
  type: 'activity' | 'resource' | 'meditation';
  icon: string;
  duration?: string;
}

export interface Buddy {
  id: string;
  name: string;
  contact: string;
  pulse?: string;
  lastActive: number;
  isAI: boolean;
  personality?: string;
  avatarColor?: string;
  preferences: {
    alertOnHighStress: boolean;
    alertOnLowMood: boolean;
    anonymize: boolean;
  };
}

export interface BuddyMessage {
  id: string;
  buddyId: string;
  buddyName: string;
  content: string;
  type: 'message' | 'nudged';
  timestamp: number;
  isRead: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  parts: { text: string }[];
  timestamp: number;
}

// Added Counselor interface to fix missing export error
export interface Counselor {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  available: boolean;
  specialty: string;
  location: string;
  imageUrl: string;
}
