// src/components/ads/InArticleAd.tsx
import Image from 'next/image';

const InArticleAd = () => {
  return (
    <div className="my-8 flex justify-center">
      <Image
        src="/inArticle-ad.PNG"
        alt="In-article advertisement"
        width={728}
        height={90}
      />
    </div>
  );
};

export default InArticleAd;