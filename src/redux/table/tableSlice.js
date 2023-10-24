import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { fetchItems, updateItem } from './operations';

const handlePending = (state) => ({
  ...state,
  isLoading: true,
});

const handleRejected = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

const tableSlice = createSlice({
  name: 'table',
  initialState: initialState.table,
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

      .addMatcher(
        isAnyOf(fetchItems.pending, updateItem.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchItems.rejected, updateItem.rejected),
        handleRejected
      );
  },
});

export default tableSlice.reducer;
