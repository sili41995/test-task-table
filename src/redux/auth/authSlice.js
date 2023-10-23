import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser } from './operations';

const handlePending = (state) => ({ ...state, isLoading: true });
const handleRejected = (state) => ({
  ...state,
  isLoading: false,
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
      }))
      .addCase(loginUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;
