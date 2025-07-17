"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


export default function BookmarksPage() {
	const storyIds = useSelector(
		(state: RootState) => state.bookmarks.storyIds
	);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Bookmarked Stories</h1>
			{storyIds.length > 0 ? (
				<ul>
					{storyIds.map(id => (
						<li key={id}>Bookmarked Story ID: {id}</li>
					))}
				</ul>
			) : (
				<p>You have no bookmarked stories.</p>
			)}
		</div>
	);
}
