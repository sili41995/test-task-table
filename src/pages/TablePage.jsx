import PaginatedItems from 'components/PaginatedItems';
import Table from 'components/Table';
import { useSelector } from 'react-redux';
import { selectIsLoaded } from 'redux/table/selectors';
import { useDispatch } from 'react-redux';
import { fetchItems } from 'redux/table/operations';
import { useEffect, useState } from 'react';

const TablePage = ({ itemsPerPage = 10 }) => {
  const isLoaded = useSelector(selectIsLoaded);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchItems({ itemOffset, itemsPerPage }));

    return () => {
      promise.abort();
    };
  }, [dispatch, itemOffset, itemsPerPage]);

  return (
    isLoaded && (
      <>
        <Table />
        <PaginatedItems
          itemsPerPage={itemsPerPage}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      </>
    )
  );
};

export default TablePage;
