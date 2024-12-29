import { Task } from "@/app/models/tasks/Task";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CalendarArrowUp, CalendarPlus, CircleUser, MessagesSquare, ThumbsUp, User2Icon, UserPen } from "lucide-react";
import { Separator } from "../ui/separator";
import MarkdownEditor from "../MarkdownEditor";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Message } from "@/app/models/tasks/Message";
import MarkdownMessage from "../MarkdownMessage";

interface TaskViewProps {
  task: Task | null;
}

const TaskView = ({ task }: TaskViewProps) => {
  const getNewMessage = (content: string | undefined) => {
    console.log(content);
  };

  return (
    <>
      <Card>
        <CardHeader className="text-left">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>{task?.projectId}</BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>{task?.taskId}</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="mt-2 p-4 flex flex-col items-start justify-between">
                <h1 data-testid="user-welcome-text" className="text-2xl font-bold">
                  {task?.title}
                </h1>
                <p>{task?.description}</p>
                <Separator className="mt-2 border-foreground border-1 max-w-lg" />
                <div className="mt-1 grid grid-cols-2">
                  <div className="flex flex-col items-start col-span-1">
                    <div className="flex flex-row justify-center items-center">
                      Assigned to:
                      <CircleUser size={18} className="mr-1 ml-2" /> {task?.assignee}
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      Reported by
                      <UserPen size={18} className="mr-1 ml-2" /> {task?.reporter}
                    </div>
                  </div>
                  <div className="flex flex-col items-start col-span-1">
                    <div className="grid grid-cols-2 flex flex-row justify-start items-start">
                      <div className="col-span-1">Due</div>
                      <div className="col-span-1 ml-2 flex flex-row justify-center items-center">
                        <CalendarPlus size={18} className="mr-1" /> {task?.dueDate}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 flex flex-row justify-start">
                      <div className="col-span-1">Last updated:</div>
                      <div className="col-span-1 ml-2 flex flex-row justify-start items-center">
                        <CalendarArrowUp size={18} className="mr-1" /> {task?.updatedDate}
                      </div>
                    </div>
                  </div>
                </div>
                <Separator className="mt-2 border-foreground border-1 max-w-lg" />
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
          <div className="text-left items-start">
            <MarkdownEditor markdown={task?.description || ""} postMessage={getNewMessage} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-start items-start">
          <h1 className="text-md flex flex-row">
            <MessagesSquare className="mr-2" />
            Discussion Thread
          </h1>
          <div className="grid grid-cols-5">
            <div className="col-span-4">
              {task?.messages?.map((message: Message) => (
                <Card className="mt-5 w-[500px]" key={message.id}>
                  <CardHeader>
                    <CardTitle className="flex flex-row justify-start items-center">
                      <User2Icon className="mr-1" />
                      {message.author} posted
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <CardDescription>
                      <MarkdownMessage message={message.content} />
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-row justify-end items-end">
                    <Button size="sm" type="button" variant="default" className="float-right mr-3">
                      <ThumbsUp /> {message.upVotes}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="col-span-1"></div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TaskView;
