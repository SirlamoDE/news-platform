// src/components/layout/AdBar.tsx
import Image from 'next/image';

const AdBar = () => {
  return (
    // This bar will also be hidden on small mobile screens
    <div className="hidden md:block bg-black py-4">
      <div className="container mx-auto px-4 flex justify-center items-center gap-4">
        {/* Placeholder Ads */}
        <div className="w-1/2">
          <Image src="/ever-right-pic.PNG" alt="Advertisement 1" width={600} height={100} className="w-full" />
        </div>
        <div className="w-1/2">
          <Image src="/ic-market-left.PNG" alt="Advertisement 2" width={600} height={100} className="w-full h-auto" priority />
        </div>
      </div>
    </div>
  );
};

export default AdBar;
