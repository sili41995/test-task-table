import { createPortal } from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { selectCount } from 'redux/table/selectors';

export const PaginatedItems = ({ itemsPerPage, setItemOffset }) => {
  const count = useSelector(selectCount);
  const pageCount = Math.ceil(count / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % count;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return createPortal(
    <ReactPaginate
      breakLabel='...'
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel='< previous'
      renderOnZeroPageCount={null}
    />,
    document.getElementById('container')
  );
};

export default PaginatedItems;
