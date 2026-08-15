import { ALLOWED_EMAIL_DOMAIN } from './constants';

export const isAllowedEmail = (email: string): boolean => {
  if (!email || !email.includes('@')) {
    return false;
  }
  const domain = email.split('@')[1];
  return domain === ALLOWED_EMAIL_DOMAIN;
};

export const extractUserNameFromEmail = (email: string): string => {
  return email.split('@')[0];
};
