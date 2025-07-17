// src/app/stories/[storyId]/page.tsx


import { getStoryById } from '@/lib/api';
import { StoryDetails } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

// Import our new components
import MoreStories from '@/components/features/story/MoreStories';
import SidebarAd from '@/components/ads/SidebarAd';
import SplitArticleContent from '@/components/features/story/SplitArticleContent';
import ShareController from '@/components/features/story/ShareController';
import { StoryDetailPageProps} from '@/types/storyDetailsType';


export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { storyId } = await params;
  const storyResponse = await getStoryById(storyId);
  const story: StoryDetails = storyResponse?.data;

  // ... (error handling remains the same) ...

  const categoryId = story.category.category_id;
  const relatedStories: StoryDetails[] = []; // We will add logic to fetch related stories here later if needed

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full lg:w-2/3">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="px-4 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                ← Back
              </Link>
              {/* Add the ShareController here */}
              <ShareController />
            </div>

            <div className="flex items-center gap-4 mb-2">
              {/* The News Type button */}
              <span className="px-3 py-1 text-xs text-white bg-red-600 rounded-full">
                {story.category.category_name}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{story.title}</h1>
            <p className="text-xs text-gray-500 mb-4">Posted on {new Date(story.created_at).toLocaleDateString()} • 2 min(s) read</p>
            
            <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
              <Image src={story.banner_image} alt={story.title} fill style={{ objectFit: 'cover' }} priority />
            </div>

            {/* Use the new SplitArticleContent component */}
            <div className="prose lg:prose-lg max-w-none">
                <SplitArticleContent htmlContent={story.content} />
            </div>
          </article>
        </div>

        {/* Right Column */}
        <aside className="w-full lg:w-1/3 space-y-6">
        <MoreStories categoryId={story.category.category_id} currentStoryId={story.id} />
          <SidebarAd src="/mtn-ad.jpg" alt="Sidebar Ad 1" />
          <SidebarAd src="/story-detail-ad-side.PNG" alt="Sidebar Ad 2" />
        </aside>
      </div>
    </div>
  );
}