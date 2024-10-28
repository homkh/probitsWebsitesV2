"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface PaginationProps {
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    router.push(`?page=${pageNumber}`); // Update the page in URL
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        // className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
      >
        ←
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        // className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
