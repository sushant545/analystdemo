import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import SQLGym from './components/SQLGym';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
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
}

export default App;
