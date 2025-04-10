
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import MentorProfile from "./pages/MentorProfile";
import Forum from "./pages/Forum";
import AuthForm from "./components/AuthForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<div className="min-h-screen bg-secondary/30 py-12"><AuthForm type="login" /></div>} />
          <Route path="/signup" element={<div className="min-h-screen bg-secondary/30 py-12"><AuthForm type="signup" /></div>} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/mentors/:id" element={<MentorProfile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
