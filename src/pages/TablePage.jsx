import PaginatedItems from 'components/PaginatedItems';
import Table from 'components/Table';
import { useSelector } from 'react-redux';
import { selectCount, selectIsLoaded } from 'redux/table/selectors';
import { useDispatch } from 'react-redux';
import { fetchItems } from 'redux/table/operations';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const TablePage = ({ itemsPerPage = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoaded = useSelector(selectIsLoaded);
  const dispatch = useDispatch();
  const page = searchParams.get('page');
  const count = useSelector(selectCount);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && !page) {
      setSearchParams({ page: 1 });
    }
    isFirstRender.current = false;
  });

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
