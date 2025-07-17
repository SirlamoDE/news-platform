// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './slices/bookmarksSlice';
import categoryReducer from './slices/categorySlice';
import searchReducer from './slices/searchSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookmarks: bookmarksReducer,
      category: categoryReducer,
      search: searchReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];