import { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { PageLayout } from "@/components/layout/PageLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import Home from "@/pages/Home";
const ManagedHosting = lazy(() => import("@/pages/ManagedHosting"));
const WebsiteSupport = lazy(() => import("@/pages/WebsiteSupport"));
const NewWebsite = lazy(() => import("@/pages/NewWebsite"));
const ExistingWebsite = lazy(() => import("@/pages/ExistingWebsite"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));

const FullyManagedHosting = lazy(() => import("@/pages/FullyManagedHosting"));
const ManagedHostingCostUK = lazy(() => import("@/pages/ManagedHostingCostUK"));
const WordPressMaintenanceCostUK = lazy(() => import("@/pages/WordPressMaintenanceCostUK"));
const WordPressCarePlan = lazy(() => import("@/pages/WordPressCarePlan"));
const WordPressMigration = lazy(() => import("@/pages/WordPressMigration"));
const CommonWordPressErrors = lazy(() => import("@/pages/CommonWordPressErrors"));
const MgdHostingVsShared = lazy(() => import("@/pages/MgdHostingVsShared"));
const WhatsIncludedMgdHosting = lazy(() => import("@/pages/WhatsIncludedMgdHosting"));
const WhatIsMgdHosting = lazy(() => import("@/pages/WhatIsMgdHosting"));
const MgdHostingSmallBiz = lazy(() => import("@/pages/MgdHostingSmallBiz"));

const WordPressHostingOswestry = lazy(() => import("@/pages/WordPressHostingOswestry"));
const WordPressHostingStMartins = lazy(() => import("@/pages/WordPressHostingStMartins"));
const WordPressHostingChirk = lazy(() => import("@/pages/WordPressHostingChirk"));
const WordPressHostingGobowen = lazy(() => import("@/pages/WordPressHostingGobowen"));
const WordPressHostingShrewsbury = lazy(() => import("@/pages/WordPressHostingShrewsbury"));
const WordPressHostingWrexham = lazy(() => import("@/pages/WordPressHostingWrexham"));
const WordPressHostingRuabon = lazy(() => import("@/pages/WordPressHostingRuabon"));
const WordPressHostingEllesmere = lazy(() => import("@/pages/WordPressHostingEllesmere"));
const WordPressHostingLlangollen = lazy(() => import("@/pages/WordPressHostingLlangollen"));
const WordPressHostingWhitchurch = lazy(() => import("@/pages/WordPressHostingWhitchurch"));
const WordPressHostingWelshpool = lazy(() => import("@/pages/WordPressHostingWelshpool"));

const WordPressHelpHub = lazy(() => import("@/pages/WordPressHelpHub"));
const WordPressHelpSlow = lazy(() => import("@/pages/WordPressHelpSlow"));
const WordPressHelpMaintenance = lazy(() => import("@/pages/WordPressHelpMaintenance"));
const WordPressHelpHacked = lazy(() => import("@/pages/WordPressHelpHacked"));
const WordPressHelpSecurity = lazy(() => import("@/pages/WordPressHelpSecurity"));
const WordPressHelpUpdateIssues = lazy(() => import("@/pages/WordPressHelpUpdateIssues"));

const WebsitesForConsultants = lazy(() => import("@/pages/WebsitesForConsultants"));
const WebsitesForMarketingConsultants = lazy(() => import("@/pages/WebsitesForMarketingConsultants"));
const WebsitesForLegalConsultants = lazy(() => import("@/pages/WebsitesForLegalConsultants"));
const WebsitesForBusinessConsultants = lazy(() => import("@/pages/WebsitesForBusinessConsultants"));

const WebsitesForBuilders = lazy(() => import("@/pages/WebsitesForBuilders"));
const WebsitesForElectricians = lazy(() => import("@/pages/WebsitesForElectricians"));
const WebsitesForPlumbers = lazy(() => import("@/pages/WebsitesForPlumbers"));
const WebsitesForDecorators = lazy(() => import("@/pages/WebsitesForDecorators"));
const WebsitesForJoiners = lazy(() => import("@/pages/WebsitesForJoiners"));
const WebsitesForScaffolders = lazy(() => import("@/pages/WebsitesForScaffolders"));
const WebsitesForRoofers = lazy(() => import("@/pages/WebsitesForRoofers"));
const WebsitesForAirConditioningFitters = lazy(() => import("@/pages/WebsitesForAirConditioningFitters"));
const WebsitesForSolarPanelFitters = lazy(() => import("@/pages/WebsitesForSolarPanelFitters"));
const WebsitesForPressureWashers = lazy(() => import("@/pages/WebsitesForPressureWashers"));
const WebsitesForHairdressers = lazy(() => import("@/pages/WebsitesForHairdressers"));
const WebsitesForLawyers = lazy(() => import("@/pages/WebsitesForLawyers"));
const WebsitesForFinanceAdvisors = lazy(() => import("@/pages/WebsitesForFinanceAdvisors"));
const WebsitesForEstateAgents = lazy(() => import("@/pages/WebsitesForEstateAgents"));
const WebsitesForRestaurants = lazy(() => import("@/pages/WebsitesForRestaurants"));
const WebsitesForTakeaways = lazy(() => import("@/pages/WebsitesForTakeaways"));
const WebsitesForDevelopers = lazy(() => import("@/pages/WebsitesForDevelopers"));
const WebsitesForGardeners = lazy(() => import("@/pages/WebsitesForGardeners"));
const WebsitesForLandscapers = lazy(() => import("@/pages/WebsitesForLandscapers"));
const WebsitesForRetailShops = lazy(() => import("@/pages/WebsitesForRetailShops"));
const WebsitesForCharities = lazy(() => import("@/pages/WebsitesForCharities"));
const WebsitesForSchools = lazy(() => import("@/pages/WebsitesForSchools"));
const WebsitesForTutors = lazy(() => import("@/pages/WebsitesForTutors"));
const WebsitesForSMEs = lazy(() => import("@/pages/WebsitesForSMEs"));
const WebsitesForMediumBusinesses = lazy(() => import("@/pages/WebsitesForMediumBusinesses"));
const WebsitesForButchers = lazy(() => import("@/pages/WebsitesForButchers"));
const WebsitesForFacialAesthetics = lazy(() => import("@/pages/WebsitesForFacialAesthetics"));
const WebsitesForTanningStudios = lazy(() => import("@/pages/WebsitesForTanningStudios"));
const WebsitesForNailStudios = lazy(() => import("@/pages/WebsitesForNailStudios"));
const WebsitesForTattooStudios = lazy(() => import("@/pages/WebsitesForTattooStudios"));
const WebsitesForLocalGroups = lazy(() => import("@/pages/WebsitesForLocalGroups"));
const WebsitesForCleaners = lazy(() => import("@/pages/WebsitesForCleaners"));
const WebsitesForNursingHomes = lazy(() => import("@/pages/WebsitesForNursingHomes"));
const WebsitesForCoffeeShops = lazy(() => import("@/pages/WebsitesForCoffeeShops"));
const WebsitesForCafes = lazy(() => import("@/pages/WebsitesForCafes"));
const WebsitesForJewellers = lazy(() => import("@/pages/WebsitesForJewellers"));
const WebsitesForManufacturers = lazy(() => import("@/pages/WebsitesForManufacturers"));

const WebDesignShropshire = lazy(() => import("@/pages/WebDesignShropshire"));
const WordPressHostingShropshire = lazy(() => import("@/pages/WordPressHostingShropshire"));
const SmallBusinessWebsites = lazy(() => import("@/pages/SmallBusinessWebsites"));
const WordPressMaintenance = lazy(() => import("@/pages/WordPressMaintenance"));
const WebsiteSpeedOptimisation = lazy(() => import("@/pages/WebsiteSpeedOptimisation"));
const WordPressSecurity = lazy(() => import("@/pages/WordPressSecurity"));
const WordPressBackupRecovery = lazy(() => import("@/pages/WordPressBackupRecovery"));

const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const SitemapPage = lazy(() => import("@/pages/SitemapPage"));
const InstantSiteQuote = lazy(() => import("@/pages/InstantSiteQuote"));
const Work = lazy(() => import("@/pages/Work"));
const DowntimeCalculator = lazy(() => import("@/pages/DowntimeCalculator"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function RouterFallback() {
  return (
    <div className="min-h-[60vh] py-20 px-4">
      <div className="container mx-auto max-w-5xl space-y-6 animate-pulse">
        <div className="h-4 bg-muted rounded w-48" />
        <div className="h-10 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-1/2" />
        <div className="h-4 bg-muted rounded w-2/3" />
        <div className="space-y-3 pt-12">
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-5/6" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-4/5" />
        </div>
      </div>
    </div>
  );
}

function Router() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouterFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/managed-wordpress-hosting" component={ManagedHosting} />
          <Route path="/website-support" component={WebsiteSupport} />
          <Route path="/new-website" component={NewWebsite} />
          <Route path="/existing-website" component={ExistingWebsite} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/fully-managed-wordpress-hosting" component={FullyManagedHosting} />
          <Route path="/managed-wordpress-hosting-cost-uk-2026" component={ManagedHostingCostUK} />
          <Route path="/wordpress-maintenance-cost-uk" component={WordPressMaintenanceCostUK} />
          <Route path="/wordpress-care-plan" component={WordPressCarePlan} />
          <Route path="/wordpress-migration-to-managed-hosting" component={WordPressMigration} />
          <Route path="/common-wordpress-errors" component={CommonWordPressErrors} />
          <Route path="/managed-wordpress-hosting-vs-shared-hosting" component={MgdHostingVsShared} />
          <Route path="/whats-included-managed-wordpress-hosting" component={WhatsIncludedMgdHosting} />
          <Route path="/what-is-managed-wordpress-hosting" component={WhatIsMgdHosting} />
          <Route path="/managed-hosting-small-businesses" component={MgdHostingSmallBiz} />
          <Route path="/wordpress-hosting-shropshire" component={WordPressHostingShropshire} />
          <Route path="/wordpress-hosting-oswestry" component={WordPressHostingOswestry} />
          <Route path="/wordpress-hosting-st-martins" component={WordPressHostingStMartins} />
          <Route path="/wordpress-hosting-chirk" component={WordPressHostingChirk} />
          <Route path="/wordpress-hosting-gobowen" component={WordPressHostingGobowen} />
          <Route path="/wordpress-hosting-shrewsbury" component={WordPressHostingShrewsbury} />
          <Route path="/wordpress-hosting-wrexham" component={WordPressHostingWrexham} />
          <Route path="/wordpress-hosting-ruabon" component={WordPressHostingRuabon} />
          <Route path="/wordpress-hosting-ellesmere" component={WordPressHostingEllesmere} />
          <Route path="/wordpress-hosting-llangollen" component={WordPressHostingLlangollen} />
          <Route path="/wordpress-hosting-whitchurch" component={WordPressHostingWhitchurch} />
          <Route path="/wordpress-hosting-welshpool" component={WordPressHostingWelshpool} />
          <Route path="/wordpress-security" component={WordPressSecurity} />
          <Route path="/wordpress-backup-recovery" component={WordPressBackupRecovery} />
          <Route path="/wordpress-help" component={WordPressHelpHub} />
          <Route path="/wordpress-help/wordpress-slow" component={WordPressHelpSlow} />
          <Route path="/wordpress-help/wordpress-maintenance" component={WordPressHelpMaintenance} />
          <Route path="/wordpress-help/wordpress-hacked" component={WordPressHelpHacked} />
          <Route path="/wordpress-help/wordpress-security" component={WordPressHelpSecurity} />
          <Route path="/wordpress-help/wordpress-update-issues" component={WordPressHelpUpdateIssues} />
          <Route path="/websites-for-consultants" component={WebsitesForConsultants} />
          <Route path="/websites-for-marketing-consultants" component={WebsitesForMarketingConsultants} />
          <Route path="/websites-for-legal-consultants" component={WebsitesForLegalConsultants} />
          <Route path="/websites-for-business-consultants" component={WebsitesForBusinessConsultants} />
          <Route path="/websites-for-builders" component={WebsitesForBuilders} />
          <Route path="/websites-for-electricians" component={WebsitesForElectricians} />
          <Route path="/websites-for-plumbers" component={WebsitesForPlumbers} />
          <Route path="/websites-for-decorators" component={WebsitesForDecorators} />
          <Route path="/websites-for-joiners" component={WebsitesForJoiners} />
          <Route path="/websites-for-scaffolders" component={WebsitesForScaffolders} />
          <Route path="/websites-for-roofers" component={WebsitesForRoofers} />
          <Route path="/websites-for-air-conditioning-fitters" component={WebsitesForAirConditioningFitters} />
          <Route path="/websites-for-solar-panel-fitters" component={WebsitesForSolarPanelFitters} />
          <Route path="/websites-for-pressure-washers" component={WebsitesForPressureWashers} />
          <Route path="/websites-for-hairdressers" component={WebsitesForHairdressers} />
          <Route path="/websites-for-lawyers" component={WebsitesForLawyers} />
          <Route path="/websites-for-finance-advisors" component={WebsitesForFinanceAdvisors} />
          <Route path="/websites-for-estate-agents" component={WebsitesForEstateAgents} />
          <Route path="/websites-for-restaurants" component={WebsitesForRestaurants} />
          <Route path="/websites-for-takeaways" component={WebsitesForTakeaways} />
          <Route path="/websites-for-developers" component={WebsitesForDevelopers} />
          <Route path="/websites-for-gardeners" component={WebsitesForGardeners} />
          <Route path="/websites-for-landscapers" component={WebsitesForLandscapers} />
          <Route path="/websites-for-retail-shops" component={WebsitesForRetailShops} />
          <Route path="/websites-for-charities" component={WebsitesForCharities} />
          <Route path="/websites-for-schools" component={WebsitesForSchools} />
          <Route path="/websites-for-tutors" component={WebsitesForTutors} />
          <Route path="/websites-for-smes" component={WebsitesForSMEs} />
          <Route path="/websites-for-medium-businesses" component={WebsitesForMediumBusinesses} />
          <Route path="/websites-for-butchers" component={WebsitesForButchers} />
          <Route path="/websites-for-facial-aesthetics" component={WebsitesForFacialAesthetics} />
          <Route path="/websites-for-tanning-studios" component={WebsitesForTanningStudios} />
          <Route path="/websites-for-nail-studios" component={WebsitesForNailStudios} />
          <Route path="/websites-for-tattoo-studios" component={WebsitesForTattooStudios} />
          <Route path="/websites-for-local-groups" component={WebsitesForLocalGroups} />
          <Route path="/websites-for-cleaners" component={WebsitesForCleaners} />
          <Route path="/websites-for-nursing-homes" component={WebsitesForNursingHomes} />
          <Route path="/websites-for-coffee-shops" component={WebsitesForCoffeeShops} />
          <Route path="/websites-for-cafes" component={WebsitesForCafes} />
          <Route path="/websites-for-jewellers" component={WebsitesForJewellers} />
          <Route path="/websites-for-manufacturers" component={WebsitesForManufacturers} />
          <Route path="/web-design-shropshire" component={WebDesignShropshire} />
          <Route path="/small-business-websites" component={SmallBusinessWebsites} />
          <Route path="/wordpress-maintenance" component={WordPressMaintenance} />
          <Route path="/website-speed-optimisation" component={WebsiteSpeedOptimisation} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/thank-you" component={ThankYou} />
          <Route path="/sitemap" component={SitemapPage} />
          <Route path="/instant-site-quote" component={InstantSiteQuote} />
          <Route path="/downtime-hack-calculator" component={DowntimeCalculator} />
          <Route path="/work" component={Work} />
          {mounted && <Route component={NotFound} />}
        </Switch>
      </Suspense>
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
