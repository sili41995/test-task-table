import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectCount } from 'redux/table/selectors';
import { PaginateContainer } from './PaginatedItems.styled';
import { useSearchParams } from 'react-router-dom';

export const PaginatedItems = ({ itemsPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = useSelector(selectCount);
  const pageCount = Math.ceil(count / itemsPerPage);
  const page = searchParams.get('page');

  const handlePageClick = (event) => {
    setSearchParams({ page: event.selected + 1 });
  };

  return createPortal(
    page && (
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
        forcePage={Number(page) - 1}
      />
    ),
    document.getElementById('container')
  );
};

export default PaginatedItems;
