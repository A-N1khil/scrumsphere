import { Message } from "./Message";

type Status = "TODO" | "IN_PROGRESS" | "DONE";

export interface Task {
  id?: string;
  taskId: string;
  projectId?: string;
  title: string;
  description: string;
  status: Status;
  assignee: string;
  reporter: string;
  dueDate: string;
  createdDate: string;
  updatedDate: string;
  messages?: Message[];
}
