// src/components/layout/TopBar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const TopBar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Format the date string like "Sunday, March 3, 2024"
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    // On small screens, this bar will be hidden for a cleaner look
    <div className="hidden md:block bg-pink-600 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        {/* Left side links */}
        <div className="flex space-x-4">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/archive" className="hover:underline">AGC Archive</Link>
          <Link href="/advertising" className="hover:underline">Advert Rate</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>

        {/* Right side date and socials */}
        <div className="flex items-center space-x-4">
          <span>{currentDate}</span>
          <span className="border-l border-white h-4"></span>
          <div className="flex space-x-2">
            <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
            <Link href="#" aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="#" aria-label="X/Twitter"><FaXTwitter /></Link>
            <Link href="#" aria-label="LinkedIn"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;