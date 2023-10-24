import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';
import { toasts } from 'utils';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue, signal }) => {
    try {
      const response = await tableServiceApi.loginUser(credentials, signal);
      if (response.error) {
        toasts.errorToast('Wrong username or password');
        throw new Error();
      }
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
