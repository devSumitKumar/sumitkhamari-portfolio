

export interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}


interface Skill {
  name: string;
  proficiency: number;
}



interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
}
