import { Project, ProjectStatus } from "@/app/models/projects/Projects";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";

const badgeMap = {
  DONE: { variant: "success" },
  ICE_BOX: { variant: "secondary" },
  ONGOING: { variant: "middle" },
  PLANNED: { variant: "destructive" },
};

export type ColumnWithActionProps = {
  toggleModal: (project: Project) => void;
};

export const projectTableColumns = ({ toggleModal }: ColumnWithActionProps): ColumnDef<Project>[] => [
  { header: "Project ID", accessorKey: "projectId" },
  { header: "Epic ID", accessorKey: "epicId" },
  { header: "Title", accessorKey: "projectName" },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ProjectStatus;
      const variant = badgeMap[status].variant as "success" | "secondary" | "destructive" | "middle";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    header: "Open",
    cell: ({ row }) => (
      <ExternalLink
        data-testid={"modal-" + row.original.projectId}
        size={18}
        onClick={() => toggleModal(row.original)}
      />
    ),
  },
];
