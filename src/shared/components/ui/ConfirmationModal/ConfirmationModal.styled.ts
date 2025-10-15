import styled from 'styled-components';

export const ConfirmationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ConfirmationTitle = styled.h3<{ variant: 'danger' | 'warning' | 'info' }>`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'danger':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      case 'info':
        return theme.colors.primary;
      default:
        return theme.colors.error;
    }
  }};
  text-align: center;
`;

export const ConfirmationMessage = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const ConfirmButton = styled.button<{ variant: 'danger' | 'warning' | 'info' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ theme, variant }) => {
    switch (variant) {
      case 'danger':
        return `
          background-color: ${theme.colors.error};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.errorHover || '#dc2626'};
          }
        `;
      case 'warning':
        return `
          background-color: ${theme.colors.warning};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.warningHover || '#d97706'};
          }
        `;
      case 'info':
        return `
          background-color: ${theme.colors.primary};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryHover || '#2563eb'};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.error};
          color: white;
        `;
    }
  }}
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
