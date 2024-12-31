import { Button } from "@/app/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const NewTaskForm = () => {
  // Login Schema
  const loginSchema = z.object({
    userId: z.string(),
    password: z.string(),
  });

  // Define the login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const handleLoginSubmit = (values: z.infer<typeof loginSchema>) => {};

  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label id="userId-label" htmlFor="userId">
                User ID
              </Label>
            </div>
            {/* Email */}
            <FormField
              control={loginForm.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="userId" placeholder="amazing_dev" required {...field} />
                  </FormControl>
                  <small className="flex items-start text-sm text-muted-foreground">
                    <FormMessage />
                  </small>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                Forgot your password?
              </a>
            </div>
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="password" type="password" required {...field} />
                  </FormControl>
                  <small className="flex items-start text-sm text-muted-foreground">
                    <FormMessage className="mt-1" />
                  </small>
                </FormItem>
              )}
            ></FormField>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewTaskForm;
