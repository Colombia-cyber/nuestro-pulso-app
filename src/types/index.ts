// Core civic platform types

export interface User {
  id: string;
  cedula?: string;
  name: string;
  email: string;
  avatar?: string;
  department: ColombianDepartment;
  municipality: string;
  achievements: Achievement[];
  civicScore: number;
  verified: boolean;
  joinedDate: Date;
  lastActive: Date;
}

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  description: string;
  icon: string;
  earnedDate: Date;
  points: number;
}

export const AchievementType = {
  DEMOCRACY_CHAMPION: 'democracy_champion',
  VOICE_OF_PEOPLE: 'voice_of_people',
  COMMUNITY_BUILDER: 'community_builder',
  PATRIOT_BRONZE: 'patriot_bronze',
  PATRIOT_SILVER: 'patriot_silver',
  PATRIOT_GOLD: 'patriot_gold',
} as const;

export type AchievementType = typeof AchievementType[keyof typeof AchievementType];

export interface CivicActivity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  department: ColombianDepartment;
  municipality?: string;
  participants: number;
  status: ActivityStatus;
  startDate: Date;
  endDate?: Date;
  createdBy: string;
  tags: string[];
}

export const ActivityType = {
  DEBATE: 'debate',
  SURVEY: 'survey',
  POLL: 'poll',
  TOWN_HALL: 'town_hall',
  PETITION: 'petition',
  PROPOSAL: 'proposal',
  GOVERNMENT_UPDATE: 'government_update',
} as const;

export type ActivityType = typeof ActivityType[keyof typeof ActivityType];

export const ActivityStatus = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  PENDING: 'pending',
  CANCELLED: 'cancelled',
} as const;

export type ActivityStatus = typeof ActivityStatus[keyof typeof ActivityStatus];

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  allowMultiple: boolean;
  anonymous: boolean;
  department?: ColombianDepartment;
  startDate: Date;
  endDate: Date;
  totalVotes: number;
  demographics: PollDemographics;
  status: ActivityStatus;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface PollDemographics {
  byAge: Record<string, number>;
  byGender: Record<string, number>;
  byDepartment: Record<ColombianDepartment, number>;
  byEducation: Record<string, number>;
}

export interface GovernmentBill {
  id: string;
  title: string;
  description: string;
  sponsor: string;
  status: BillStatus;
  chamber: 'senate' | 'house';
  submitDate: Date;
  votes: BillVotes;
  stages: BillStage[];
  budget?: number;
  relatedTopics: string[];
}

export const BillStatus = {
  INTRODUCED: 'introduced',
  COMMITTEE_REVIEW: 'committee_review',
  FLOOR_VOTE: 'floor_vote',
  PASSED: 'passed',
  REJECTED: 'rejected',
  SIGNED: 'signed',
  VETOED: 'vetoed',
} as const;

export type BillStatus = typeof BillStatus[keyof typeof BillStatus];

export interface BillVotes {
  inFavor: number;
  against: number;
  abstentions: number;
  representatives: RepresentativeVote[];
}

export interface RepresentativeVote {
  representativeId: string;
  name: string;
  vote: 'favor' | 'against' | 'abstention';
  date: Date;
}

export interface BillStage {
  id: string;
  name: string;
  status: 'pending' | 'in_progress' | 'completed';
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}

export interface Representative {
  id: string;
  name: string;
  party: string;
  position: string;
  department: ColombianDepartment;
  photoUrl?: string;
  email?: string;
  phone?: string;
  votingRecord: VotingRecord[];
  performance: PerformanceMetrics;
}

export interface VotingRecord {
  billId: string;
  billTitle: string;
  vote: 'favor' | 'against' | 'abstention';
  date: Date;
}

export interface PerformanceMetrics {
  attendanceRate: number;
  billsSponsored: number;
  billsPassed: number;
  publicApproval: number;
  transparencyScore: number;
}

export interface BudgetAllocation {
  id: string;
  category: string;
  subcategory: string;
  allocated: number;
  spent: number;
  department?: ColombianDepartment;
  year: number;
  quarter?: number;
  description: string;
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
}

export interface LiveStream {
  id: string;
  title: string;
  description: string;
  type: StreamType;
  url: string;
  isLive: boolean;
  startTime: Date;
  endTime?: Date;
  viewers: number;
  language: string;
  subtitles: string[];
  chat: ChatMessage[];
  recording?: string;
}

