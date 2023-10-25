import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { selectCount } from 'redux/table/selectors';
import { PaginateContainer } from './PaginatedItems.styled';
import { IProps } from './PaginatedItems.types';
import { useAppSelector } from 'hooks/redux';

export const PaginatedItems: FC<IProps> = ({ itemsPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = useAppSelector(selectCount);
  const pageCount = Math.ceil(count / itemsPerPage);
  const page = searchParams.get('page');

  const handlePageClick = (e: { selected: number }) => {
    setSearchParams({ page: String(e.selected + 1) });
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
    document.getElementById('container') as HTMLElement
  );
};

export default PaginatedItems;
