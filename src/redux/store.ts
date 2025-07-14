import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postSlice';

import { postApi } from './services/postApi';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
