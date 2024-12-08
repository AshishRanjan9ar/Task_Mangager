export interface Task {
  id: string;
  name: string;
  stakeholder: string;
  dueDate: string;
  status: 'Completed' | 'Incomplete' | 'Pending';
  userId: string;
  createdAt: string;
}

export type NewTask = Omit<Task, 'id' | 'userId' | 'createdAt'>;