import { TableEntity } from "@/app/models/shared/TableEntity";
import { Message } from "@/app/models/tasks/Message";

type Status = "TODO" | "IN_PROGRESS" | "DONE";

export interface Task extends TableEntity {
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
