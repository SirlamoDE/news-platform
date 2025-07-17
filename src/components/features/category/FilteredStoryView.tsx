// src/components/features/category/FilteredStoryView.tsx
'use client';

import { useAppSelector } from '@/lib/hooks';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getStoriesByCategory } from '@/lib/api';
import StoryCard from '@/components/ui/StoryCard';
import SkeletonCard from '@/components/ui/SkeletonCard';
import { StoryApiResponse } from '@/types';

// Create a single QueryClient instance
const queryClient = new QueryClient();

// The actual view component that fetches and displays data
const FilteredViewContent = () => {
  // 1. Get the selected category ID from the Redux store
  const selectedCategory = useAppSelector((state) => state.category.selectedCategory);

  // 2. Use React Query to fetch data.
  // The query will automatically re-run when `selectedCategory` changes.
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['stories', selectedCategory], // The key identifies this specific query
    queryFn: () => getStoriesByCategory(selectedCategory!), // The function that fetches data
    enabled: !!selectedCategory, // VERY IMPORTANT: Only run the query if a category is selected
  });

  // 3. Handle the loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Show 8 skeleton cards while loading */}
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  // 4. Handle the error state
  if (isError) {
    return <div className="text-red-500">Error fetching stories: {error.message}</div>;
  }

  // 5. Prepare the data for rendering
  // The API for category stories might not have the 'story' wrapper, let's be safe.
  // We need to check the actual response shape. Let's assume it's like latest-stories for now.
  const stories: StoryApiResponse[] = data?.data?.data || [];
  const validStories = stories.filter(res => res && res.story); // Only keep responses with a valid story

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-600 pl-4 text-gray-800">
        Results
      </h2>
      {validStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {validStories.map((res) => (
            <StoryCard key={res.story!.id} story={res.story!} />
          ))}
        </div>
      ) : (
        <p>No stories found for this category.</p>
      )}
    </div>
  );
};

// The main component that wraps the view with the QueryClientProvider
const FilteredStoryView = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4">
        <FilteredViewContent />
      </div>
    </QueryClientProvider>
  );
};

export default FilteredStoryView;