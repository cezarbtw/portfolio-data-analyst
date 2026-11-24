import React from 'react';

const experiencesData = [
  {
    period: "2024 — PRESENTE",
    role: "Analista de Dados (Projeto Portal do Cidadão & Auditoria de IA)",
    organization: "Tribunal de Contas dos Municípios de Goiás (TCM-GO)",
    deliverables: [
      "Desenvolvi esteiras ETL em Python (Pandas) e SQL para saneamento de dados orçamentários dos 246 municípios de Goiás.",
      "Construí os relatórios analíticos no Power BI para a aba Meio Ambiente do Portal do Cidadão do TCM-GO.",
      "Elaborei rotinas automatizadas em Python com execução concorrente para validação e auditoria da API de NER contra consultas SQL em bases orçamentárias e contábeis."
    ]
  },
  {
    period: "2023 — PRESENTE",
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
    <section id="experiencia" className="py-8 sm:py-14 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Colunas 1-4: Título da Seção (Sticky Desktop: 56px + 24px = 80px) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[80px] space-y-3">
              <div className="font-body font-medium text-[13px] text-[var(--muted)]">
                Experiência
              </div>
              <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.15rem)] tracking-[-0.025em] leading-[1.06] text-[var(--ink)]">
                Trajetória <em className="italic font-medium">Profissional</em>
              </h2>
              <p className="font-body text-[14px] text-[var(--muted)] leading-[1.6]">
                Setor público · Auditoria · BI
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Atuação com foco em saneamento, auditoria e geração de valor a partir de dados complexos.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: Lista de Experiências ─── */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {experiencesData.map((exp, idx) => (
              <div
                key={idx}
                className="py-8 sm:py-10 border-b border-[var(--line)] first:pt-4"
              >
                {/* Período em Mono MAIÚSCULAS e Organização em cor secundária */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 font-body text-[13px]">
                  <span className="font-mono font-medium text-[12px] uppercase tracking-wider text-[var(--muted)]">
                    {exp.period}
                  </span>
                  <span aria-hidden="true" className="text-[var(--line)]">·</span>
                  <span className="text-[var(--muted)] font-medium">{exp.organization}</span>
                </div>

                {/* Cargo */}
                <h3 className="font-sans font-semibold text-[clamp(1.25rem,2.2vw,1.8rem)] tracking-[-0.02em] leading-[1.25] text-[var(--ink)] mb-5">
                  {exp.role}
                </h3>

                {/* Entregas em Bullets com Travessão em cor secundária */}
                <ul className="space-y-3 font-body text-[14px] sm:text-[15px] leading-[1.75] text-[var(--ink)] max-w-[62ch]">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span aria-hidden="true" className="font-mono text-[var(--muted)] shrink-0 select-none pt-0.5 font-bold">
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
