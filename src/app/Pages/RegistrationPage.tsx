import { KanbanSquare } from "lucide-react";
import { RegistrationForm } from "../components/RegistrationForm";
import RegistrationImage from "../../assets/kier-in-sight-archives-p7iaoHjWDbI-unsplash.jpg";

export default function RegistrationPage() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <KanbanSquare className="size-4" />
            </div>
            Scrumsphere
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegistrationForm />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        {/* <AspectRatio> */}
        <img
          src={RegistrationImage}
          alt="Image"
          className="rounded-md object-cover w-full h-full"
        />
        {/* </AspectRatio> */}
      </div>
    </div>
  );
}
