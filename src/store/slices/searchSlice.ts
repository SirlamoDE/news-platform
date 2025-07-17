// src/store/slices/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of this part of the state
interface SearchState {
  query: string;
}

// Set the initial state when the app loads
const initialState: SearchState = {
  query: '',
};

// Create the slice
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // This is our only action. It takes a string payload and updates the state.
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

// Export the action so our components can use it
export const { setSearchQuery } = searchSlice.actions;

// Export the reducer so our store can use it
export default searchSlice.reducer;