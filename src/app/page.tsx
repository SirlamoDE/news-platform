// src/app/page.tsx
// This file can now go back to being a Server Component!
// Remove 'use client';

import DefaultLandingPage from "@/components/layout/DefaultLandingPage";
import PageClientWrapper from "@/components/layout/PageClientWrapper";
import FilteredStoryView from "@/components/features/category/FilteredStoryView";

export default function HomePage() {
	return (
		// The wrapper is a client component that reads from Redux.
		// We pass the other two components as props to it.
		<PageClientWrapper
			defaultView={<DefaultLandingPage />}
			filteredView={<FilteredStoryView />}
		/>
	);
}
