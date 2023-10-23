import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectIsLoaded,
  selectIsLoading,
  selectItems,
} from 'redux/table/selectors';
import { Buttons, Container, Form, Title } from './EditItem.styled';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import iconBtnType from 'constants/iconBtnType';
import IconButton from 'components/IconButton';
import { toasts } from 'utils';
import Input from 'components/Input';
import pagesPath from 'constants/pagesPath';
import useTargetItem from 'hooks/useTargetItem';

const EditItem = () => {
  const [item, setItem] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const params = useParams();
  const isLoaded = useSelector(selectIsLoaded);

  useEffect(() => {
    console.log(params);
  }, [params]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    // dispatch(updateItem({ data, id }))
    //   .unwrap()
    //   .then(() => {
    //     toasts.successToast('Item updated successfully');
    //   })
    //   .catch(() => {
    //     toasts.errorToast('Item update failed');
    //   });
  };

  return (
    <Container>
      <Title>Table row editing</Title>
      {/* <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          defaultValue={item.name}
          settings={{
            ...register('name', { required: true, maxLength: 255 }),
          }}
          type='text'
          placeholder='Name'
          inputWrap
          // fieldIcon={<FaUser />}
        />
        <Input
          defaultValue={item.email}
          settings={{
            ...register('email', { required: true, maxLength: 254 }),
          }}
          type='email'
          placeholder='Email'
          inputWrap
          // fieldIcon={<FaUser />}
        />
        <Input
          defaultValue={item.birthdayDate}
          settings={{ ...register('birthday_date', { required: true }) }}
          type='text'
          placeholder='Birthday date'
          inputWrap
          // fieldIcon={<FaUser />}
        />
        <Input
          defaultValue={item.phoneNumber}
          settings={{
            ...register('phone_number', { required: true, maxLength: 20 }),
          }}
          type='tel'
          placeholder='Phone number'
          inputWrap
          // fieldIcon={<FaUser />}
        />
        <Input
          defaultValue={item.address}
          settings={{ ...register('address', { required: true }) }}
          type='text'
          placeholder='Address'
          inputWrap
          // fieldIcon={<FaUser />}
        />
        <Buttons>
          <IconButton
            disabled={isLoading}
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
            // onBtnClick={}
          >
            <GoX />
          </IconButton>
        </Buttons>
      </Form> */}
    </Container>
  );
};

export default EditItem;
