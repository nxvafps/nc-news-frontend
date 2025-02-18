import { useEffect, useState } from "react";
import {
  PaginationContainer,
  PageButton,
  PageInfo,
  ButtonText,
  PageNumbersContainer,
  PageNumber,
} from "./styles";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}) {
  const [isClient, setIsClient] = useState(false);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    setIsClient(true);

    const getPageNumbers = () => {
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
        rangeWithDots.push(1, "...");
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push("...", totalPages);
      } else if (totalPages > 1) {
        rangeWithDots.push(totalPages);
      }

      setPageNumbers(rangeWithDots);
    };

    getPageNumbers();
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages && !disabled) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer role="navigation" aria-label="Pagination">
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        aria-label="Go to previous page"
        title="Previous page"
      >
        <ButtonText>←</ButtonText>
        <span className="sr-only">Previous page</span>
      </PageButton>

      {isClient && totalPages > 0 && (
        <PageNumbersContainer aria-label="Page numbers">
          {pageNumbers.map((number, index) =>
            number === "..." ? (
              <PageInfo key={`dots-${index}`} aria-hidden="true">
                ...
              </PageInfo>
            ) : (
              <PageNumber
                key={number}
                $active={currentPage === number}
                onClick={() => handlePageChange(number)}
                disabled={disabled}
                aria-label={`Go to page ${number}`}
                aria-current={currentPage === number ? "page" : undefined}
              >
                {number}
              </PageNumber>
            )
          )}
        </PageNumbersContainer>
      )}

      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        aria-label="Go to next page"
        title="Next page"
      >
        <ButtonText>→</ButtonText>
        <span className="sr-only">Next page</span>
      </PageButton>
    </PaginationContainer>
  );
}

export default Pagination;
