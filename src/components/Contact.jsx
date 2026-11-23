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
      display: 'linkedin.com/in/cezarinaciol',
      icon: 'linkedin',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/cezarbtw',
      display: 'github.com/cezarbtw',
      icon: 'github',
      external: true,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5562982801501',
      display: '+55 62 98280-1501',
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Telefone',
      href: 'tel:+5562982801501',
      display: '(62) 98280-1501',
      icon: 'mail',
      external: false,
    },
  ];

  return (
    <section id="contato" className="bg-[var(--accent)] text-[#FFFFFF] py-14 sm:py-20 px-6 sm:px-12 rounded-card">
      <div className="max-w-[1100px] mx-auto">
        {/* Rótulo da Seção */}
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[#FFFFFF]/85 mb-5">
          <PixelIcon name="mail" size={14} />
          <span>04 // Contato Direto</span>
        </div>

        {/* Título de Disponibilidade */}
        <h2 className="font-display font-bold text-[clamp(1.75rem,3.8vw,3rem)] leading-[1.18] text-[#FFFFFF] mb-4">
          Disponível para Projetos em Dados e BI
        </h2>

        {/* Frase Curta */}
        <p className="font-body text-[15px] sm:text-[17px] leading-[1.7] text-[#FFFFFF]/90 max-w-[56ch] mb-10">
          Atuo com esteiras ETL, relatórios executivos no Power BI e auditoria de dados públicos. Vamos conversar sobre novas oportunidades.
        </p>

        {/* E-mail em Destaque com Botão de Copiar */}
        <div className="p-5 sm:p-7 rounded-card bg-[#000000]/15 border border-[#FFFFFF]/20 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFFFFF]/70 block mb-1">
              // E-mail Direto
            </span>
            <a
              href="mailto:abraaocezarIL@outlook.com"
              className="font-display font-bold text-[clamp(1.25rem,2.8vw,2.2rem)] text-[#FFFFFF] hover:underline break-all leading-tight"
            >
              abraaocezarIL@outlook.com
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="self-start sm:self-center px-4 py-2.5 rounded-card bg-[#FFFFFF] text-[var(--accent)] font-mono text-[12px] uppercase tracking-wider font-bold hover:bg-[#FFFFFF]/90 active:scale-95 transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
            aria-label="Copiar e-mail para a área de transferência"
          >
            <PixelIcon name={copied ? 'check' : 'copy'} size={14} className="text-[var(--accent)]" />
            <span>{copied ? 'Copiado!' : 'Copiar E-mail'}</span>
          </button>
        </div>

        {/* Links Externos Padronizados com Ícones Pixel-Art */}
        <div className="pt-8 border-t border-[#FFFFFF]/25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-[12px] uppercase tracking-wider">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-card bg-[#000000]/10 border border-[#FFFFFF]/15 hover:bg-[#000000]/20 text-[#FFFFFF] transition-colors inline-flex items-center justify-between focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
            >
              <div className="flex items-center gap-2 truncate">
                <PixelIcon name={item.icon} size={15} />
                <span className="truncate">{item.label}</span>
              </div>
              {item.external && (
                <span aria-hidden="true" className="arrow-ext text-[11px] text-[#FFFFFF]/70 shrink-0">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
