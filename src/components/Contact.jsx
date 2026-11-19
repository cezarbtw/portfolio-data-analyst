import React from 'react';

export default function Contact() {
  const contactLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cezarinaciol/', display: 'linkedin.com/in/cezarinaciol', external: true },
    { label: 'GitHub', href: 'https://github.com/cezarbtw', display: 'github.com/cezarbtw', external: true },
    { label: 'WhatsApp', href: 'https://wa.me/5562982801501', display: '+55 62 98280-1501', external: true },
    { label: 'Telefone', href: 'tel:+5562982801501', display: '(62) 98280-1501', external: false },
  ];

  return (
    <section id="contato" className="bg-[var(--accent)] text-[var(--bg)] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Rótulo em mono */}
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--bg)]/80 mb-6">
          04 / Contato
        </p>

        {/* Frase de disponibilidade */}
        <p className="font-body text-[18px] sm:text-[22px] leading-[1.4] max-w-[62ch] text-[var(--bg)]">
          Disponível para projetos em Análise de Dados, Business Intelligence e Engenharia Analítica.
        </p>

        {/* E-mail gigante em Instrument Serif */}
        <div className="my-8 sm:my-12">
          <a
            href="mailto:abraaocezarIL@outlook.com"
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] text-[var(--bg)] hover:opacity-90 transition-opacity block break-all focus-visible:outline-2 focus-visible:outline-[var(--bg)]"
          >
            abraaocezarIL@outlook.com
          </a>
        </div>

        {/* Links externos padronizados com seta */}
        <div className="pt-8 border-t border-[var(--bg)]/25 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.08em]">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="link-underline text-[var(--bg)] inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--bg)]"
            >
              <span>{item.label}: {item.display}</span>
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
