import React from 'react';
import { ErrorMessage } from '@/shared/components/ui/ErrorMessage';

interface WithErrorProps {
  error: string | null;
  onRetry?: () => void;
}

export function withError<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithErrorComponent(props: P & WithErrorProps) {
    const { error, onRetry, ...restProps } = props;

    if (error) {
      return <ErrorMessage message={error} onRetry={onRetry} />;
    }

    return <Component {...(restProps as P)} />;
  };
}


