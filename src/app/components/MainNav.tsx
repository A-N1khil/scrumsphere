import { cn } from "@/app/lib/utils";
import { SquareKanban } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Constants } from "../shared/Constants";
import { useAppSelector } from "../hooks/Hooks";

export function MainNav() {
  const { user } = useAppSelector((state) => state.user);
  const role = user?.role || "developer";
  const navLinks = [
    { name: "Home", path: "/landing" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <SquareKanban className="size-6" />
        <span className="hidden font-bold lg:inline-block">
          {Constants.APP_NAME}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground border-b-2 border-primary" // Active link styling
                    : "text-foreground/70 hover:border-b-2 hover:border-foreground hover:border-dashed"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
