export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}