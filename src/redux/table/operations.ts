import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';
import {
  IFetchItemsResponse,
  IFetchItemsSettings,
  IItem,
  IUpdateItemData,
} from 'types/types';

export const fetchItems = createAsyncThunk<
  IFetchItemsResponse,
  IFetchItemsSettings,
  { rejectValue: string }
>('table/fetchItems', async (settings, { rejectWithValue, signal }) => {
  try {
    const response = await tableServiceApi.fetchItems(settings, signal);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const updateItem = createAsyncThunk<
  IItem,
  IUpdateItemData,
  { rejectValue: string }
>('table/updateItem', async (data, { rejectWithValue }) => {
  try {
    const response = await tableServiceApi.updateItem(data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
