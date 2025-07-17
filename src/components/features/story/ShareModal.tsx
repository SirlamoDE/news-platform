// src/components/features/story/ShareModal.tsx
'use client';

import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaPinterest, FaFacebookMessenger } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMailOutline, IoCopyOutline } from "react-icons/io5";
import { useState } from 'react';
import { ShareModalProps } from '@/types/storyDetailsType';



const ShareModal = ({ onClose, storyUrl }: ShareModalProps) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(storyUrl);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  const socialLinks = [
    { Icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500' },
    { Icon: FaXTwitter, name: 'X', color: 'bg-black' },
    { Icon: FaFacebookF, name: 'Facebook', color: 'bg-blue-600' },
    { Icon: FaLinkedinIn, name: 'LinkedIn', color: 'bg-blue-700' },
    { Icon: FaPinterest, name: 'Pinterest', color: 'bg-red-600' },
    { Icon: IoMailOutline, name: 'Email', color: 'bg-gray-500' },
    { Icon: FaFacebookMessenger, name: 'Messenger', color: 'bg-blue-500' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal if overlay is clicked
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share this news article</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">×</button>
        </div>
        <p className="text-gray-600 mb-6">You can also share directly with your contact by copying the link.</p>
        
        <div className="grid grid-cols-4 gap-4 text-center text-white">
          {socialLinks.map(({ Icon, name, color }) => (
            <a key={name} href="#" className={`flex flex-col items-center justify-center p-3 rounded-lg ${color}`}>
              <Icon size={28} />
            </a>
          ))}
          <button onClick={handleCopy} className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 text-gray-700 border">
            <IoCopyOutline size={28} />
            <span className="text-xs mt-1">{copySuccess || 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;