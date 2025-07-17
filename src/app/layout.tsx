// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/StoreProvider'; // Important: StoreProvider must be a 'use client' component
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AGC Newsnet',
  description: 'Your daily news platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 flex flex-col min-h-screen`}>
        {/* 
          The StoreProvider now wraps the entire application.
          This ensures that any Client Component anywhere in the tree 
          (like SearchBar in the Footer) can access the Redux store.
        */}
        <StoreProvider>
          <Header />
          <main className="flex-grow">
			{children}
			</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}