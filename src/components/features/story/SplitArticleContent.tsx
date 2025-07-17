// src/components/features/story/SplitArticleContent.tsx
import parse, { DOMNode, Element, domToReact } from 'html-react-parser';
import InArticleAd from '@/components/ads/InArticleAd'; // We will create this next
import { SplitArticleContentProps } from '@/types/storyDetailsType';


const SplitArticleContent = ({ htmlContent }: SplitArticleContentProps) => {
  // Options for the parser to identify and split the content
  const options = {
    replace: (domNode: DOMNode) => {
      // Find all paragraph (<p>) tags
      if (domNode instanceof Element && domNode.tagName === 'p') {
        const children = domNode.children;
        // This is a simple check to see if we should insert the ad after this paragraph.
        // It looks for a specific string marker in the paragraph text.
        // In a real-world scenario, a more robust method would be needed.
        if (domNode.attribs['data-insert-ad-after'] === 'true') {
          return (
            <>
              <p>{domToReact(children as DOMNode[], options)}</p>
              <InArticleAd />
            </>
          );
        }
      }
    },
  };

  // Find all paragraph tags in the original content
  const paragraphs = htmlContent.match(/<p>.*?<\/p>/g) || [];
  let processedHtml = htmlContent;

  if (paragraphs.length > 1) {
    // Calculate the midpoint to insert the ad
    const midpoint = Math.floor(paragraphs.length / 2);
    const targetParagraph = paragraphs[midpoint];
    
    // Add a special attribute to the paragraph where we want to insert the ad
    const modifiedParagraph = targetParagraph.replace('<p>', '<p data-insert-ad-after="true">');
    processedHtml = htmlContent.replace(targetParagraph, modifiedParagraph);
  }

  return <>{parse(processedHtml, options)}</>;
};

export default SplitArticleContent;