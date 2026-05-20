import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
