import { SquareKanban } from "lucide-react";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { Constants } from "@/app/shared/Constants";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../models/users/User";
import { userService } from "@/app/services/users/UserService";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/UserSlice";

// Login Schema
export const loginSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  // Define the login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLoginSubmit(values: z.infer<typeof loginSchema>) {
    userService.login(values.userId, values.password).then((user: User) => {
      dispatch(setUser(user));
      navigate("/tasks");
    });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md font-medium">
            <SquareKanban className="size-6" />
          </div>
          <span className="sr-only">{Constants.APP_NAME}</span>
          <h1 className="text-xl font-bold">Welcome to {Constants.APP_NAME}</h1>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register">
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </Link>
          </div>
        </div>
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
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
