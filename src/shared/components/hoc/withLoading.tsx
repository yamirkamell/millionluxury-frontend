import React from 'react';
import { LoadingSpinner } from '@/shared/components/ui/LoadingSpinner';

interface WithLoadingProps {
  loading: boolean;
}

export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { loading, ...restProps } = props;

    if (loading) {
      return <LoadingSpinner />;
    }

    return <Component {...(restProps as P)} />;
  };
}


