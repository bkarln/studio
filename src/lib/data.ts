import { User, Organization, Task, Group } from './types';
import { PlaceHolderImages } from './placeholder-images';

const avatar1 = PlaceHolderImages.find(p => p.id === 'avatar-1')?.imageUrl || '';
const avatar2 = PlaceHolderImages.find(p => p.id === 'avatar-2')?.imageUrl || '';
const avatar3 = PlaceHolderImages.find(p => p.id === 'avatar-3')?.imageUrl || '';
const avatar4 = PlaceHolderImages.find(p => p.id === 'avatar-4')?.imageUrl || '';

export const users: User[] = [
  { id: 'user-1', name: 'Alice Johnson', email: 'alice@example.com', avatarUrl: avatar1, initials: 'AJ' },
  { id: 'user-2', name: 'Bob Williams', email: 'bob@example.com', avatarUrl: avatar2, initials: 'BW' },
  { id: 'user-3', name: 'Charlie Brown', email: 'charlie@example.com', avatarUrl: avatar3, initials: 'CB' },
  { id: 'user-4', name: 'Diana Prince', email: 'diana@example.com', avatarUrl: avatar4, initials: 'DP' },
];

export const organizations: Organization[] = [
  { id: 'org-1', name: 'Innovate Inc.', ownerId: 'user-1', memberIds: ['user-1', 'user-2', 'user-3'] },
  { id: 'org-2', name: 'Synergy Corp', ownerId: 'user-4', memberIds: ['user-1', 'user-4'] },
];

export const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design new landing page',
    description: 'Create mockups and prototypes for the new v2 landing page.',
    status: 'On Time',
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    assigneeId: 'user-2',
    assignerId: 'user-1',
    organizationId: 'org-1',
    attachments: [],
  },
  {
    id: 'task-2',
    title: 'Develop API for user authentication',
    description: 'Implement JWT-based authentication for the main API.',
    status: 'New',
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    assigneeId: 'user-3',
    assignerId: 'user-1',
    organizationId: 'org-1',
    attachments: [],
  },
  {
    id: 'task-3',
    title: 'Fix bug in reporting module',
    description: 'The monthly report is not generating correct data for Q4.',
    status: 'Delayed',
    deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    assigneeId: 'user-2',
    assignerId: 'user-1',
    organizationId: 'org-1',
    attachments: [],
  },
  {
    id: 'task-4',
    title: 'Write Q2 marketing copy',
    description: 'Draft copy for the upcoming Q2 marketing campaigns.',
    status: 'Completed',
    deadline: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    assigneeId: 'user-4',
    assignerId: 'user-1',
    organizationId: 'org-2',
    attachments: [],
  },
  {
    id: 'task-5',
    title: 'Onboard new marketing intern',
    description: 'Prepare onboarding documents and schedule introduction meetings.',
    status: 'On Time',
    deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    assigneeId: 'user-1',
    assignerId: 'user-4',
    organizationId: 'org-2',
    attachments: [],
  },
];

export const groups: Group[] = [
    { id: 'group-1', name: 'Engineering', organizationId: 'org-1', memberIds: ['user-2', 'user-3'] },
    { id: 'group-2', name: 'Design', organizationId: 'org-1', memberIds: ['user-2'] },
    { id: 'group-3', name: 'Marketing', organizationId: 'org-2', memberIds: ['user-4'] },
];

export const loggedInUser: User = users[0];