export const StreamType = {
  GOVERNMENT_EVENT: 'government_event',
  TOWN_HALL: 'town_hall',
  PRESIDENTIAL_ADDRESS: 'presidential_address',
  CONGRESS_SESSION: 'congress_session',
  PUBLIC_HEARING: 'public_hearing',
} as const;

export type StreamType = typeof StreamType[keyof typeof StreamType];

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: Date;
  isQuestion: boolean;
  answered?: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: any;
  read: boolean;
  urgent: boolean;
  createdAt: Date;
  scheduledFor?: Date;
}

export const NotificationType = {
  CIVIC_ALERT: 'civic_alert',
  ELECTION_REMINDER: 'election_reminder',
  BILL_UPDATE: 'bill_update',
  GOVERNMENT_ANNOUNCEMENT: 'government_announcement',
  ACHIEVEMENT_EARNED: 'achievement_earned',
  POLL_REMINDER: 'poll_reminder',
  MEETING_ALERT: 'meeting_alert',
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];

export const ColombianDepartment = {
  AMAZONAS: 'amazonas',
  ANTIOQUIA: 'antioquia',
  ARAUCA: 'arauca',
  ATLANTICO: 'atlantico',
  BOLIVAR: 'bolivar',
  BOYACA: 'boyaca',
  CALDAS: 'caldas',
  CAQUETA: 'caqueta',
  CASANARE: 'casanare',
  CAUCA: 'cauca',
  CESAR: 'cesar',
  CHOCO: 'choco',
  CORDOBA: 'cordoba',
  CUNDINAMARCA: 'cundinamarca',
  GUAINIA: 'guainia',
  GUAVIARE: 'guaviare',
  HUILA: 'huila',
  LA_GUAJIRA: 'la_guajira',
  MAGDALENA: 'magdalena',
  META: 'meta',
  NARINO: 'narino',
  NORTE_DE_SANTANDER: 'norte_de_santander',
  PUTUMAYO: 'putumayo',
  QUINDIO: 'quindio',
  RISARALDA: 'risaralda',
  SAN_ANDRES: 'san_andres',
  SANTANDER: 'santander',
  SUCRE: 'sucre',
  TOLIMA: 'tolima',
  VALLE_DEL_CAUCA: 'valle_del_cauca',
  VAUPES: 'vaupes',
  VICHADA: 'vichada',
  BOGOTA: 'bogota',
} as const;

export type ColombianDepartment = typeof ColombianDepartment[keyof typeof ColombianDepartment];

export interface CivicEducationModule {
  id: string;
  title: string;
  description: string;
  category: EducationCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  content: string;
  quiz?: Quiz;
  completedBy: string[];
  tags: string[];
}

export const EducationCategory = {
  CONSTITUTION: 'constitution',
  GOVERNMENT_STRUCTURE: 'government_structure',
  VOTING_PROCESS: 'voting_process',
  COLOMBIAN_HISTORY: 'colombian_history',
  CIVIC_RIGHTS: 'civic_rights',
  DEMOCRATIC_PROCESS: 'democratic_process',
} as const;

export type EducationCategory = typeof EducationCategory[keyof typeof EducationCategory];

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
  passingScore: number;
  attempts: QuizAttempt[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizAttempt {
  userId: string;
  score: number;
  completedAt: Date;
  answers: number[];
}

export interface AIRecommendation {
  id: string;
  userId: string;
  type: RecommendationType;
  title: string;
  description: string;
  action: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  expiresAt?: Date;
  data?: any;
}

export const RecommendationType = {
  CIVIC_ENGAGEMENT: 'civic_engagement',
  VOTING_REMINDER: 'voting_reminder',
  EDUCATION_CONTENT: 'education_content',
  LOCAL_GOVERNMENT: 'local_government',
  BILL_TRACKING: 'bill_tracking',
  COMMUNITY_INVOLVEMENT: 'community_involvement',
} as const;

export type RecommendationType = typeof RecommendationType[keyof typeof RecommendationType];

export interface MapRegion {
  id: string;
  name: string;
  department: ColombianDepartment;
  coordinates: [number, number][];
  center: [number, number];
  population: number;
  activeDebates: number;
  activeSurveys: number;
  civicScore: number;
  lastUpdated: Date;
}