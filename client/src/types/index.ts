export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'suspended';
  createdAt: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  quizCount?: number;
}

export type QuizDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type QuizStatus = 'draft' | 'published' | 'archived';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  subjectName?: string;
  createdBy: string;
  creatorName?: string;
  difficulty: QuizDifficulty;
  durationSeconds: number;
  totalMarks: number;
  passingPercentage: number;
  negativeMarking: boolean;
  negativeMarksPerQuestion?: number;
  maxAttempts: number;
  availabilityStart?: string;
  availabilityEnd?: string;
  publicationStatus: QuizStatus;
  questionCount: number;
  createdAt: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  quizTitle: string;
  subjectName: string;
  userId: string;
  userName: string;
  attemptNumber: number;
  startedAt: string;
  deadlineAt: string;
  submittedAt?: string;
  status: 'in_progress' | 'submitted' | 'timed_out';
  score?: number;
  totalMarks: number;
  percentage?: number;
  correctCount?: number;
  incorrectCount?: number;
  unansweredCount?: number;
  timeTakenSeconds?: number;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  quizzesCompleted: number;
  totalScore: number;
  averagePercentage: number;
}
