import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import HomeSlice from './Home/HomeSlice';

const store = configureStore({
  reducer: {
    Home: HomeSlice,
  },
  middleware: [thunk, createLogger()],
});

export default store;
