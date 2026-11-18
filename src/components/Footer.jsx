import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E3DD] dark:border-[#282826] py-10 text-xs font-mono text-[#6B6B66] dark:text-[#96948E]">
      <div className="mx-auto max-w-[720px] px-6">
        <p>© {new Date().getFullYear()} {personalInfo.name}.</p>
      </div>
    </footer>
  );
}
