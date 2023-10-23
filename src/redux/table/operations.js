import { createAsyncThunk } from '@reduxjs/toolkit';
import tableServiceApi from 'service/tableServiceApi';

export const fetchItems = createAsyncThunk(
  'table/fetchItems',
  async (_, { rejectWithValue, signal }) => {
    try {
      const { results } = await tableServiceApi.fetchItems(signal);
      return results;
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
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = await contactsServiceApi.addContact(contact);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await contactsServiceApi.deleteContact(id);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
