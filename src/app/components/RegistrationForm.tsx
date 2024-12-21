import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";

// Login Schema
const registrationSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
    gender: z.enum(["male", "female", "other"], {
      required_error: "You need to select one gender",
    }),
    role: z.enum(["stakeholder", "productManager", "developer"], {
      required_error: "You need to select a role",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegistrationForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  // Define the login form
  const registrationForm = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
  });

  function handleLoginSubmit(values: z.infer<typeof registrationSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-bold">Register</h1>
          <small className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Login
            </a>
          </small>
        </div>
        <Form {...registrationForm}>
          <form onSubmit={registrationForm.handleSubmit(handleLoginSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Name */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="email">Name</Label>
                </div>
                {/* Name */}
                <FormField
                  control={registrationForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="First and Last"
                          required
                          {...field}
                        />
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="email">Email</Label>
                </div>
                {/* Email */}
                <FormField
                  control={registrationForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <FormField
                  control={registrationForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>

              {/* Confirm password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                </div>
                <FormField
                  control={registrationForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="confirmPpassword"
                          type="password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
              </div>

              {/* Gender */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Gender</Label>
                </div>
                <FormField
                  control={registrationForm.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup className="flex space-x-4">
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="other" />
                            </FormControl>
                            <FormLabel className="font-normal">Other</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <small className="flex items-start text-sm text-muted-foreground">
                        <FormMessage className="mt-1" />
                      </small>
                    </FormItem>
                  )}
                ></FormField>
                {/* Role */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="role">Role</Label>
                  </div>
                  <FormField
                    control={registrationForm.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <Select>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="stakeholder">
                              Stakeholder
                            </SelectItem>
                            <SelectItem value="productManager">
                              Product Manager
                            </SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
