import { JIssue } from './issue';
import { JUser } from './user';

export interface JProject {
  id: string;
  name: string;
  url: string;
  description: string;
  category: ProjectCategory;
  createdAt: string;
  updateAt: string;
  issues: JIssue[];
  users: JUser[];
}

type ProjectCategory = (typeof ProjectCategory)[keyof typeof ProjectCategory]

export const ProjectCategory = {
  SOFTWARE: 'Software',
  MARKETING: 'Marketing',
  BUSINESS: 'Business'
} as const;
