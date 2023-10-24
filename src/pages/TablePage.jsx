import PaginatedItems from 'components/PaginatedItems';
import Table from 'components/Table';
import { useSelector } from 'react-redux';
import { selectCount, selectIsLoaded } from 'redux/table/selectors';
import { useDispatch } from 'react-redux';
import { fetchItems } from 'redux/table/operations';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const TablePage = ({ itemsPerPage = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoaded = useSelector(selectIsLoaded);
  const dispatch = useDispatch();
  const page = searchParams.get('page');
  const count = useSelector(selectCount);

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: 1 });
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

  return (
    isLoaded && (
      <>
        <Table />
        <PaginatedItems itemsPerPage={itemsPerPage} />
      </>
    )
  );
};

export default TablePage;
