// src/components/layout/HeaderContent.tsx
import { getCategories } from '@/lib/api';
import { Category } from '@/types';
import MainNavBar from './MainNavBar';
import AdBar from './AdBar';
import TopBar from './TopBar';

// This is an async server component to fetch the data
const HeaderContent = async () => {
  const categoriesRes = await getCategories();
  const categories: Category[] = categoriesRes?.data?.data || [];

  return (
    <>
      <TopBar />
      <AdBar />
      {/* Pass the fetched categories down to the MainNavBar */}
      <MainNavBar categories={categories} />
    </>
  );
};

export default HeaderContent;