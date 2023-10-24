import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectItems } from 'redux/table/selectors';
import { Buttons, Container, Form, Title } from './EditItem.styled';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import iconBtnType from 'constants/iconBtnType';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { getItemInfo, toasts } from 'utils';
import { updateItem } from 'redux/table/operations';
import pagesPath from 'constants/pagesPath';
import 'react-toastify/dist/ReactToastify.css';

const EditItem = () => {
  const [item, setItem] = useState(null);
  const items = useSelector(selectItems);
  const { id } = useParams();
  const dispatch = useDispatch();
  const targetItem = items.find(({ id: itemId }) => itemId === Number(id));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setItem(targetItem);
  }, [items, targetItem]);

  const navigateToMain = () => {
    navigate(`/${pagesPath.tablePath}`);
  };

  const handleFormSubmit = (data) => {
    const itemInfo = getItemInfo(data);

    dispatch(updateItem({ itemInfo, id }))
      .unwrap()
      .then(() => {
        toasts.successToast('Item updated successfully');
        navigateToMain();
      })
      .catch(() => {
        toasts.errorToast('Item update failed');
      });
  };

  return (
    item && (
      <Container>
        <Title>Table row editing</Title>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            defaultValue={item.name}
            settings={{
              ...register('name', { required: true, maxLength: 255 }),
            }}
            type='text'
            placeholder='Name'
            inputWrap
            // fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
          {errors.name?.type === 'maxLength' &&
            toasts.errorToast('Name max length is 255 characters')}
          {errors.name?.type === 'required' &&
            toasts.errorToast('Name is required')}
          <Input
            defaultValue={item.email}
            settings={{
              ...register('email', { required: true, maxLength: 254 }),
            }}
            type='email'
            placeholder='Email'
            inputWrap
            // fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
          {errors.email?.type === 'maxLength' &&
            toasts.errorToast('Email max length is 254 characters')}
          {errors.email?.type === 'required' &&
            toasts.errorToast('Email is required')}
          <Input
            defaultValue={item.birthday_date}
            settings={{ ...register('birthday_date', { required: true }) }}
            type='text'
            placeholder='Birthday date'
            pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}'
            title='dd-mm-yy'
            inputWrap
            // fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
          {errors.birthday_date?.type === 'required' &&
            toasts.errorToast('Birthday date is required')}
          <Input
            defaultValue={item.phone_number}
            settings={{
              ...register('phone_number', { required: true, maxLength: 20 }),
            }}
            type='tel'
            placeholder='Phone number'
            inputWrap
            // fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
          {errors.phone_number?.type === 'maxLength' &&
            toasts.errorToast('Phone max length is 20 characters')}
          {errors.phone_number?.type === 'required' &&
            toasts.errorToast('Phone is required')}
          <Input
            defaultValue={item.address}
            settings={{ ...register('address', { required: true }) }}
            type='text'
            placeholder='Address'
            inputWrap
            // fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
          {errors.address?.type === 'required' &&
            toasts.errorToast('Address is required')}
          <Buttons>
            <IconButton
              // disabled={isLoading}
              btnType={iconBtnType.accept}
              width={44}
              height={35}
              type='submit'
            >
              <GiCheckMark />
            </IconButton>
            <IconButton
              btnType={iconBtnType.cancel}
              width={44}
              height={35}
              onBtnClick={navigateToMain}
            >
              <GoX />
            </IconButton>
          </Buttons>
        </Form>
      </Container>
    )
  );
};

export default EditItem;
