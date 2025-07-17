// src/store/StoreProvider.tsx
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

export default function StoreProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const storeRef = useRef<AppStore | null>(null);
	storeRef.current ??= makeStore();// Initialize the store only once using nullish coalescing
	return <Provider store={storeRef.current}>{children}</Provider>;
}
