import React from 'react';
import { LoadingSpinner } from '@/shared/components/ui';
import { ErrorMessage } from '@/shared/components/ui';
import { StateContainer, EmptyState } from './PropertyListState.styled';

interface PropertyListStateProps {
  loading: boolean;
  error: string | null;
  hasProperties: boolean;
}

export const PropertyListState: React.FC<PropertyListStateProps> = ({
  loading,
  error,
  hasProperties,
}) => {
  if (loading) {
    return (
      <StateContainer>
        <LoadingSpinner />
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <ErrorMessage message={error} />
      </StateContainer>
    );
  }

  if (!hasProperties) {
    return (
      <EmptyState>
        No se encontraron propiedades.
      </EmptyState>
    );
  }

  return null;
};
