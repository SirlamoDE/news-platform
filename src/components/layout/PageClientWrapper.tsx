// src/components/layout/PageClientWrapper.tsx
"use client"; // This is our client boundary

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {initializeBookmarks} from "@/store/slices/bookmarksSlice";
import { useEffect } from "react";

interface PageClientWrapperProps {
	defaultView: React.ReactNode;
	filteredView: React.ReactNode;
}

export default function PageClientWrapper({
	defaultView,
	filteredView,
}: Readonly<PageClientWrapperProps>) {
	const dispatch = useAppDispatch();
	// Read the selected category from the Redux store
	const selectedCategory = useAppSelector(
		(state) => state.category.selectedCategory
	);

	useEffect(()=>{
		dispatch(initializeBookmarks());
	},[dispatch])

	// Render the appropriate prop based on the state
	return <>{selectedCategory ? filteredView : defaultView}</>;
}
