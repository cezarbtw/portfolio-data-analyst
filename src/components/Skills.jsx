import React from 'react';
import PixelIcon from './PixelIcon';

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
    <section id="competencias" className="py-16 sm:py-24 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Colunas 1-4: Título da Seção (Sticky Desktop) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px] space-y-4">
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
                <PixelIcon name="terminal" size={14} />
                <span>03 // Competências</span>
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.18] text-[var(--ink)]">
                Habilidades Técnicas
              </h2>
              <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Stack &amp; Metodologias
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Domínio técnico validado em esteiras públicas e projetos de dados estruturados.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: Categorias Técnicas e Badges em Mono ─── */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="py-8 sm:py-10 border-b border-[var(--line)] first:pt-6"
              >
                {/* Título da Categoria */}
                <h3 className="font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--ink)] font-semibold mb-3 flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">—</span>
                  <span>{skill.category}</span>
                </h3>

                {/* Descrição em Prosa Técnica */}
                <p className="font-body text-[14px] sm:text-[15px] leading-[1.8] text-[var(--muted)] max-w-[62ch] mb-4">
                  {skill.description}
                </p>

                {/* Badges Mono de Ferramentas */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-card bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
