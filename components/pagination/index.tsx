import { useRouter } from 'next/navigation';

interface PaginationProps {
  total: number;
  limit: number;
  currentPage:number
  handleChangePage:(page:number)=> void,
  productTitle: string
}

export const FIRST_PAGE = 1
export const LIMIT = 10


const Pagination: React.FC<PaginationProps> = ({ total, limit,currentPage,handleChangePage,productTitle="" }) => {
  const router = useRouter();
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    const prevPage = currentPage - FIRST_PAGE;
    if (prevPage >= FIRST_PAGE) {
      handleChangePage(prevPage);
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + FIRST_PAGE;
    if (nextPage <= totalPages) {
      handleChangePage(nextPage);
    }
  };
  const item = currentPage > 1 ? ((currentPage-1) * limit+1) : currentPage
  const renderPages = () => {
    const pages = [];

    for (let i = FIRST_PAGE; i <= 10; i++) {
      // limit 10  

      //demo : prev  FIRST_PAGE 2 3 4 5 next
      pages.push(
        <button
          key={i}
          onClick={() => handleChangePage(i)}
          className={`px-3 py-1 rounded-md ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-200'
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-between border-y-2 py-2">
      <p> Từ <b>{item}</b> đến <b>{limit+item}</b> trong <b>{total}</b> {productTitle}</p>

      <div className="flex space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === FIRST_PAGE}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-600"
      >
        Prev
      </button>
      {renderPages()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-600"
      >
        Next
      </button>
    </div>
    </div>
    
  );
};

export default Pagination;