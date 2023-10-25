import { IInitialState } from 'types/types';

const initialState: IInitialState = {
  auth: {
    isLoggedIn: false,
    isLoading: false,
  },
  table: {
    items: [],
    isLoading: false,
    isLoaded: false,
    error: null,
    count: 0,
  },
};

export default initialState;
