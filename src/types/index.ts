export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  userId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ChatRequest {
  message: string;
  sessionId: string;
  context?: Record<string, unknown>;
}

export interface ChatResponse {
  id: string;
  content: string;
  sessionId: string;
  createdAt: Date;
}
