import { MdEmail } from 'react-icons/md';
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import defaultAvatar from '../default-signin-avatar.png';
import { toasts } from 'utils';
import Input from 'components/Input';
import { selectIsLoading } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import iconBtnType from 'constants/iconBtnType';
import formType from 'constants/formType';

const LoginForm = () => {
  const [credentials, setCredentials] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const watchPassword = watch('password');

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().then(() => {
        toasts.successToast('Hello, my friend!');
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt='user avatar' />
      <Form onSubmit={handleSubmit(setCredentials)}>
        <Input
          settings={{
            ...register('username', { required: true, maxLength: 150 }),
          }}
          placeholder='Login'
          inputType={formType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<MdEmail />}
          fieldIconSize={20}
        />
        {errors.username?.type === 'required' &&
          toasts.errorToast('Login is required')}
        {errors.username?.type === 'maxLength' &&
          toasts.errorToast('Password max length is 150 characters')}
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: 6,
              maxLength: 128,
            }),
          }}
          type={isShowPassword ? 'text' : 'password'}
          placeholder='Password'
          inputType={formType.authForm}
          children={
            isShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
          }
          btnType={watchPassword && iconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<AiFillLock />}
          fieldIconSize={20}
        />
        {errors.password?.type === 'required' &&
          toasts.errorToast('Password is required')}
        {errors.password?.type === 'minLength' &&
          toasts.errorToast('Password min length is 6 characters')}
        {errors.password?.type === 'maxLength' &&
          toasts.errorToast('Password max length is 128 characters')}
        <Button disabled={isLoading} type='submit'>
          Log in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
