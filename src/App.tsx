import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import RequiredDocuments from "./pages/RequiredDocuments";
import FAQ from "./pages/FAQ";
import BorderGuide from "./pages/BorderGuide";
import CompulsoryInsurance from "./pages/services/CompulsoryInsurance";
import VoluntaryInsurance from "./pages/services/VoluntaryInsurance";
import TravelInsurance from "./pages/services/TravelInsurance";
import AddOns from "./pages/services/AddOns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/thaidrivesecure-Website/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Navigate to="/about" replace />} />
            <Route path="/documents" element={<RequiredDocuments />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/border-guide" element={<BorderGuide />} />
            <Route path="/services/compulsory" element={<CompulsoryInsurance />} />
            <Route path="/services/voluntary" element={<VoluntaryInsurance />} />
            <Route path="/services/travel" element={<TravelInsurance />} />
            <Route path="/services/addons" element={<AddOns />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
