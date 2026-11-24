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
      icon: 'linkedin',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/cezarbtw',
      icon: 'github',
      external: true,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5562982801501',
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Telefone',
      href: 'tel:+5562982801501',
      icon: 'mail',
      external: false,
    },
  ];

  return (
    <div className="py-8 sm:py-14">
      <section id="contato" className="bg-[var(--accent)] text-[#FFFFFF] py-12 sm:py-16 px-6 sm:px-10 rounded-card shadow-sm">
        <div className="max-w-[1100px] mx-auto">
          {/* Rótulo da Seção */}
          <div className="flex items-center gap-2 font-body font-medium text-[13px] text-[#FFFFFF]/90 mb-4">
            <PixelIcon name="mail" size={15} />
            <span>Contato Direto</span>
          </div>

          {/* Título de Disponibilidade */}
          <h2 className="font-display font-bold text-[clamp(1.75rem,3.8vw,2.75rem)] leading-[1.18] text-[#FFFFFF] mb-3">
            Disponível para Projetos em Dados e BI
          </h2>

          {/* Frase Curta */}
          <p className="font-body text-[15px] sm:text-[16px] leading-[1.7] text-[#FFFFFF]/90 max-w-[56ch] mb-8">
            Atuo com esteiras ETL, relatórios executivos no Power BI e auditoria de dados públicos. Vamos conversar sobre novas oportunidades.
          </p>

          {/* E-mail em Destaque com Botão de Copiar */}
          <div className="p-5 sm:p-6 rounded-card bg-[#000000]/15 border border-[#FFFFFF]/20 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-body text-[12px] text-[#FFFFFF]/75 block mb-1">
                E-mail direto
              </span>
              <a
                href="mailto:abraaocezarIL@outlook.com"
                className="font-display font-bold text-[clamp(1.2rem,2.6vw,1.9rem)] text-[#FFFFFF] hover:underline break-all leading-tight"
              >
                abraaocezarIL@outlook.com
              </a>
            </div>

            <button
              onClick={handleCopy}
              className="self-start sm:self-center px-4 py-2 rounded-card bg-[#FFFFFF] text-[var(--accent)] font-body font-semibold text-[13px] hover:bg-[#FFFFFF]/90 active:scale-95 transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
              aria-label="Copiar e-mail para a área de transferência"
            >
              <PixelIcon name={copied ? 'check' : 'copy'} size={14} className="text-[var(--accent)]" />
              <span>{copied ? 'Copiado!' : 'Copiar e-mail'}</span>
            </button>
          </div>

          {/* Links Padronizados em Grid */}
          <div className="pt-6 border-t border-[#FFFFFF]/25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-body font-medium text-[13px]">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-card bg-[#000000]/10 border border-[#FFFFFF]/15 hover:bg-[#000000]/20 text-[#FFFFFF] transition-colors inline-flex items-center justify-between focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
              >
                <div className="flex items-center gap-2.5 truncate">
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
    </div>
  );
}
