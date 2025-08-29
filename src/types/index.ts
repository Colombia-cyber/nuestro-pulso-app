export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'moderator' | 'user';
  createdAt: string;
  isOnline?: boolean;
}

export interface Message {
  id: string;
  content: string;
  authorId: string;
  author: User;
  timestamp: string;
  edited?: boolean;
  editedAt?: string;
}

export interface Debate {
  id: string;
  title: string;
  description: string;
  createdBy: User;
  participants: User[];
  status: 'active' | 'closed' | 'pending';
  createdAt: string;
  endDate?: string;
  tags: string[];
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: SurveyQuestion[];
  createdBy: User;
  status: 'draft' | 'active' | 'closed';
  createdAt: string;
  endDate?: string;
  responses: SurveyResponse[];
}

export interface SurveyQuestion {
  id: string;
  type: 'multiple-choice' | 'text' | 'rating' | 'boolean';
  question: string;
  options?: string[];
  required: boolean;
}

export interface SurveyResponse {
  id: string;
  userId: string;
  answers: Record<string, any>;
  submittedAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: User;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  imageUrl?: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: User;
  attendees: User[];
  maxAttendees?: number;
  tags: string[];
}

export interface AppConfig {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'es';
  notifications: {
    chat: boolean;
    debates: boolean;
    surveys: boolean;
    news: boolean;
    events: boolean;
  };
}