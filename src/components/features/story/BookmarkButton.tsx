// src/components/features/story/BookmarkButton.tsx
'use client';

// 1. Import useDispatch directly from react-redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/lib/hooks';
import { addBookmark, removeBookmark } from '@/store/slices/bookmarksSlice';
import { AppDispatch } from '@/store/store'; // Import the AppDispatch type

interface BookmarkButtonProps {
  storyId: number;
}

const BookmarkButton = ({ storyId }: BookmarkButtonProps) => {
  // 2. Use the standard hook and type it correctly.
  const dispatch: AppDispatch = useDispatch();
  
  // This part is correct and remains the same.
  const bookmarkedIds = useAppSelector((state) => state.bookmarks.storyIds);
  const isBookmarked = bookmarkedIds.includes(storyId);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    // Stop the click from navigating to the story detail page
    e.stopPropagation();
    e.preventDefault();

    if (isBookmarked) {
      dispatch(removeBookmark(storyId));
    } else {
      dispatch(addBookmark(storyId));
    }
  };

  return (
    <button
      onClick={handleToggleBookmark}
      className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill={isBookmarked ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
};

export default BookmarkButton;