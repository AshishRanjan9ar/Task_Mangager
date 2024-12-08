import { collection, addDoc, query, where, updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { NewTask, Task } from '../types/task';

export const createTask = async (task: NewTask, userId: string) => {
  return addDoc(collection(db, 'tasks'), {
    ...task,
    userId,
    createdAt: new Date().toISOString(),
  });
};

export const getTasksQuery = (userId: string) => {
  return query(collection(db, 'tasks'), where('userId', '==', userId));
};

export const updateTaskStatus = async (taskId: string, status: Task['status']) => {
  return updateDoc(doc(db, 'tasks', taskId), { status });
};