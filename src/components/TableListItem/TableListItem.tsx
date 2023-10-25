import { useLocation, useNavigate } from 'react-router-dom';
import { Data, Row } from './TableListItem.styled';
import { FC } from 'react';
import { IProps } from './TableListItem.types';
import { PagesPath } from 'constants/pagesPath';

const TableListItem: FC<IProps> = ({ item, rowIndex }) => {
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
    const options = { state: { from: location } };
    navigate(`/${PagesPath.tablePath}/${id}`, options);
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
