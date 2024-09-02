import { useState } from 'react';

export const usePagination = (totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState('4');
  const totalPages = Math.ceil(totalItems / parseInt(perPage));

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const firstIndex = (currentPage - 1) * parseInt(perPage);
  const lastIndex = currentPage * parseInt(perPage);

  return {
    currentPage,
    firstIndex,
    handleNextPage,
    handlePrevPage,
    lastIndex,
    perPage,
    setCurrentPage,
    setPerPage,
    totalPages,
  };
};
