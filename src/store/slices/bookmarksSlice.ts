// src/store/slices/bookmarksSlice.ts
'use client'; // Marking this as a client-module helps Next.js with optimization

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
  storyIds: number[];
  isInitialized: boolean; // Add a flag to see it was loaded from storage
}

// Start with an empty, uninitialized state.
const initialState: BookmarksState = {
  storyIds: [],
  isInitialized: false,
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    // New action to load the state from localStorage
    initializeBookmarks: (state) => {
      // This check ensures we only run this logic in the browser
      if (typeof window !== 'undefined') {
        const savedBookmarks = localStorage.getItem('bookmarks');
        if (savedBookmarks) {
          state.storyIds = JSON.parse(savedBookmarks);
        }
      }
      state.isInitialized = true;
    },

    // The add and remove actions now also save to localStorage after every change.
    addBookmark: (state, action: PayloadAction<number>) => {
      if (!state.storyIds.includes(action.payload)) {
        state.storyIds.push(action.payload);
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('bookmarks', JSON.stringify(state.storyIds));
        }
      }
    },

    removeBookmark: (state, action: PayloadAction<number>) => {
      state.storyIds = state.storyIds.filter((id) => id !== action.payload);
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookmarks', JSON.stringify(state.storyIds));
      }
    },
  },
});

export const { initializeBookmarks, addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;