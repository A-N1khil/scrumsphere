import { Button } from "@/app/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { taskService } from "@/app/services/tasks/TaskService";
import { Combobox, ComboboxOption } from "../ui/combobox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useAppSelector } from "@/app/hooks/Hooks";
import { UserState } from "@/app/slices/UserSlice";
import { useEffect } from "react";

export function NewTaskForm() {
  // Login Schema
  const newTaskSchema = z.object({
    taskId: z.string(),
    projectId: z.string(),
    title: z.string({ required_error: "Title is required" }),
    description: z.string().optional(),
    status: z.enum(["TODO", "IN_PROGRESS", "DONE"], { required_error: "Status is required" }),
    assignee: z.string().optional(),
    reporter: z.string(),
  });

  // Define the login form
  const newTaskForm = useForm<z.infer<typeof newTaskSchema>>({
    resolver: zodResolver(newTaskSchema),
  });

  const handleLoginSubmit = (values: z.infer<typeof newTaskSchema>) => {
    console.log(values);
  };

  const projectOptions: ComboboxOption[] = [
    { value: "PROJ-101", label: "PROJ-101" },
    { value: "PROJ-102", label: "PROJ-102" },
    { value: "PROJ-103", label: "PROJ-103" },
  ];

  const selectProjectOption = (option: ComboboxOption) => {
    newTaskForm.setValue("projectId", option.value);
  };

  const user = useAppSelector((state: { user: UserState }) => state.user.user);
  useEffect(() => {
    taskService.getNextTaskId().then((taskId) => {
      newTaskForm.setValue("taskId", `TASK-${taskId}`);
    });
    newTaskForm.setValue("reporter", user?.name || "");
  }, []);

  return (
    <Form {...newTaskForm}>
      <form onSubmit={newTaskForm.handleSubmit(handleLoginSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center col-span-1">
              {/* Task ID */}
              <div className="grid gap-2 w-full">
                <div className="flex items-center">
                  <Label data-testid="taskId-label" htmlFor="userId">
                    Task ID
                  </Label>
                </div>
                <FormField
                  control={newTaskForm.control}
                  name="taskId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input id="taskId" disabled required {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </div>

            <div className="flex items-center col-span-1">
              {/* Project ID */}
              <div className="grid gap-2 w-full">
                <div className="flex items-center">
                  <Label htmlFor="projectId">Project ID</Label>
                </div>
                <FormField
                  control={newTaskForm.control}
                  name="projectId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Combobox options={projectOptions} handleOptionChange={selectProjectOption} />
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </div>

            <div className="flex items-center col-span-1">
              {/* Status */}
              <div className="grid gap-2 w-full">
                <div className="flex items-center">
                  <Label htmlFor="status">Task Status</Label>
                </div>
                <FormField
                  control={newTaskForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="TODO">Todo</SelectItem>
                          <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                          <SelectItem value="DONE">Done</SelectItem>
                        </SelectContent>
                      </Select>

                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </div>
          </div>

          {/* title */}
          <div className="grid gap-2 w-full">
            <div className="flex items-center">
              <Label htmlFor="title">Title</Label>
            </div>
            <FormField
              control={newTaskForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="title" {...field} />
                  </FormControl>
                  <small className="flex items-start text-sm text-muted-foreground">
                    <FormMessage className="mt-1" />
                  </small>
                </FormItem>
              )}
            ></FormField>
          </div>

          {/* Description */}
          <div className="grid gap-2 w-full">
            <div className="flex items-center">
              <Label htmlFor="description">Task Description</Label>
            </div>
            <FormField
              control={newTaskForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="description" {...field} />
                  </FormControl>
                  <small className="flex items-start text-sm text-muted-foreground">
                    <FormMessage className="mt-1" />
                  </small>
                </FormItem>
              )}
            ></FormField>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center col-span-1">
              <div className="grid gap-2 w-full">
                <div className="flex items-center">
                  <Label data-testid="taskId-label" htmlFor="assignee">
                    Assignee
                  </Label>
                </div>
                <FormField
                  control={newTaskForm.control}
                  name="assignee"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input id="assignee" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </div>

            <div className="flex items-center col-span-1">
              <div className="grid gap-2 w-full">
                <div className="flex items-center">
                  <Label data-testid="reporter-label" htmlFor="reporter">
                    Reporter
                  </Label>
                </div>
                <FormField
                  control={newTaskForm.control}
                  name="reporter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input id="reporter" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Create Task
          </Button>
        </div>
      </form>
    </Form>
  );
}
