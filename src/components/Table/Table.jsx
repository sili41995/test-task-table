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
import { useSearchParams } from 'react-router-dom';
import searchParamsKeys from 'constants/searchParamsKeys';
import { useMemo } from 'react';
import { filterItemsByName, sortItemsByName } from 'utils';

const Table = () => {
  const items = useSelector(selectItems);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(searchParamsKeys.FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(searchParamsKeys.SORT_SP_KEY) ?? '';

  const filteredItems = useMemo(() => {
    const sortedItems = sortItemsByName(items, sortType);
    return filterItemsByName(sortedItems, filter);
  }, [filter, items, sortType]);

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
            {filteredItems.map((item, index) => (
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
