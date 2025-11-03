import { config } from 'dotenv';

config();

export const env = {
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || '',
  SITE_URL: process.env.SITE_URL || 'http://localhost:5173',
  SITE_NAME: process.env.SITE_NAME || 'Portfolio Levana',
  PORT: parseInt(process.env.PORT || '3001', 10),
} as const;

if (!env.OPENROUTER_API_KEY) {
  throw new Error('OPENROUTER_API_KEY manquante dans .env');
}

