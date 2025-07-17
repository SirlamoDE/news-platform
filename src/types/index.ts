
// src/types/index.ts

// Represents the nested category object inside a story
export interface StoryCategoryInfo {
  category_id: number;
  category_name: string;
}

// Represents the detailed story object nested inside the API response
export interface StoryDetails {
  id: number;
  title: string;
  author: string;
  banner_image: string;
  content: string;
  category: StoryCategoryInfo;
  created_at: string; // Added to match API response
}

// Represents the structure of each item from the story list APIs (e.g., top-stories)
export interface StoryApiResponse {
  id: number;
  story: StoryDetails | null; // It can be null!
}

// Represents the structure of each item from the /categories API
export interface Category {
  category_id: number;
  category_name: string;
}