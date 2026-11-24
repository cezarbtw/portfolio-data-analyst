import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[var(--ink)]">
      {/* Cabeçalho fixo no topo com links e toggle de tema (h-[56px]) */}
      <Header />

      {/* Área de conteúdo centralizada (max-w ~1100px) */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 sm:px-8 pt-[56px] pb-8">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
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
