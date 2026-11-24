import React, { useState } from 'react';
import PixelIcon from './PixelIcon';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('abraaocezarIL@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cezarinaciol/',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/cezarbtw',
      external: true,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5562982801501',
      external: true,
    },
    {
      label: 'Telefone',
      href: 'tel:+5562982801501',
      external: false,
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 border-t border-[var(--line)] bg-transparent text-[var(--ink)]">
      <div className="max-w-[1100px] mx-auto">
        {/* Rótulo pequeno */}
        <div className="font-body font-medium text-[13px] text-[var(--muted)] mb-3">
          Contato
        </div>

        {/* Título grande na fonte de caráter (Fraunces) */}
        <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.15rem)] tracking-[-0.025em] leading-[1.06] text-[var(--ink)] mb-4">
          Disponível para projetos em <em className="italic font-medium">dados e BI</em>
        </h2>

        {/* Frase curta */}
        <p className="font-body text-[15px] sm:text-[17px] leading-[1.7] text-[var(--muted)] max-w-[56ch] mb-8 sm:mb-10">
          Atuo na construção de esteiras ETL, modelagem dimensional e relatórios analíticos no Power BI. Vamos conversar sobre novas oportunidades.
        </p>

        {/* E-mail em tipografia de título com sublinhado coral e botão de contorno 1px */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 mb-10 pb-8 border-b border-[var(--line)]">
          <a
            href="mailto:abraaocezarIL@outlook.com"
            className="font-display font-medium text-[clamp(1.55rem,4vw,2.85rem)] tracking-[-0.025em] text-[var(--ink)] leading-none link-email-underline focus-visible:outline-none"
          >
            abraaocezarIL@outlook.com
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-card border border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-body font-medium text-[13px] transition-colors cursor-pointer inline-flex items-center gap-2 shrink-0 focus-visible:outline-none"
            aria-label="Copiar e-mail para a área de transferência"
          >
            <PixelIcon name={copied ? 'check' : 'copy'} size={14} className={copied ? 'text-[var(--accent)]' : ''} />
            <span>{copied ? 'Copiado!' : 'Copiar e-mail'}</span>
          </button>
        </div>

        {/* Linha de links em texto simples sem caixas */}
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 font-body font-medium text-[14px]">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="link-underline text-[var(--muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{item.label}</span>
              {item.external && (
                <span aria-hidden="true" className="arrow-ext text-[11px]">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
