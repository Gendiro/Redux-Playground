import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSpecificPage?: (page: number) => void;
}

let Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onSpecificPage,
}: PaginationProps) => {
  const pages: JSX.Element[] = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    if (currentPage === i)
      pages.push(
        <button
          className="w-10 p-2 border-2 m-2 border-blue-300 bg-blue-300 rounded-xl"
          key={i}
        >
          {i}
        </button>
      );
    else
      pages.push(
        <button
          className="w-10 p-2 border-2 m-2 border-gray-300 rounded-xl hover:bg-gray-200"
          onClick={onSpecificPage && (() => onSpecificPage(i))}
          key={i}
        >
          {i}
        </button>
      );
  }
  return (
    <div className="flex flex-wrap justify-center">
      <button
        className="w-10 p-2 border-2 m-2 border-gray-300 rounded-xl hover:bg-gray-200"
        onClick={onPrevPage}
      >
        &lt;
      </button>
      {pages}
      <button
        className="w-10 p-2 border-2 m-2 border-gray-300 rounded-xl hover:bg-gray-200"
        onClick={onNextPage}
      >
        &gt;
      </button>
    </div>
  );
};

Pagination = React.memo(Pagination);
export default Pagination;
