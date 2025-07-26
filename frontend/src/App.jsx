import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from "./src/components/auth/AuthContext";
import Sidebar from "./src/components/layout/Sidebar";
import HomePage from "./src/components/pages/Home";
import LoginForm from "./src/components/auth/LoginForm";
import RegisterForm from "./src/components/auth/RegisterForm";
import AddBrief from "./src/components/pages/AddBrief";
import DisplayBrief from "./src/components/pages/DisplayBrief";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [briefs, setBriefs] = useState([]);
  const addBrief = (brief) => setBriefs([...briefs, brief]);

  React.useEffect(() => {
    if (user && (window.location.pathname === '/login' || window.location.pathname === '/register')) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {/* Menu icon can be added here if needed */}
              <span className="sr-only">Open sidebar</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900 lg:hidden">
              Interface 404.js
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {new Date().toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-brief" element={<AddBrief addBrief={addBrief} />} />
                <Route path="/display-brief" element={<DisplayBrief briefs={briefs} addBrief={addBrief} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;