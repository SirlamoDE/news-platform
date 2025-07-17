// src/components/ui/StoryCard.tsx
import Link from "next/link";
import Image from "next/image";
import { StoryDetails } from "@/types";
import BookmarkButton from "../features/story/BookmarkButton";


interface StoryCardProps {
	story: StoryDetails;
}

const StoryCard = ({ story }: StoryCardProps) => {
	if (!story) return null;

	return (
		<div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden">
			<Link href={`/stories/${story.id}`} className="block group">
				<div className="relative">
					<Image
						src={story.banner_image}
						alt={story.title}
						width={400}
						height={225}
						className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
						priority
					/>
				</div>
				<div className="p-4 flex-grow">
					<p className="text-sm font-semibold text-blue-600 mb-1">
						{story.category.category_name}
					</p>
					<h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 leading-tight">
						{story.title}
					</h3>
					<p className="text-xs text-gray-500 mt-2">By {story.author}</p>
				</div>
			</Link>
			<div className="p-4 pt-0"><BookmarkButton storyId={story.id} /></div>
		</div>
	);
};

export default StoryCard;
