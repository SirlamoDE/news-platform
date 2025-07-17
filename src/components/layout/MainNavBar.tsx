// src/components/layout/MainNavBar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { Category } from '@/types'; // Use the category type we defined

interface MainNavBarProps {
  categories: Category[]; // It will receive categories as a prop
}

const MainNavBar = ({ categories }: MainNavBarProps) => {
  const pathname = usePathname();

  return (
    <div className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
             {/* You will need to add your logo to the /public folder */}
            <Image src="/agc-logo-new.1bf709a6.png" alt="AGC Newsnet Logo" width={150} height={50} className="h-auto w-auto" priority />
          </Link>
        </div>

        {/* Main Nav Links - Hidden on mobile, shown on md and up */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`hover:text-pink-500 ${pathname === '/' ? 'border-b-2 border-pink-500' : ''}`}>Home</Link>
          {categories.map((cat) => (
            <Link key={cat.category_id} href={`/category/${cat.category_id}`} className={`hover:text-pink-500 ${pathname === `/category/${cat.category_id}` ? 'border-b-2 border-pink-500' : ''}`}>
              {cat.category_name}
            </Link>
          ))}
        </nav>

        {/* Right side actions - Hidden on mobile, shown on md and up */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/photos" className="hover:text-pink-500">Photos</Link>
          <Link href="/videos" className="hover:text-pink-500">Videos</Link>
          <button aria-label="Search"><FaSearch /></button>
          <span className="border-l border-gray-600 h-4"></span>
          <Link href="/login" className="hover:text-pink-500">Log in / Sign up</Link>
        </div>
        
        {/* Mobile Menu Button - Add later if needed */}
        <div className="md:hidden">
            <button>Menu</button>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;

