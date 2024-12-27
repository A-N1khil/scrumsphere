import { Message } from "./Message";

export interface Task {
  taskId: string;
  projectId?: string;
  title: string;
  description: string;
  status: string;
  assignee: string;
  reporter: string;
  dueDate: string;
  createdDate: string;
  updatedDate: string;
  messages?: Message[];
}
