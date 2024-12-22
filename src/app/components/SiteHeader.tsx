import CommandMenu from "./CommandMenu";
import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="sticky flex h-14 items-center -mt-8">
          <MainNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
