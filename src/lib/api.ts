// src/lib/api.ts

const BASE_URL = "https://api.agcnewsnet.com/api/general";

// A safe, generic fetch function
async function fetchFromApi(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE_URL}/${path}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    if (!res.ok) {
      console.error(`API Error on ${path}: ${res.status} ${res.statusText}`);
      return { data: [] };
    }
    return res.json();
  } catch (error) {
    console.error(`Network or fetch error for endpoint ${path}:`, error);
    return { data: [] };
  }
}


// Specific functions for each endpoint, using the correct paths
export const getCategories = () => fetchFromApi('categories');
export const getTopStories = () => fetchFromApi('top-stories');
export const getEditorsPicks = () => fetchFromApi('editor-picks', { page: '1', per_page: '15' });
export const getFeaturedStories = () => fetchFromApi('stories/featured-stories', { page: '1', per_page: '15' });



export const getStoriesByCategory = (categoryId: number) => fetchFromApi(`categories/${categoryId}/stories`, { page: '1', per_page: '15' });

// get story details by ID

export const getStoryById = (storyId: string) => fetchFromApi(`stories/${storyId}`);

// get related stories by category ID
export const getRelatedStoriesByCategoryId = (categoryId: number) => fetchFromApi(`categories/${categoryId}/stories`, { page: '1', per_page: '15' });

// get latest stories
export const getLatestStories = () => fetchFromApi('stories/latest-stories', { page: '1', per_page: '7' });