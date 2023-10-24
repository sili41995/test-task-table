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
