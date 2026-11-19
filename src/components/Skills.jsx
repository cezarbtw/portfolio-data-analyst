import React from 'react';

const skillsData = [
  {
    category: "Visualização e BI",
    items: "Power BI (Desktop e Service), DAX, modelagem dimensional (Star Schema), elaboração de relatórios executivos para controle externo e acompanhamento de indicadores municipais."
  },
  {
    category: "Linguagens",
    items: "Python (Pandas, NumPy, Requests), SQL para consultas analíticas complexas, tratamento de dados estruturados e automação de rotinas."
  },
  {
    category: "Dados e ETL",
    items: "Pipelines de extração e tratamento de dados públicos, saneamento de bases orçamentárias, reconciliação de payloads JSON contra bases SQL, bancos relacionais (MySQL, PostgreSQL, SQL Server)."
  },
  {
    category: "Estatística e Machine Learning",
    items: "Análise de séries temporais, filtros estatísticos por média móvel, estatística descritiva, validação e auditoria de modelos de inteligência artificial (APIs de NER e detecção visual)."
  }
];

export default function Skills() {
  return (
    <section id="competencias" className="py-20 lg:py-32 border-b border-[var(--line)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Colunas 1-4: Título da seção (sticky em ≥1024px conforme DESIGN.md) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px]">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)]">03 /</span> Competências
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-[var(--ink)]">
                Habilidades Técnicas
              </h2>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Stack &amp; Metodologias
              </p>
            </div>
          </div>

          {/* Colunas 5-12: Competências em texto corrido organizado por áreas */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="py-8 border-b border-[var(--line)]"
              >
                <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--ink)] font-semibold mb-3">
                  <span className="text-[var(--accent)] mr-2">—</span>
                  {skill.category}
                </h3>
                <p className="font-body text-[17px] leading-[1.65] text-[var(--ink)] max-w-[62ch]">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
