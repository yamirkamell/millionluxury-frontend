export const lightTheme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    error: '#dc2626',
    errorHover: '#b91c1c',
    errorBackground: '#fef2f2',
    success: '#16a34a',
    warning: '#d97706',
    warningHover: '#b45309',
    info: '#0ea5e9',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: '0.5rem',
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    secondary: '#94a3b8',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    border: '#334155',
    error: '#ef4444',
    errorHover: '#dc2626',
    errorBackground: '#1f2937',
    success: '#22c55e',
    warning: '#f59e0b',
    warningHover: '#d97706',
    info: '#06b6d4',
  },
};

export type Theme = typeof lightTheme;

