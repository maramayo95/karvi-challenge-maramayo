import React, { useState } from 'react';
import { Item } from '../interface/types';

interface PaginationProps {
  items?: Item[];
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if(!items) return null;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'text-blue-600 border-t-2 border-blue-600 h-10 w-10 flex items-end justify-center' : ' h-10 w-10 flex items-end justify-center'}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full border-t-2 mt-4">
      <div className='pb-6 m-auto'>
        <div className="pagination flex justify-center text-gray-800 font-semibold">
          {currentPage !== 1 && <button className=' flex items-end justify-center'
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>}
          {renderPageNumbers()}
          {currentPage !== totalPages && <button className=' flex items-end justify-center'
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </button>}
      
        </div>
      </div>
    </div>
  );
};

export default Pagination;