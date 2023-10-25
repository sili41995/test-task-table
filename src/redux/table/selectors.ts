import { IInitialState } from 'types/types';

export const selectItems = (state: IInitialState) => state.table.items;

export const selectError = (state: IInitialState) => state.table.error;

export const selectIsLoading = (state: IInitialState) => state.table.isLoading;

export const selectIsLoaded = (state: IInitialState) => state.table.isLoaded;

export const selectCount = (state: IInitialState) => state.table.count;
