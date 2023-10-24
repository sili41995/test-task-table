import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue, signal }) => {
    try {
      const response = await tableServiceApi.loginUser(credentials, signal);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
