import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { fetchItems, updateItem } from './operations';
import { ITableInitialState } from 'types/types';
import { logout } from 'redux/auth/authSlice';

const tableState: ITableInitialState = initialState.table;

const tableSlice = createSlice({
  name: 'table',
  initialState: tableState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        error: initialState.table.error,
        items: payload.results,
        count: payload.count,
      }))
      .addCase(updateItem.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items.filter(({ id }) => id !== payload.id), payload],
      }))
      .addCase(logout, () => ({ ...initialState.table }))
      .addMatcher(isAnyOf(fetchItems.pending, updateItem.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(
        isAnyOf(fetchItems.rejected, updateItem.rejected),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default tableSlice.reducer;
