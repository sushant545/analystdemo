import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';

// Landing Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import SQLGym from './components/SQLGym';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

// App Components
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import SqlGymList from './pages/SqlGymList';
import SqlWorkspace from './pages/SqlWorkspace';
import ProjectCatalog from './pages/ProjectCatalog';
import ProjectWorkspace from './pages/ProjectWorkspace';

// Auth Components
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';

const LandingPage = () => (
  <div className="min-h-screen bg-brand-navy text-brand-light selection:bg-brand-teal selection:text-brand-navy">
    <Navbar />
    <main>
      <Hero />
      <Ecosystem />
      <SQLGym />
      <Roadmap />
    </main>
    <Footer />
  </div>
);

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Application Routes (Protected) */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sql-gym" element={<SqlGymList />} />
            <Route path="sql-gym/:id" element={<SqlWorkspace />} />
            <Route path="projects" element={<ProjectCatalog />} />
            <Route path="projects/:id/work" element={<ProjectWorkspace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
