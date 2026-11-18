import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // 2. ScrollSpy active section detection
      const sections = ['top', 'projetos', 'experiencia', 'competencias', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projetos', label: 'Projetos' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'competencias', label: 'Competências' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6]/95 dark:bg-[#141413]/95 backdrop-blur-md transition-colors">
      {/* 2px Scroll Reading Progress Bar at the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-[#1F4E5F] dark:bg-[#6EA3B4] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Container: exactly max-w-[760px] to match Hero and section margins */}
      <div className="mx-auto max-w-[760px] px-5 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Author Name / Home link (Always strictly 1 line on mobile) */}
        <a
          href="#top"
          className="text-base font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] hover:text-[#1F4E5F] dark:hover:text-[#6EA3B4] transition-colors whitespace-nowrap tracking-normal"
        >
          <span className="hidden sm:inline">{personalInfo.name}</span>
          <span className="sm:hidden">{personalInfo.shortName}</span>
        </a>

        {/* Desktop Navigation (>= 640px) */}
        <nav aria-label="Navegação do portfólio" className="hidden sm:block">
          <ul className="flex items-center space-x-6 text-[14px] text-[#444440] dark:text-[#A8A69E]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`transition-colors py-1 ${
                      isActive
                        ? 'text-[#1F4E5F] dark:text-[#6EA3B4] font-medium border-b border-[#1F4E5F] dark:border-[#6EA3B4]'
                        : 'hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button (< 640px) */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
            className="text-xs font-mono px-2.5 py-1 border border-[#E5E3DD] dark:border-[#282826] text-[#1C1C1A] dark:text-[#EAE8E3] bg-[#F3F1EB] dark:bg-[#1A1918]"
          >
            {mobileMenuOpen ? 'Fechar [×]' : 'Menu [☰]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, compact, no overflow) */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] px-5 py-3">
          <nav aria-label="Menu móvel">
            <ul className="flex flex-col space-y-2 text-sm text-[#444440] dark:text-[#A8A69E]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#1F4E5F] dark:hover:text-[#6EA3B4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
