// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '../features/search/SearchBar'; // We will create this next
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'Africa', href: '/category/africa' }, // Placeholder links
  { title: 'Politics', href: '/category/politics' },
  { title: 'Business', href: '/category/business' },
  { title: 'Sport', href: '/category/sport' },
  { title: 'Health', href: '/category/health' },
  { title: 'Tech', href: '/category/tech' },
  { title: 'Opinion', href: '/category/opinion' },
  { title: 'Videos', href: '/category/videos' },
  { title: 'Photos', href: '/category/photos' },
  { title: 'AGC Archive', href: '/archive' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Advert Rate', href: '/advertising' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo, Search, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/agc-logo-new.1bf709a6.png" alt="AGC Newsnet Logo" width={150} height={50} className="h-auto w-auto" />
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <SearchBar />
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-4">
            {/* Replace with actual icons */}
            
            <Link href="#" aria-label="Instagram" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" aria-label="Facebook" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" aria-label="X/Twitter" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
              <FaLinkedinIn size={20} />
            </Link>
         
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 border-t border-gray-700 pt-10">
          {footerLinks.map((link) => (
            <Link key={link.title} href={link.href} className="hover:underline">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} AGC Newsnet. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;