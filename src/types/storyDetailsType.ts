import { ReactNode } from 'react';

export interface SidebarAdProps {
    src: string;
    alt: string;
}

export interface StoryDetailPageProps {
  params: Promise<{
    storyId: string;
  }>;
} 

export interface ProvidersProps {
  children: ReactNode;
}


export interface ShareModalProps {
  onClose: () => void; // Function to close the modal
  storyUrl: string;
}

export interface SplitArticleContentProps {
  htmlContent: string;
}


