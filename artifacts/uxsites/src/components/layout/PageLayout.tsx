import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { localBusinessSchema } from "@/lib/schemas";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema())}
        </script>
      </Helmet>
      <Nav />
      <Breadcrumbs />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
