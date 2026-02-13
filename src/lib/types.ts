export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  initials: string;
};

export type Organization = {
  id: string;
  name:string;
  ownerId: string;
  memberIds: string[];
};

export type TaskStatus = 'New' | 'On Time' | 'Delayed' | 'Completed';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  deadline: string;
  assigneeId: string;
  assignerId: string;
  organizationId: string;
  attachments: { type: 'image' | 'audio' | 'document'; url: string }[];
};

export type Group = {
  id: string;
  name: string;
  organizationId: string;
  memberIds: string[];
};
