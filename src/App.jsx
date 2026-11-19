import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      <Header />
      <main className="flex-1 pt-[56px]">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
