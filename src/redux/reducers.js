import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import tableReducer from './table/tableSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  table: tableReducer,
});

export default rootReducer;
