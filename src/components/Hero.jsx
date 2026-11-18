import React from 'react';
import { personalInfo, heroData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] transition-colors">
      <div className="mx-auto max-w-[760px] px-5 sm:px-6">
        {/* Large editorial title */}
        <div className="hero-fade-in-1">
          <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-serif font-medium tracking-normal text-[#1C1C1A] dark:text-[#EAE8E3] leading-[1.08]">
            {heroData.headline}
          </h1>
        </div>

        {/* Clean subtitle, no wide tracking, readable on mobile */}
        <div className="hero-fade-in-2 mt-3">
          <p className="text-sm sm:text-base font-sans font-medium text-[#444440] dark:text-[#A8A69E]">
            {heroData.role} <span className="text-[#999790] dark:text-[#666560]">·</span> {personalInfo.location}
          </p>
        </div>

        {/* Concrete, factual narrative */}
        <div className="hero-fade-in-3 mt-8 space-y-4 text-[17px] leading-[1.68] text-[#1C1C1A] dark:text-[#EAE8E3]">
          {heroData.intro.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Editorial Visual Anchor: 3 Key Facts Strip */}
        <div className="hero-fade-in-4 mt-10 pt-8 border-t border-[#E5E3DD] dark:border-[#282826]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            {heroData.facts.map((fact, idx) => (
              <div
                key={idx}
                className={idx > 0 ? 'sm:border-l sm:border-[#E5E3DD] sm:dark:border-[#282826] sm:pl-4' : ''}
              >
                <div className="text-2xl sm:text-[26px] font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] leading-tight">
                  {fact.value}
                </div>
                <div className="mt-1 text-xs font-mono text-[#444440] dark:text-[#A8A69E]">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial text links */}
        <div className="hero-fade-in-4 mt-8 pt-6 border-t border-[#E5E3DD] dark:border-[#282826] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="editorial-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium"
          >
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <span className="arrow-icon" aria-hidden="true">↗</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <span className="arrow-icon" aria-hidden="true">↗</span>
          </a>

          <a
            href="#projetos"
            className="editorial-link text-[#1C1C1A] dark:text-[#EAE8E3] font-medium ml-auto sm:ml-0 inline-flex items-center gap-1"
          >
            <span>Ver projetos analíticos</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
