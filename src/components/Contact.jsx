import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const links = [
    { label: 'E-mail',     href: `mailto:${personalInfo.email}`,               display: personalInfo.email,                   external: false },
    { label: 'Telefone',   href: `tel:+5562982801501`,                          display: personalInfo.phone,                   external: false },
    { label: 'WhatsApp',   href: `https://wa.me/${personalInfo.whatsapp}`,      display: 'Conversar via WhatsApp',             external: true  },
    { label: 'LinkedIn',   href: personalInfo.linkedin,                         display: 'linkedin.com/in/cezarinaciol',       external: true  },
    { label: 'GitHub',     href: personalInfo.github,                           display: `github.com/${personalInfo.githubUsername}`, external: true  },
  ];

  return (
    <section
      id="contato"
      style={{ padding: '5rem 0' }}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">

        {/* Cabeçalho da seção */}
        <div className="flex items-baseline gap-4 mb-12 rule-b pb-6">
          <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest">04</span>
          <h2 className="text-display-md font-display text-[var(--ink)]">Contato</h2>
        </div>

        {/* Lista de links */}
        <div className="space-y-0">
          {links.map(({ label, href, display, external }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 rule-x py-5 first:border-t-0 first:pt-0">
              <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest w-24 shrink-0">
                {label}
              </span>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="link-underline font-body font-medium text-[var(--ink)] inline-flex items-center gap-1 text-[16px]"
              >
                {display}
                {external && (
                  <span aria-hidden="true" className="text-[var(--muted)] text-[13px]">↗</span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Disponibilidade */}
        <p className="mt-10 font-body text-[15px] text-[var(--muted)] leading-relaxed max-w-[55ch]">
          Disponível para oportunidades em Análise de Dados, Business Intelligence e Engenharia Analítica.
        </p>
      </div>
    </section>
  );
}
