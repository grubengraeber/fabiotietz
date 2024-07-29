import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationContent,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export interface PaginationProps {
  totalPages: number;
  totalPagesToDisplay?: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CustomPagination: React.FC<PaginationProps> = ({
  totalPages,
  totalPagesToDisplay = 5,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const showLeftEllipsis = currentPage - 1 > totalPagesToDisplay / 2;
  const showRightEllipsis = totalPages - currentPage > totalPagesToDisplay / 2;

  const getPageNumbers = () => {
    if (totalPages <= totalPagesToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const half = Math.floor(totalPagesToDisplay / 2);
      let start = currentPage - half;
      let end = currentPage + half - 1;

      if (start < 1) {
        start = 1;
        end = totalPagesToDisplay;
      } else if (end > totalPages) {
        end = totalPages;
        start = end - totalPagesToDisplay + 1;
      }

      const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
      return pageNumbers;
    }
  };

  const renderPaginationItems = () => {
    const pageNumbers = getPageNumbers();
    const items = pageNumbers.map((pageNumber) => (
      <PaginationItem key={pageNumber}>
        <PaginationLink
          href='#'
          isActive={pageNumber === currentPage}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ));

    if (showLeftEllipsis && pageNumbers.length > 0 && pageNumbers[0] > 1) {
      items.unshift(
        <PaginationItem key="leftEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (showRightEllipsis && pageNumbers.length > 0 && pageNumbers[pageNumbers.length - 1] < totalPages) {
      items.push(
        <PaginationItem key="rightEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
