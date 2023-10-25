import { toast } from 'react-toastify';

const errorToast = (message: string) => {
  toast.error(message);
};

const successToast = (message: string) => {
  toast.success(message);
};

const warnToast = (message: string) => {
  toast.warn(message);
};

const toasts = { errorToast, successToast, warnToast };

export default toasts;
