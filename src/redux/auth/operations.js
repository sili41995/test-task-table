import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/tableServiceApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue, signal }) => {
    try {
      const response = await contactsServiceApi.loginUser(credentials, signal);
      return response;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
