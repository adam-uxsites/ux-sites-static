import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { PageLayout } from "@/components/layout/PageLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import Home from "@/pages/Home";
import ManagedHosting from "@/pages/ManagedHosting";
import WebsiteSupport from "@/pages/WebsiteSupport";
import NewWebsite from "@/pages/NewWebsite";
import ExistingWebsite from "@/pages/ExistingWebsite";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/managed-wordpress-hosting" component={ManagedHosting} />
        <Route path="/website-support" component={WebsiteSupport} />
        <Route path="/new-website" component={NewWebsite} />
        <Route path="/existing-website" component={ExistingWebsite} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <PageLayout>
              <Router />
            </PageLayout>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
