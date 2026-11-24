import React from 'react';

const skillsData = [
  {
    category: "Visualização e BI",
    description: "Power BI (Desktop e Service), DAX, modelagem dimensional (Star Schema), elaboração de relatórios executivos para controle externo e acompanhamento de indicadores municipais.",
    tags: ["Power BI", "DAX", "Star Schema", "Power BI Service", "Controle Externo"]
  },
  {
    category: "Linguagens Analíticas",
    description: "Python (Pandas, NumPy, Requests), SQL para consultas analíticas complexas, tratamento de dados estruturados e automação de rotinas.",
    tags: ["Python", "SQL", "Pandas", "NumPy", "Requests"]
  },
  {
    category: "Dados e Pipelines ETL",
    description: "Pipelines de extração e tratamento de dados públicos, saneamento de bases orçamentárias, reconciliação de payloads JSON contra bases SQL, bancos relacionais (MySQL, PostgreSQL, SQL Server).",
    tags: ["Pipelines ETL", "Saneamento Orçamentário", "JSON APIs", "MySQL", "PostgreSQL", "SQL Server"]
  },
  {
    category: "Estatística e Auditoria de Modelos",
    description: "Análise de séries temporais, filtros estatísticos por média móvel, estatística descritiva, validação e auditoria de modelos de inteligência artificial (APIs de NER e detecção visual).",
    tags: ["Séries Temporais", "Média Móvel", "Estatística Descritiva", "Auditoria de IA", "NER"]
  }
];

export default function Skills() {
  return (
    <section id="competencias" className="py-8 sm:py-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Colunas 1-4: Título da Seção (Sticky Desktop: 56px + 24px = 80px) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[80px] space-y-3">
              <div className="font-body font-medium text-[13px] text-[var(--muted)]">
                Competências
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] text-[var(--ink)]">
                Habilidades Técnicas
              </h2>
              <p className="font-body text-[14px] text-[var(--muted)] leading-[1.6]">
                Stack &amp; Metodologias
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Domínio técnico validado em esteiras públicas e projetos de dados estruturados.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: Categorias Técnicas e Ferramentas em Texto Simples ─── */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="py-7 sm:py-9 border-b border-[var(--line)] first:pt-4"
              >
                {/* Título da Categoria em Fonte Normal com travessão em cor secundária */}
                <h3 className="font-body font-semibold text-[16px] text-[var(--ink)] mb-2.5 flex items-center gap-2">
                  <span className="text-[var(--muted)] font-bold">—</span>
                  <span>{skill.category}</span>
                </h3>

                {/* Descrição em Prosa Técnica */}
                <p className="font-body text-[14px] sm:text-[15px] leading-[1.75] text-[var(--muted)] max-w-[62ch] mb-3.5">
                  {skill.description}
                </p>

                {/* Ferramentas em Linha de Texto Simples (sem caixas/chips) */}
                <p className="font-mono text-[12px] text-[var(--muted)]">
                  {skill.tags.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
