import { useState, useEffect } from "react";

const usePagination = () => {
  const [pagination, setPagination] = useState<{
    items: number,
    itemsPerPage: number,
    currentPage: number,
    totalPages: number,
    pageNumbers: number[]
  }>({
    items: 100, // TODO: Ver cómo pasar data
    itemsPerPage: 12,
    currentPage: 1,
    totalPages: 1,
    pageNumbers: [1]
  });

  useEffect(() => {
    const totalPages = Math.ceil(pagination.items / pagination.itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    setPagination((prevPagination) => ({
      ...prevPagination,
      totalPages,
      pageNumbers,
    }));
  }, [pagination.items, pagination.itemsPerPage]);

  const nextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  const prevPage = () => {
    if (pagination.currentPage > 1) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage - 1,
      }));
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= pagination.totalPages) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: pageNumber,
      }));
    }
  };

  return {
    nextPage,
    prevPage,
    goToPage,
    pagination,
  };
};

export default usePagination;