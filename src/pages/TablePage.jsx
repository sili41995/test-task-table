import PaginatedItems from 'components/PaginatedItems';
import Table from 'components/Table';
import { useSelector } from 'react-redux';
import { selectIsLoaded } from 'redux/table/selectors';

const TablePage = () => {
  const isLoaded = useSelector(selectIsLoaded);

  return isLoaded && <Table />;
};

export default TablePage;
