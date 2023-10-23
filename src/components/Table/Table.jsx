import EmptyTableMessage from 'components/EmptyTableMessage';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/table/selectors';
import { Container } from './Table.styled';

const Table = () => {
  const items = useSelector(selectItems);
  // const [searchParams] = useSearchParams();
  // const filter = searchParams.get(searchParamsKeys.FILTER_SP_KEY) ?? '';
  // const sortType = searchParams.get(searchParamsKeys.SORT_SP_KEY) ?? '';

  // const filteredContacts = useMemo(() => {
  //   const sortedContacts = sortContactsByName(contacts, sortType);
  //   return filterContactsByName(sortedContacts, filter);
  // }, [contacts, filter, sortType]);

  return (
    <Container>
      {!!items.length ? (
        <Table>
          {items.map((item) => (
            <TableListItem item={item} key={item.id} />
          ))}
        </Table>
      ) : (
        <EmptyTableMessage />
      )}
    </Container>
  );
};

export default Table;
