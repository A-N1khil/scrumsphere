import { Task } from "@/app/models/tasks/Task";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CalendarArrowUp, CalendarPlus, CircleUser, UserPen } from "lucide-react";
import { Separator } from "../ui/separator";
import MarkdownEditor from "../MarkdownEditor";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";

interface TaskViewProps {
  task: Task;
}

const TaskView = ({ task }: TaskViewProps) => {
  const [message, setMessage] = useState("");

  const getNewMessage = (content: string | undefined) => {
    console.log(content);
  };

  return (
    <>
      <Card>
        <CardHeader className="text-left">
          <div className="grid grid-cols-5">
            <div className="col-span-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>{task.projectId}</BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>{task.taskId}</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="mt-2 p-4 flex flex-col items-start justify-between">
                <h1 data-testid="user-welcome-text" className="text-2xl font-bold">
                  {task.title}
                </h1>
                <p>{task.description}</p>
              </div>
            </div>
            <div className="col-span-1">
              <Button size="default" type="button" variant="default" className="float-left mr-3">
                Edit Task
              </Button>
              <Button size="default" type="button" variant="destructive" className="float-left mr-3">
                Delete Task
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end"></div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 text-left items-start">
              <MarkdownEditor markdown={task.description} postMessage={getNewMessage} />
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-start">
                <div className="grid grid-cols-2 flex flex-row">
                  <div className="col-span-1">Assigned to:</div>
                  <div className="col-span-1 ml-2 flex flex-row justify-center items-center">
                    <CircleUser size={18} className="mr-1" /> {task.assignee}
                  </div>
                </div>
                <div className="grid grid-cols-2 flex flex-row">
                  <div className="col-span-1">Reporter:</div>
                  <div className="col-span-1 ml-2 flex flex-row justify-center items-center">
                    <UserPen size={18} className="mr-1" /> {task.reporter}
                  </div>
                </div>
                <Separator className="mt-2 border-foreground border-1" />
              </div>
              <div className="flex flex-col items-start">
                <div className="mt-3 grid grid-cols-2 flex flex-row justify-start items-start">
                  <div className="col-span-1">Due</div>
                  <div className="col-span-1 ml-2 flex flex-row justify-center items-center">
                    <CalendarPlus size={18} className="mr-1" /> {task.dueDate}
                  </div>
                </div>
                <div className="grid grid-cols-2 flex flex-row justify-start">
                  <div className="col-span-1">Last updated:</div>
                  <div className="col-span-1 ml-2 flex flex-row justify-start items-center">
                    <CalendarArrowUp size={18} className="mr-1" /> {task.updatedDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-end justify-end"></CardFooter>
      </Card>
    </>
  );
};

export default TaskView;
