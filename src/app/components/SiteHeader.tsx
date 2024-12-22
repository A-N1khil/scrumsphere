import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="sticky flex h-14 items-center -mt-8">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
