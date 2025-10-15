import styled from 'styled-components';

export const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const FiltersForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FiltersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: unset;
    width: 100%;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-end;
    flex-direction: row;
    width: auto;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: all 0.2s;

  ${({ $variant, theme }) => {
    if ($variant === 'primary') {
      return `
        background-color: ${theme.colors.primary};
        color: white;
        border: none;

        &:hover {
          background-color: ${theme.colors.primaryHover};
        }
      `;
    }
    return `
      background-color: transparent;
      color: ${theme.colors.textSecondary};
      border: 1px solid ${theme.colors.border};

      &:hover {
        background-color: ${theme.colors.surface};
        color: ${theme.colors.text};
      }
    `;
  }}
`;