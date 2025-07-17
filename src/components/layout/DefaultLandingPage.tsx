// src/components/layout/DefaultLandingPage.tsx
import {
	getCategories,
	getTopStories,
	getFeaturedStories,
	getEditorsPicks,
} from "@/lib/api";
import { Category, StoryApiResponse } from "@/types";
import CategoriesNav from "../features/category/CategoriesNav";
import FilteredStoryListContainer from "../features/story/FilteredStoryListContainer";	

async function DefaultLandingPage() {
	console.log("Fetching data for DefaultLandingPage sequentially...");

	// --- THE FIX IS HERE ---
	// We now await each request one by one to avoid resource exhaustion.
	const categoriesRes = await getCategories();
	const topStoriesRes = await getTopStories();
	const featuredStoriesRes = await getFeaturedStories();
	const editorsPicksRes = await getEditorsPicks();

	// The rest of the component stays the same
	const categories: Category[] = categoriesRes?.data?.data || [];
	const topStories: StoryApiResponse[] = topStoriesRes?.data?.data || [];
	const featuredStories: StoryApiResponse[] =
		featuredStoriesRes?.data?.data || [];
	const editorsPicks: StoryApiResponse[] = editorsPicksRes?.data?.data || [];

	return (
		<div className="container mx-auto px-4">
			{categories.length > 0 && <CategoriesNav categories={categories} />}
			{topStories.length > 0 && (
				<FilteredStoryListContainer title="Top Stories" stories={topStories} />
			)}
			{featuredStories.length > 0 && (
				<FilteredStoryListContainer title="Featured" stories={featuredStories} />
			)}
			{editorsPicks.length > 0 && (
				<FilteredStoryListContainer title="Editor's Picks" stories={editorsPicks} />
			)}
		</div>
	);
}

export default DefaultLandingPage;
