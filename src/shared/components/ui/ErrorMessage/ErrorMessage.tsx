import React from 'react';
import { ErrorContainer, ErrorIcon, ErrorText, RetryButton } from './ErrorMessage.styled';
import { FaExclamationTriangle } from 'react-icons/fa';

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorIcon><FaExclamationTriangle /></ErrorIcon>
      <ErrorText>{message}</ErrorText>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Reintentar
        </RetryButton>
      )}
    </ErrorContainer>
  );
};


