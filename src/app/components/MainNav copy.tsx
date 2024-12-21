import React from "react";
import { NavLink } from "react-router-dom"; // Make sure to import the utility function for Shadcn
import { cn } from "../lib/utils";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-background text-foreground">
      <div className="text-lg font-bold">MyApp</div>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "px-3 py-2 text-sm font-medium rounded-t-lg",
                isActive
                  ? "bg-foreground text-background border-b-2 border-primary" // Active link styling
                  : "text-muted-foreground hover:bg-foreground hover:text-background"
              )
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
