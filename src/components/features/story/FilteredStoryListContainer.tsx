// src/components/features/story/FilteredStoryListContainer.tsx
'use client';

import { useMemo } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { StoryApiResponse } from '@/types';
import StoryList from './StoryList';


interface FilteredStoryListContainerProps {
  title: string;
  stories: StoryApiResponse[];
}

const FilteredStoryListContainer = ({ title, stories }: FilteredStoryListContainerProps) => {
  // Get the current search query from the Redux store
  const searchQuery = useAppSelector((state) => state.search.query);

  // useMemo will re-run the filter only when the stories array or search query changes.
  // This is a great performance optimization.
  const filteredStories = useMemo(() => {
    if (!searchQuery) {
      return stories; // If search is empty, return all stories
    }
    return stories.filter((apiResponse) =>
      apiResponse.story?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [stories, searchQuery]);


  
  // If the filtered list is empty, don't render the whole section.
  if (filteredStories.length === 0) {
    return null;
  }

  return <StoryList title={title} stories={filteredStories} />;
};

export default FilteredStoryListContainer;