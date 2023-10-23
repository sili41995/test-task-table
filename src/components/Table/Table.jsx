import { useSelector } from 'react-redux';
import { selectItems } from 'redux/table/selectors';
import {
  Body,
  Container,
  Head,
  Header,
  Row,
  TableContainer,
} from './Table.styled';
import TableListItem from 'components/TableListItem';
import DefaultMessage from 'components/DefaultMessage';

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
        <TableContainer>
          <Head>
            <Row>
              <Header>Name</Header>
              <Header>Email</Header>
              <Header>Birthday</Header>
              <Header>Phone</Header>
              <Header>Address</Header>
            </Row>
          </Head>
          <Body>
            {items.map((item, index) => (
              <TableListItem item={item} key={item.id} rowIndex={index} />
            ))}
          </Body>
        </TableContainer>
      ) : (
        <DefaultMessage message='Table is empty' />
      )}
    </Container>
  );
};

export default Table;
