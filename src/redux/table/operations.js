import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';

export const fetchItems = createAsyncThunk(
  'table/fetchItems',
  async (settings, { rejectWithValue, signal }) => {
    try {
      const response = await tableServiceApi.fetchItems(settings, signal);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateItem = createAsyncThunk(
  'table/updateItem',
  async (data, { rejectWithValue }) => {
    try {
      const response = await tableServiceApi.updateItem(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
