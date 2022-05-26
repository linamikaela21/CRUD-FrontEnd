import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import persistedReducer from '../reducers';

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
