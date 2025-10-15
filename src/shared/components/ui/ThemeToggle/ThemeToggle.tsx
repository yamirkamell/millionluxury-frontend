import React from 'react';
import { useTheme } from '@/shared/components/providers/ThemeProvider';
import { ToggleButton } from './ThemeToggle.styled';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${isDarkMode ? 'claro' : 'oscuro'}`}
      title={`Cambiar a tema ${isDarkMode ? 'claro' : 'oscuro'}`}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};