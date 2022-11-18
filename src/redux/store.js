import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducers from '@/redux/slices';

const persistConfig = {
	key: 'warehouse-app',
	whitelist: ['search'],
	storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({ reducer: persistedReducers, middleware: [thunk] });
export const persistor = persistStore(store);
