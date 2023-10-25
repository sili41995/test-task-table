import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';
import { IItem, IUpdateItemData } from 'types/types';

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

export const updateItem = createAsyncThunk<
  IItem,
  IUpdateItemData,
  { rejectValue: string }
>('table/updateItem', async (data, { rejectWithValue }) => {
  try {
    const response = await tableServiceApi.updateItem(data);
    return response;
  } catch (error) {
    return rejectWithValue(error as string);
  }
});
