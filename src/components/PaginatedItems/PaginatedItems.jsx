import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectCount } from 'redux/table/selectors';
import { PaginateContainer } from './PaginatedItems.styled';

export const PaginatedItems = ({ itemsPerPage, setItemOffset }) => {
  const count = useSelector(selectCount);
  const pageCount = Math.ceil(count / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % count;
    console.log(event.selected);
    setItemOffset(newOffset);
  };

  return createPortal(
    <PaginateContainer
      breakLabel='...'
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel='< previous'
      renderOnZeroPageCount={null}
      activeLinkClassName='active-page'
      className='pagination-container'
    />,
    document.getElementById('container')
  );
};

export default PaginatedItems;
