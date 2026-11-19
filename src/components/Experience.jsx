import React from 'react';

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
    <section id="experiencia" className="py-20 lg:py-32 border-b border-[var(--line)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Colunas 1-4: Título da seção (sticky em ≥1024px conforme DESIGN.md) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px]">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)]">02 /</span> Experiência
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-[var(--ink)]">
                Trajetória Profissional
              </h2>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Setor Público · Auditoria · BI
              </p>
            </div>
          </div>

          {/* Colunas 5-12: Lista de experiências */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {experiencesData.map((exp, idx) => (
              <div
                key={idx}
                className="py-10 border-b border-[var(--line)] first:pt-8"
              >
                {/* Período e organização em mono */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px] uppercase tracking-[0.08em] mb-3">
                  <span className="text-[var(--accent)] font-semibold">{exp.period}</span>
                  <span aria-hidden="true" className="text-[var(--muted)]">·</span>
                  <span className="text-[var(--muted)]">{exp.organization}</span>
                </div>

                {/* Cargo */}
                <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.1] text-[var(--ink)] mb-6">
                  {exp.role}
                </h3>

                {/* Entregas em bullets limpos */}
                <ul className="space-y-3 font-body text-[16px] sm:text-[17px] leading-[1.6] text-[var(--ink)] max-w-[62ch]">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span aria-hidden="true" className="font-mono text-[var(--accent)] shrink-0 select-none">
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
