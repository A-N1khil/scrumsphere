import { SiteHeader } from "./SiteHeader";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="container-wrapper border-grid flex flex-1 flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
