import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Project } from "@/app/models/projects/Projects";
import { useState } from "react";
import { projectTableColumns } from "./ProjectTableColumns";
import { ProjectTable } from "./ProjectTable";

const data: Project[] = [
  {
    id: "67760b4f457ce4cc88abf063",
    projectId: "PROJ-101",
    epicId: "EPIC-101",
    projectName: "Smart City Solutions",
    projectDescription: "Developing IoT-based solutions for smart city management.",
    status: "ONGOING",
  },
  {
    id: "67760b4f457ce4cc88abf064",
    projectId: "PROJ-102",
    epicId: "EPIC-101",
    projectName: "Urban Traffic Monitoring",
    projectDescription: "Creating AI models for monitoring and predicting urban traffic patterns.",
    status: "PLANNED",
  },
  {
    id: "67760b4f457ce4cc88abf065",
    projectId: "PROJ-103",
    epicId: "EPIC-102",
    projectName: "Healthcare Management System",
    projectDescription: "A system to manage patient records, appointments, and medical billing.",
    status: "ONGOING",
  },
  {
    id: "67760b4f457ce4cc88abf066",
    projectId: "PROJ-104",
    epicId: "EPIC-102",
    projectName: "Telemedicine Platform",
    projectDescription: "Building a platform to enable remote healthcare consultations.",
    status: "DONE",
  },
  {
    id: "67760b4f457ce4cc88abf067",
    projectId: "PROJ-105",
    epicId: "EPIC-103",
    projectName: "AI Chatbot Integration",
    projectDescription: "Integrating an AI-powered chatbot for customer support services.",
    status: "ONGOING",
  },
  {
    id: "67760b4f457ce4cc88abf068",
    projectId: "PROJ-106",
    epicId: "EPIC-103",
    projectName: "Voice Assistant for E-Commerce",
    projectDescription: "Developing a voice assistant to enhance user experience in online shopping.",
    status: "ICE_BOX",
  },
  {
    id: "67760b4f457ce4cc88abf069",
    projectId: "PROJ-107",
    epicId: "EPIC-104",
    projectName: "Blockchain for Supply Chain",
    projectDescription: "Implementing blockchain to enhance transparency in supply chain operations.",
    status: "ONGOING",
  },
  {
    id: "67760b4f457ce4cc88abf06a",
    projectId: "PROJ-108",
    epicId: "EPIC-104",
    projectName: "Smart Inventory Management",
    projectDescription: "Developing a system to optimize inventory using blockchain and AI.",
    status: "PLANNED",
  },
  {
    id: "67760b4f457ce4cc88abf06b",
    projectId: "PROJ-109",
    epicId: "EPIC-105",
    projectName: "Social Media Analytics Tool",
    projectDescription: "Building a tool to analyze and visualize social media trends and metrics.",
    status: "PLANNED",
  },
  {
    id: "67760b4f457ce4cc88abf06c",
    projectId: "PROJ-110",
    epicId: "EPIC-106",
    projectName: "Renewable Energy Dashboard",
    projectDescription: "A dashboard to monitor and manage renewable energy generation and usage.",
    status: "ICE_BOX",
  },
];

export const ProjectComponent = () => {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);

  const handleDialogOpen = (project: Project): void => {
    console.log("Dialog opened for ", project.projectId);
    setProject(project);
    setOpen(!open);
  };

  const columns = projectTableColumns({ toggleModal: handleDialogOpen });
  const [newProjectDialogOpen, setNewProjectDialogOpen] = useState(false);

  return (
    <>
      <div className="container">
        <Button size="default" type="button" variant="default" className="float-right mt-5">
          <Plus />
          Create Project
        </Button>
        <ProjectTable columns={columns} data={data} />
      </div>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="min-w-[300px] max-w-[90vw]">
          <DialogDescription hidden />
          <DialogTitle>Task Details</DialogTitle>
          <ScrollArea className="max-h-[80vh]">
            <TaskView task={task} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
      <Dialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen}>
        <DialogContent className="min-w-[300px] max-w-[60vw]">
          <NewTaskForm />
        </DialogContent>
      </Dialog> */}
    </>
  );
};
