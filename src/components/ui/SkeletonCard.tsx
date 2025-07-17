// src/components/ui/SkeletonCard.tsx

const SkeletonCard = () => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
			{/* Image Placeholder */}
			<div className="w-full h-48 bg-gray-300"></div>
			<div className="p-4">
				{/* Category Placeholder */}
				<div className="h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
				{/* Title Placeholder */}
				<div className="h-6 w-full bg-gray-300 rounded mb-2"></div>
				<div className="h-6 w-3/4 bg-gray-300 rounded"></div>
				{/* Author Placeholder */}
				<div className="h-3 w-1/2 bg-gray-300 rounded mt-3"></div>
			</div>
		</div>
	);
};

export default SkeletonCard;
