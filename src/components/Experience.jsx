import React from 'react';
import PixelIcon from './PixelIcon';

const experiencesData = [
  {
    period: "2024 — Presente",
    role: "Analista de Dados (Projeto Portal do Cidadão & Auditoria de IA)",
    organization: "Tribunal de Contas dos Municípios de Goiás (TCM-GO)",
    deliverables: [
      "Desenvolvi esteiras ETL em Python (Pandas) e SQL para saneamento de dados orçamentários dos 246 municípios de Goiás.",
      "Construí os relatórios analíticos no Power BI para a aba Meio Ambiente do Portal do Cidadão do TCM-GO.",
      "Elaborei rotinas automatizadas em Python com execução concorrente para validação e auditoria da API de NER contra consultas SQL em bases orçamentárias e contábeis."
    ]
  },
  {
    period: "2023 — Presente",
    role: "Pesquisador e Desenvolvedor em Projetos de Dados",
    organization: "Projetos Analíticos e Repositórios Técnicos",
    deliverables: [
      "Desenvolvimento de relatórios executivos no Microsoft Power BI com modelagem dimensional (Star Schema) e medidas DAX.",
      "Modelagem e análise estatística de séries temporais de dados biométricos em Python.",
      "Estruturação de bancos de dados relacionais normalizados e consultas analíticas avançadas em SQL."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-24 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Colunas 1-4: Título da Seção (Sticky Desktop) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px] space-y-4">
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
                <PixelIcon name="briefcase" size={14} />
                <span>02 // Experiência</span>
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.18] text-[var(--ink)]">
                Trajetória Profissional
              </h2>
              <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Setor Público · Auditoria · BI
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Atuação com foco em saneamento, auditoria e geração de valor a partir de dados complexos.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: Lista de Experiências (Referência A - Victor Eke) ─── */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {experiencesData.map((exp, idx) => (
              <div
                key={idx}
                className="py-10 sm:py-12 border-b border-[var(--line)] first:pt-6"
              >
                {/* Período e Organização em Mono */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-[0.08em] mb-4">
                  <span className="text-[var(--accent)] font-bold">{exp.period}</span>
                  <span aria-hidden="true" className="text-[var(--line)]">·</span>
                  <span className="text-[var(--muted)]">{exp.organization}</span>
                </div>

                {/* Cargo */}
                <h3 className="font-display font-bold text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.3] text-[var(--ink)] mb-7">
                  {exp.role}
                </h3>

                {/* Entregas em Bullets com Travessão Coral */}
                <ul className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.8] text-[var(--ink)] max-w-[62ch]">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span aria-hidden="true" className="font-mono text-[var(--accent)] shrink-0 select-none pt-0.5 font-bold">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
