import { columns } from "./tasks/Columns";
import TaskTable from "./tasks/TaskTable";
import { Task } from "../models/tasks/Task";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import TaskView from "./tasks/TaskView";
import { ScrollArea } from "./ui/scroll-area";
const data: Task[] = [
  {
    id: "676eeddaf5264633ed8421ba",
    taskId: "TASK-1",
    projectId: "PROJ-101",
    title: "Design database schema",
    description: "Create and finalize the schema for the project database.",
    status: "TODO",
    assignee: "Alice",
    reporter: "Bob",
    dueDate: "2024-01-15",
    createdDate: "2023-12-20",
    updatedDate: "2023-12-25",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421bb",
    taskId: "TASK-2",
    projectId: "PROJ-102",
    title: "Implement authentication module",
    description: "Develop the user login and registration functionalities.",
    status: "IN_PROGRESS",
    assignee: "Charlie",
    reporter: "Diana",
    dueDate: "2024-01-10",
    createdDate: "2023-12-18",
    updatedDate: "2023-12-26",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421bc",
    taskId: "TASK-3",
    projectId: "PROJ-101",
    title: "Create REST API for tasks",
    description: "Develop endpoints for task creation, update, and deletion.",
    status: "DONE",
    assignee: "Eve",
    reporter: "Alice",
    dueDate: "2023-12-15",
    createdDate: "2023-12-01",
    updatedDate: "2023-12-16",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421bd",
    taskId: "TASK-4",
    projectId: "PROJ-103",
    title: "Prepare project documentation",
    description: "Draft user guides and API documentation.",
    status: "TODO",
    assignee: "Bob",
    reporter: "Charlie",
    dueDate: "2024-02-01",
    createdDate: "2023-12-19",
    updatedDate: "2023-12-25",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421be",
    taskId: "TASK-5",
    projectId: "PROJ-102",
    title: "Unit testing for authentication",
    description: "Write unit tests for login and registration functionalities.",
    status: "IN_PROGRESS",
    assignee: "Diana",
    reporter: "Eve",
    dueDate: "2024-01-05",
    createdDate: "2023-12-15",
    updatedDate: "2023-12-26",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421bf",
    taskId: "TASK-6",
    projectId: "PROJ-104",
    title: "Optimize database queries",
    description: "Enhance performance by optimizing database query structures.",
    status: "DONE",
    assignee: "Alice",
    reporter: "Diana",
    dueDate: "2023-12-20",
    createdDate: "2023-12-01",
    updatedDate: "2023-12-20",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421c0",
    taskId: "TASK-7",
    projectId: "PROJ-101",
    title: "Setup CI/CD pipeline",
    description: "Configure continuous integration and delivery pipelines.",
    status: "TODO",
    assignee: "Charlie",
    reporter: "Eve",
    dueDate: "2024-01-25",
    createdDate: "2023-12-21",
    updatedDate: "2023-12-25",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421c1",
    taskId: "TASK-8",
    projectId: "PROJ-104",
    title: "UI/UX design review",
    description: "Review the user interface and user experience designs.",
    status: "IN_PROGRESS",
    assignee: "Eve",
    reporter: "Bob",
    dueDate: "2024-01-08",
    createdDate: "2023-12-17",
    updatedDate: "2023-12-26",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421c2",
    taskId: "TASK-9",
    projectId: "PROJ-103",
    title: "Backend API integration",
    description: "Integrate backend APIs with the frontend application.",
    status: "DONE",
    assignee: "Diana",
    reporter: "Charlie",
    dueDate: "2023-12-22",
    createdDate: "2023-12-05",
    updatedDate: "2023-12-22",
    messages: [],
  },
  {
    id: "676eeddaf5264633ed8421c3",
    taskId: "TASK-10",
    projectId: "PROJ-102",
    title: "Code review and refactoring",
    description: "Review existing codebase and perform necessary refactoring.",
    status: "TODO",
    assignee: "Bob",
    reporter: "Alice",
    dueDate: "2024-01-20",
    createdDate: "2023-12-22",
    updatedDate: "2023-12-25",
    messages: [],
  },
];

const TaskComponent = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<Task | null>(null);

  const handleDialogOpen = (task: Task): void => {
    console.log("Dialog opened for ", task.taskId);
    setTask(task);
    setOpen(!open);
  };

  return (
    <>
      <div className="container">
        <TaskTable columns={columns} data={data} toggleModal={handleDialogOpen} />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="min-w-[300px] max-w-[90vw]">
          <DialogDescription hidden />
          <DialogTitle>Task Details</DialogTitle>
          <ScrollArea className="max-h-[80vh]">
            <TaskView task={task} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskComponent;
