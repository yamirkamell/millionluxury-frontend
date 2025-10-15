import React from 'react';
import { Pagination } from '@/shared/components/ui/Pagination';

interface WithPaginationProps {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function withPagination<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithPaginationComponent(props: P & WithPaginationProps) {
    const { pagination, onPageChange, onPageSizeChange, ...restProps } = props;

    return (
      <div>
        <Component {...(restProps as P)} />
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          totalCount={pagination.total}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          itemsPerPage={pagination.pageSize}
        />
      </div>
    );
  };
}
