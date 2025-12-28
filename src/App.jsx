import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Application Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sql-gym" element={<SqlGymList />} />
          <Route path="sql-gym/:id" element={<SqlWorkspace />} />
          <Route path="projects" element={<ProjectCatalog />} />
          <Route path="projects/:id/work" element={<ProjectWorkspace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
