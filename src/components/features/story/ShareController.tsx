// src/components/features/story/ShareController.tsx
'use client';

import { useState } from 'react';
import ShareModal from './ShareModal';

const ShareController = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Get the current page URL to be shared
  const storyUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <button 
        onClick={() => setModalOpen(true)}
        className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Share
      </button>

      {isModalOpen && <ShareModal onClose={() => setModalOpen(false)} storyUrl={storyUrl} />}
    </>
  );
};

export default ShareController;