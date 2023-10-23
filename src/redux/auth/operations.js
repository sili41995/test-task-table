import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue, signal }) => {
    try {
      console.log(credentials);
      const response = await tableServiceApi.loginUser(credentials, signal);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
