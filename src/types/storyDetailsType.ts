export interface SidebarAdProps {
    src: string;
    alt: string;
}

export interface StoryDetailPageProps {
  params: Promise<{
    storyId: string;
  }>;
} 