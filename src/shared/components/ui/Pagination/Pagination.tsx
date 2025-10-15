import React from 'react';
import { PaginationWrapper, TopRow, BottomRow, PaginationControls, ResultsInfo, PageSizeSelector, PageButton, Select, ArrowButton } from './Pagination.styled';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  itemsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
  onPageSizeChange,
  itemsPerPage,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const startItem = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalCount);

  return (
    <PaginationWrapper>
      <TopRow>
        <PaginationControls>
          <ArrowButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            title="Página anterior"
          >
            ‹
          </ArrowButton>

          {getVisiblePages().map((page, index) => (
            <PageButton
              key={index}
              $active={page === currentPage}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
            >
              {page}
            </PageButton>
          ))}

          <ArrowButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            title="Página siguiente"
          >
            ›
          </ArrowButton>
        </PaginationControls>
      </TopRow>

      <BottomRow>
        <PageSizeSelector>
          <ResultsInfo>
            Resultados: {startItem} - {endItem} de {totalCount}
          </ResultsInfo>
          <Select
            value={itemsPerPage}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </Select>
        </PageSizeSelector>
      </BottomRow>
    </PaginationWrapper>
  );
};
