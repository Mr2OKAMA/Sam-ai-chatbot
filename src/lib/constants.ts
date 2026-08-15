export const ALLOWED_EMAIL_DOMAIN =
  process.env.ALLOWED_EMAIL_DOMAIN || 'your-company.jp';

export const APP_CONFIG = {
  appName: 'Sam AI Chatbot',
  appDescription: '下水処理場運転管理AIチャットボット',
  version: '1.0.0',
};

export const API_ENDPOINTS = {
  chat: '/api/chat',
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  },
};

export const CHAT_CONFIG = {
  maxHistoryLength: 50,
  messageBatchSize: 20,
};
