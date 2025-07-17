// src/components/features/story/StoryList.tsx
import { StoryApiResponse } from "@/types";
import StoryCard from "@/components/ui/StoryCard";

interface StoryListProps {
	title: string;
	stories: StoryApiResponse[];
}

const StoryList = ({ title, stories }: StoryListProps) => {
	const validStories = stories.filter(
		(apiResponse) => apiResponse && apiResponse.story
	);

	return (
		<section className="my-8">
			<h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-600 pl-4 text-gray-800">
				{title}
			</h2>
			{validStories && validStories.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 gap-6">
					{validStories.map((apiResponse) => (
						<StoryCard key={apiResponse.id} story={apiResponse.story!} />
					))}
				</div>
			) : (	
				<p className="text-gray-500">No stories available in this section.</p>
			)}
		</section>
	);
};

export default StoryList;
