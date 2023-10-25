import { FC, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Body,
  Container,
  Head,
  Header,
  Row,
  TableContainer,
} from './Table.styled';
import { filterItemsByName, sortItemsByName } from 'utils';
import { useAppSelector } from 'hooks/redux';
import { selectItems } from 'redux/table/selectors';
import { IItem } from 'types/types';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import TableListItem from 'components/TableListItem';
import DefaultMessage from 'components/DefaultMessage';

const Table: FC = () => {
  const items = useAppSelector(selectItems);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(SearchParamsKeys.FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SearchParamsKeys.SORT_SP_KEY) ?? '';

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
            {filteredItems.map((item: IItem, index: number) => (
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
