import { IInitialState } from 'types/types';

export const selectIsLoggedIn = (state: IInitialState) => state.auth.isLoggedIn;

export const selectIsLoading = (state: IInitialState) => state.auth.isLoading;
