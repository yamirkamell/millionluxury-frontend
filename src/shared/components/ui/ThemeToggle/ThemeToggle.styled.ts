import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;


