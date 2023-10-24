import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectIsLoading } from 'redux/table/selectors';
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
import { BsPersonFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import formType from 'constants/formType';

const EditItem = ({ item }) => {
  const { name, email, birthday_date, phone_number, address } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCancelBtnClick = () => {
    navigate(location.state?.from ?? `/${pagesPath.tablePath}`);
  };

  const handleFormSubmit = (data) => {
    const itemInfo = getItemInfo(data);

    dispatch(updateItem({ itemInfo, id: item.id }))
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
            fieldIcon={<BsPersonFill />}
            fieldIconSize={18}
            inputType={formType.itemForm}
          />
          {errors.name?.type === 'maxLength' &&
            toasts.errorToast('Name max length is 255 characters')}
          {errors.name?.type === 'required' &&
            toasts.errorToast('Name is required')}
          <Input
            defaultValue={email}
            settings={{
              ...register('email', { required: true, maxLength: 254 }),
            }}
            type='email'
            placeholder='Email'
            inputWrap
            fieldIcon={<IoMdMail />}
            fieldIconSize={18}
            inputType={formType.itemForm}
          />
          {errors.email?.type === 'maxLength' &&
            toasts.errorToast('Email max length is 254 characters')}
          {errors.email?.type === 'required' &&
            toasts.errorToast('Email is required')}
          <Input
            defaultValue={birthday_date}
            settings={{ ...register('birthday_date', { required: true }) }}
            type='text'
            placeholder='Birthday date'
            pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}'
            title='dd-mm-yy'
            inputWrap
            fieldIcon={<LiaBirthdayCakeSolid />}
            fieldIconSize={18}
            inputType={formType.itemForm}
          />
          {errors.birthday_date?.type === 'required' &&
            toasts.errorToast('Birthday date is required')}
          <Input
            defaultValue={phone_number}
            settings={{
              ...register('phone_number', { required: true, maxLength: 20 }),
            }}
            type='tel'
            placeholder='Phone number'
            inputWrap
            fieldIcon={<FaPhoneAlt />}
            fieldIconSize={18}
            inputType={formType.itemForm}
          />
          {errors.phone_number?.type === 'maxLength' &&
            toasts.errorToast('Phone max length is 20 characters')}
          {errors.phone_number?.type === 'required' &&
            toasts.errorToast('Phone is required')}
          <Input
            defaultValue={address}
            settings={{ ...register('address', { required: true }) }}
            type='text'
            placeholder='Address'
            inputWrap
            fieldIcon={<BiHomeAlt />}
            fieldIconSize={18}
            inputType={formType.itemForm}
          />
          {errors.address?.type === 'required' &&
            toasts.errorToast('Address is required')}
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
