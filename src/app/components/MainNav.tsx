import { cn } from "@/app/lib/utils";
import { SquareKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { Constants } from "../shared/Constants";
import { useAppSelector } from "../hooks/Hooks";

export function MainNav() {
  const { user } = useAppSelector((state) => state.user);
  const role = user?.role || "developer";

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <SquareKanban className="size-6" />
        <span className="hidden font-bold lg:inline-block">
          {Constants.APP_NAME}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          to="/docs"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Tasks
        </Link>
        <Link
          to="/docs/components"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Kanban
        </Link>
        <Link
          to="/blocks"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Stats
        </Link>
        <Link
          hidden={role !== "admin" && role !== "projectManager"}
          to="/charts"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Developers
        </Link>
        <Link
          hidden={role !== "admin"}
          to="/themes"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Team
        </Link>
      </nav>
    </div>
  );
}
