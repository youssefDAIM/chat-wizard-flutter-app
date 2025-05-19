
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user: string) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="h-screen bg-gradient-to-br from-chat-gradient-start to-chat-gradient-end">
            <Routes>
              <Route 
                path="/" 
                element={
                  isAuthenticated ? 
                  <Navigate to="/chat" /> : 
                  <AuthPage onLogin={handleLogin} />
                } 
              />
              <Route 
                path="/auth" 
                element={
                  isAuthenticated ? 
                  <Navigate to="/chat" /> : 
                  <AuthPage onLogin={handleLogin} />
                } 
              />
              <Route 
                path="/chat" 
                element={
                  isAuthenticated ? 
                  <ChatPage username={username} /> : 
                  <Navigate to="/auth" />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
