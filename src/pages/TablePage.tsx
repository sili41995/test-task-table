import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginatedItems from 'components/PaginatedItems';
import Table from 'components/Table';
import {
  selectCount,
  selectIsLoaded,
  selectIsLoading,
} from 'redux/table/selectors';
import { fetchItems } from 'redux/table/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import Loader from 'components/Loader';

interface IProps {
  itemsPerPage?: number;
}

const TablePage: FC<IProps> = ({ itemsPerPage = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoaded = useAppSelector(selectIsLoaded);
  const count = useAppSelector(selectCount);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const page = searchParams.get('page');

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: String(1) });
    }
  }, [page, setSearchParams]);

  useEffect(() => {
    if (page) {
      const itemOffset = ((Number(page) - 1) * itemsPerPage) % count;
      const promise = dispatch(fetchItems({ itemOffset, itemsPerPage }));

      return () => {
        promise.abort();
      };
    }
  }, [count, dispatch, itemsPerPage, page]);

  return isLoaded ? (
    <>
      {isLoading ? <Loader /> : <Table />}
      <PaginatedItems itemsPerPage={itemsPerPage} />
    </>
  ) : (
    <Loader />
  );
};

export default TablePage;
