import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndividualTraining from "./pages/IndividualTraining";
import GroupTraining from "./pages/GroupTraining";
import PerformanceTraining from "./pages/PerformanceTraining";
import OnlineMeetings from "./pages/OnlineMeetings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/individual-training" element={<IndividualTraining />} />
          <Route path="/group-training" element={<GroupTraining />} />
          <Route path="/performance-training" element={<PerformanceTraining />} />
          <Route path="/online-meetings" element={<OnlineMeetings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
