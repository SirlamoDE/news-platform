// src/components/features/story/MoreStories.tsx
import { getStoriesByCategory } from '@/lib/api';
import { StoryDetails } from '@/types';
import Link from 'next/link';

// It now takes IDs as props to fetch its own data
interface MoreStoriesProps {
  categoryId: number;
  currentStoryId: number;
}

// It is now an async component
const MoreStories = async ({ categoryId, currentStoryId }: MoreStoriesProps) => {
  if (!categoryId) {
    return null;
  }

  const relatedRes = await getStoriesByCategory(categoryId);
  const allRelatedStories: StoryDetails[] = relatedRes?.data?.data || [];
  
  // Filter and slice the data inside this component
  const stories = allRelatedStories
    .filter(story => story.id !== currentStoryId)
    .slice(0, 5);

  if (stories.length === 0) {
    return null; // Don't render if there are no other stories
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="font-bold text-lg border-b pb-2 mb-4">MORE STORIES</h3>
      <ul className="space-y-3">
        {stories.map((story) => (
          <li key={story.id} className="text-red-600 hover:text-red-800 transition-colors">
            <Link href={`/stories/${story.id}`}>
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreStories;