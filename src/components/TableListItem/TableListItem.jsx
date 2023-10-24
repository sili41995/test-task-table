import { useLocation, useNavigate } from 'react-router-dom';
import { Data, Row } from './TableListItem.styled';
import pagesPath from 'constants/pagesPath';

const TableListItem = ({ item, rowIndex }) => {
  const {
    id,
    name,
    email,
    birthday_date: birthdayDate,
    phone_number: phoneNumber,
    address,
  } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const onRowClick = () => {
    navigate(`/${pagesPath.tablePath}/${id}`, { state: { from: location } });
  };

  return (
    <Row index={rowIndex} onClick={onRowClick}>
      <Data>{name}</Data>
      <Data>{email}</Data>
      <Data>{birthdayDate}</Data>
      <Data>{phoneNumber}</Data>
      <Data>{address}</Data>
    </Row>
  );
};

export default TableListItem;
