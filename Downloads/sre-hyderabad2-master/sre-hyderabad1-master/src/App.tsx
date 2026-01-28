import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import { AppLoader } from "./components/ui/AppLoader";
import { PageTransition } from "./components/animations/PageTransition";
import { Chatbot } from "./components/ui/Chatbot";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { WelcomeModal } from "./components/ui/WelcomeModal";

// Lazy load pages for code splitting
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const Community = lazy(() => import("./pages/Community"));
const Careers = lazy(() => import("./pages/Careers"));
const Join = lazy(() => import("./pages/Join"));
const TryPro = lazy(() => import("./pages/TryPro"));
const Blogs = lazy(() => import("./pages/resources/Blogs"));
const CommunityStories = lazy(() => import("./pages/resources/CommunityStories"));
const EventHub = lazy(() => import("./pages/resources/EventHub"));
const CommunityLaunchGuide = lazy(() => import("./pages/resources/CommunityLaunchGuide"));
const Discussions = lazy(() => import("./pages/resources/Discussions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><About /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
            <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/join" element={<PageTransition><Join /></PageTransition>} />
            <Route path="/try-pro" element={<PageTransition><TryPro /></PageTransition>} />
            <Route path="/resources/blogs" element={<PageTransition><Blogs /></PageTransition>} />
            <Route path="/resources/community-stories" element={<PageTransition><CommunityStories /></PageTransition>} />
            <Route path="/resources/event-hub" element={<PageTransition><EventHub /></PageTransition>} />
            <Route path="/resources/community-launch-guide" element={<PageTransition><CommunityLaunchGuide /></PageTransition>} />
            <Route path="/resources/discussions" element={<PageTransition><Discussions /></PageTransition>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppLoader />
        <BrowserRouter>
          <WelcomeModal autoOpen={true} showFrequency="onFirstVisit" />
          <AnimatedRoutes />
          <Chatbot />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
