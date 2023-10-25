import 'react-toastify/dist/ReactToastify.css';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import { Buttons, Container, Form, Title } from './EditItem.styled';
import {
  IoIosCall,
  IoMdBusiness,
  IoMdCalendar,
  IoMdMail,
  IoMdPerson,
} from 'react-icons/io';
import { IProps } from './EditItem.types';
import { getItemInfo, toasts } from 'utils';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { updateItem } from 'redux/table/operations';
import { selectIsLoading } from 'redux/table/selectors';
import { IItem } from 'types/types';
import Input from 'components/Input';
import IconButton from 'components/IconButton';
import { BtnType } from 'constants/btnType';
import { FormType } from 'constants/formType';
import { PagesPath } from 'constants/pagesPath';
import IconBtnType from 'constants/iconBtnType';

const EditItem: FC<IProps> = ({ item, location }) => {
  const { name, email, birthday_date, phone_number, address } = item;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IItem>();

  useEffect(() => {
    errors.name?.type === 'maxLength' &&
      toasts.errorToast('Name max length is 255 characters');
    errors.name?.type === 'required' && toasts.errorToast('Name is required');
    errors.email?.type === 'maxLength' &&
      toasts.errorToast('Email max length is 254 characters');
    errors.phone_number?.type === 'maxLength' &&
      toasts.errorToast('Phone max length is 20 characters');
    errors.birthday_date?.type === 'required' &&
      toasts.errorToast('Birthday date is required');
    errors.email?.type === 'required' && toasts.errorToast('Email is required');
    errors.phone_number?.type === 'required' &&
      toasts.errorToast('Phone is required');
    errors.address?.type === 'required' &&
      toasts.errorToast('Address is required');
  }, [errors, isSubmitting]);

  const handleCancelBtnClick = () => {
    navigate(location?.from ?? `/${PagesPath.tablePath}`);
  };

  const handleFormSubmit: SubmitHandler<IItem> = (data: IItem) => {
    const itemInfo = getItemInfo(data);

    dispatch(updateItem({ itemInfo, id: item.id as string }))
      .unwrap()
      .then(() => {
        toasts.successToast('Item updated successfully');
        handleCancelBtnClick();
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
            defaultValue={name}
            settings={{
              ...register('name', { required: true, maxLength: 255 }),
            }}
            type='text'
            placeholder='Name'
            inputWrap
            fieldIcon={<IoMdPerson />}
            inputType={FormType.itemForm}
          />
          <Input
            defaultValue={email}
            settings={{
              ...register('email', { required: true, maxLength: 254 }),
            }}
            type='email'
            placeholder='Email'
            inputWrap
            fieldIcon={<IoMdMail />}
            inputType={FormType.itemForm}
          />
          <Input
            defaultValue={birthday_date}
            settings={{ ...register('birthday_date', { required: true }) }}
            type='text'
            placeholder='Birthday date'
            pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}'
            title='dd-mm-yy'
            inputWrap
            fieldIcon={<IoMdCalendar />}
            inputType={FormType.itemForm}
          />
          <Input
            defaultValue={phone_number}
            settings={{
              ...register('phone_number', { required: true, maxLength: 20 }),
            }}
            type='tel'
            placeholder='Phone number'
            inputWrap
            fieldIcon={<IoIosCall />}
            inputType={FormType.itemForm}
          />
          <Input
            defaultValue={address}
            settings={{ ...register('address', { required: true }) }}
            type='text'
            placeholder='Address'
            inputWrap
            fieldIcon={<IoMdBusiness />}
            inputType={FormType.itemForm}
          />
          <Buttons>
            <IconButton
              disabled={isLoading}
              btnType={IconBtnType.accept}
              width={44}
              height={35}
              type={BtnType.submit}
            >
              <GiCheckMark />
            </IconButton>
            <IconButton
              btnType={IconBtnType.cancel}
              width={44}
              height={35}
              onBtnClick={handleCancelBtnClick}
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
