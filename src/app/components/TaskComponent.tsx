import TaskTable from "./tasks/TaskTable";
import { Task } from "../models/tasks/Task";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useEffect, useState } from "react";
import TaskView from "./tasks/TaskView";
import { ScrollArea } from "./ui/scroll-area";
import { columnWithActions } from "./tasks/TaskTableColumns";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { NewTaskForm } from "@/app/components/tasks/NewTaskForm";
import { taskService } from "../services/tasks/TaskService";
import { useAppSelector } from "../hooks/Hooks";
import { UserState } from "../slices/UserSlice";

const TaskComponent = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { user } = useAppSelector((state: { user: UserState }) => state.user);

  const handleDialogOpen = (task: Task): void => {
    setTask(task);
    setOpen(!open);
  };

  const columns = columnWithActions({ toggleModal: handleDialogOpen });
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);

  useEffect(() => {
    taskService.getAllTasksRelatedToUser(user.userId).then((tasks: Task[]) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Button
          size="default"
          type="button"
          variant="default"
          className="float-right mt-5"
          onClick={() => setNewTaskDialogOpen(true)}
        >
          <Plus />
          Create Task
        </Button>
        <TaskTable columns={columns} data={tasks} />
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
      <Dialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen}>
        <DialogContent className="min-w-[300px] max-w-[60vw]">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>Wow!! More work!!</DialogDescription>
          </DialogHeader>
          <NewTaskForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskComponent;
