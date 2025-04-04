interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-3 h-8 rounded-sm border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600  transition-colors cursor-pointer"
      >
        Prev
      </button>

      <div className="flex items-center gap-1">
        <span className="text-gray-500">{currentPage + 1}</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-500">{totalPages}</span>
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
        className="px-3 h-8 rounded-sm border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600  transition-colors cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
