// src/components/features/category/CategoriesNav.tsx
"use client";

import { Category } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedCategory } from "@/store/slices/categorySlice";

interface CategoriesNavProps {
	categories: Category[];
}

const CategoriesNav = ({ categories }: CategoriesNavProps) => {
	const dispatch = useAppDispatch();
	const activeCategoryId = useAppSelector(
		(state) => state.category.selectedCategory
	);

	const handleCategoryClick = (categoryId: number | null) => {
		dispatch(setSelectedCategory(categoryId));
	};

	const baseStyle =
		"px-4 py-2 text-sm font-medium rounded-full flex-shrink-0 transition-colors duration-200";
	const activeStyle = "bg-blue-600 text-white";
	const inactiveStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";

	return (
		<nav className="py-4 border-b">
			<div className="flex space-x-4 overflow-x-auto pb-2">
				<button
					onClick={() => handleCategoryClick(null)}
					className={`${baseStyle} ${
						!activeCategoryId ? activeStyle : inactiveStyle
					}`}>
					All
				</button>
				{categories.map((category) => (
					<button
						key={category.category_id}
						onClick={() => handleCategoryClick(category.category_id)}
						className={`${baseStyle} ${
							activeCategoryId === category.category_id
								? activeStyle
								: inactiveStyle
						}`}>
						{category.category_name}
					</button>
				))}
			</div>
		</nav>
	);
};

export default CategoriesNav;
