import { TableEntity } from "../shared/TableEntity";

export type ProjectStatus = "ICE_BOX" | "ONGOING" | "PLANNED" | "DONE";

export interface Project extends TableEntity {
  projectId: string;
  epicId: string;
  projectName: string;
  projectDescription: string;
  status: ProjectStatus;
}
