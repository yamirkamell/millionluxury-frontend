import React from 'react';
import { SpinnerContainer, Spinner } from './LoadingSpinner.styled';

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message = 'Cargando...' 
}) => {
  const sizeMap = {
    small: '20px',
    medium: '40px',
    large: '60px',
  };

  return (
    <SpinnerContainer>
      <div style={{ textAlign: 'center' }}>
        <Spinner style={{ width: sizeMap[size], height: sizeMap[size] }} />
        {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
      </div>
    </SpinnerContainer>
  );
};


