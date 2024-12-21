"use client";

import { cn } from "@/app/lib/utils";
import { SquareKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { Constants } from "../shared/Constants";

export function MainNav() {
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
          Docs
        </Link>
        <Link
          to="/docs/components"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Components
        </Link>
        <Link
          to="/blocks"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Blocks
        </Link>
        <Link
          to="/charts"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Charts
        </Link>
        <Link
          to="/themes"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Themes
        </Link>
        <Link
          to="/colors"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Colors
        </Link>
      </nav>
    </div>
  );
}
