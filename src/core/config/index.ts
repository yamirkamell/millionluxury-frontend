export const config = {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5053',
    timeout: 10000,
  },
  app: {
    name: 'Million Luxury',
    version: '1.0.0',
  },
  cache: {
    duration: 5 * 60 * 1000,
  },
} as const;

export type Config = typeof config;
