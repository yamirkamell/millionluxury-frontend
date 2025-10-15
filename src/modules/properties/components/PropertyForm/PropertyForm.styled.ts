import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.875rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  ${({ variant, theme }) => {
    if (variant === 'primary') {
      return `
        background-color: ${theme.colors.primary};
        color: white;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryHover};
        }
      `;
    }
    
    return `
      background-color: ${theme.colors.surface};
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.border};
      
      &:hover:not(:disabled) {
        background-color: ${theme.colors.background};
      }
    `;
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.errorBackground};
  color: ${({ theme }) => theme.colors.error};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 1rem;
  text-align: center;
`;
