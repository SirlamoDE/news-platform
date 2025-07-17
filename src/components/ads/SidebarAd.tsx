// src/components/ads/SidebarAd.tsx
import Image from 'next/image';
import { SidebarAdProps } from '@/types/storyDetailsType';



const SidebarAd = ({ src, alt }: SidebarAdProps) => {
  return (
    <div className="mt-6">
      <Image 
        src={src} 
        alt={alt}
        width={300}
        height={250}
        className="w-full h-auto rounded-md"
      />
    </div>
  );
};

export default SidebarAd;