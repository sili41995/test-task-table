// import { useSelector } from 'react-redux';
// import { AiOutlineDelete } from 'react-icons/ai';
// import IconButton from 'components/IconButton';
// import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
// import { pagesPath, iconBtnType } from 'constants';
// import { getContactInfo } from 'utils';
// import { useDeleteContact } from 'hooks';
// import {
//   Email,
//   Image,
//   Item,
//   Role,
//   Name,
//   Phone,
//   ContactInfo,
//   Person,
// } from './ContactsListItem.styled';
// import { selectIsLoading } from 'redux/contacts/selectors';

import { useNavigate } from 'react-router-dom';
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
  // const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  // const isLoading = useSelector(selectIsLoading);
  // const deleteContact = useDeleteContact();
  // const path = `${pagesPath.contactDetailsPath}/${id}/${pagesPath.contactPath}`;

  const onRowClick = () => {
    navigate(`/${pagesPath.tablePath}/${id}`);
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
