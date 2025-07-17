// src/app/stories/[storyId]/page.tsx

import { getStoryById } from '@/lib/api'; // Only need one API function here
import { StoryDetails } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

import MoreStories from '@/components/features/story/MoreStories';
import SidebarAd from '@/components/ads/SidebarAd';
import { StoryDetailPageProps } from '@/types/storyDetailsType';



export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { storyId } = await params;

  // We only fetch the single story here.
  const storyResponse = await getStoryById(storyId);
  const story: StoryDetails = storyResponse?.data;

  if (!story) {
    // ... (error handling remains the same)

    return (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold mb-4">404 - Story Not Found</h1>
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">
            Back to Home
          </Link>
        </div>
      );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Column (Main Article) - No changes here */}
        <div className="w-full lg:w-3/4">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-semibold text-red-600 mb-2">{story.category.category_name}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{story.title}</h1>
            <p className="text-xs text-gray-500 mb-4">Posted on {new Date(story.created_at).toLocaleDateString()} • 2 min(s) read</p>
            <p className="text-sm text-gray-600 mb-4">Photo by: {story.author}</p>

            <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
              <Image src={story.banner_image} alt={story.title} fill style={{ objectFit: 'cover' }} priority />
            </div>

            <div
              className="prose lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
          </article>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="w-full lg:w-1/4">
          {/* 
            Pass the necessary IDs to the MoreStories component.
            It will now handle its own data fetching.
          */}
          <MoreStories categoryId={story.category.category_id} currentStoryId={story.id} />
          
          <SidebarAd src="/mtn-ad.jpg" alt="Sidebar Ad 1" />
          <SidebarAd src="/story-detail-ad-side.PNG" alt="Sidebar Ad 2" />
        </aside>

      </div>
    </div>
  );
}