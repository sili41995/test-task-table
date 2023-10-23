import Loader from 'components/Loader';
import Table from 'components/Table';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchItems } from 'redux/table/operations';
import { selectIsLoaded } from 'redux/table/selectors';

const TablePage = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectIsLoaded);

  useEffect(() => {
    const promise = dispatch(fetchItems());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      {isLoaded && <Table />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TablePage;
