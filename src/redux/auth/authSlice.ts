import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser } from './operations';
import { IAuthInitialState } from 'types/types';

const authState: IAuthInitialState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: { logout: () => initialState.auth },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(loginUser.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
      }))
      .addCase(loginUser.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
