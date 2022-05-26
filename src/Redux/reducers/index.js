import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  debug: true,
  storage,
};

// Uncomment to clean persistor store
//storage.removeItem('root:persist');

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
