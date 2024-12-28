import { Task } from "@/app/models/tasks/Task";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Task>[] = [
  { header: "Task ID", accessorKey: "taskId" },
  { header: "Project ID", accessorKey: "projectId" },
  { header: "Title", accessorKey: "title" },
  { header: "Status", accessorKey: "status" },
  { header: "Assignee", accessorKey: "assignee" },
  { header: "Reporter", accessorKey: "reporter" },
];
