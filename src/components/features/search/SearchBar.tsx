// src/components/features/search/SearchBar.tsx
'use client';

import { useState, useEffect } from 'react'; // 1. Import useState and useEffect
import { useAppDispatch } from '@/lib/hooks';
import { setSearchQuery } from '@/store/slices/searchSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  // 2. Create local state to hold the real-time input value
  const [inputValue, setInputValue] = useState('');

  // 3. This useEffect hook implements the debounce logic
  useEffect(() => {
    // Set up a timer.
    const timer = setTimeout(() => {
      // After 600ms of no typing, dispatch the value to Redux.
      dispatch(setSearchQuery(inputValue));
    }, 600); // The debounce delay

    // This is the cleanup function.
    // It runs every time the component re-renders or when inputValue changes.
    // It clears the *previous* timer, so only the last one ever fires.
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, dispatch]); // The hook re-runs whenever the inputValue changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // On every keystroke, only update the local state.
    setInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search AGC Newsnet"
        value={inputValue} // The input's value is now controlled by our local state
        onChange={handleInputChange}
        className="w-full py-2 pl-4 pr-10 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;