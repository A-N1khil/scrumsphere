import { Task } from "@/app/models/tasks/Task";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink } from "lucide-react";

const badgeMap = {
  TODO: { variant: "success" },
  IN_PROGRESS: { variant: "secondary" },
  DONE: { variant: "destructive" },
};

export type ColumnWithActionProps = {
  toggleModal: (task: Task) => void;
};

export const columnWithActions = ({ toggleModal }: ColumnWithActionProps): ColumnDef<Task>[] => [
  { header: "Task ID", accessorKey: "taskId" },
  { header: "Project ID", accessorKey: "projectId" },
  { header: "Title", accessorKey: "title" },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as "TODO" | "IN_PROGRESS" | "DONE";
      const variant = badgeMap[status].variant as "success" | "secondary" | "destructive";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  { header: "Assignee", accessorKey: "assignee" },
  { header: "Reporter", accessorKey: "reporter" },
  {
    header: "Open",
    cell: ({ row }) => (
      <ExternalLink data-testid={"modal-" + row.original.taskId} size={18} onClick={() => toggleModal(row.original)} />
    ),
  },
];
