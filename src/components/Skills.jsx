import React from 'react';

const skillsData = [
  {
    category: "Visualização e BI",
    description: "Modelagem dimensional e painéis executivos para acompanhamento de indicadores municipais e controle externo.",
    tags: ["Power BI", "DAX", "Star Schema", "Power BI Service"]
  },
  {
    category: "Linguagens Analíticas",
    description: "Manipulação de dados estruturados, consultas em bancos relacionais e automação de rotinas analíticas.",
    tags: ["Python", "SQL", "Pandas", "NumPy", "Requests"]
  },
  {
    category: "Dados e Pipelines ETL",
    description: "Extração, reconciliação e higienização de bases públicas municipais em bancos relacionais.",
    tags: ["Pipelines ETL", "Saneamento Orçamentário", "JSON APIs", "MySQL", "PostgreSQL", "SQL Server"]
  },
  {
    category: "Estatística e Auditoria de Modelos",
    description: "Filtragem matemática de medições contínuas e verificação automatizada de extrações inteligentes.",
    tags: ["Séries Temporais", "Média Móvel", "Estatística Descritiva", "Auditoria de IA", "NER"]
  }
];

export default function Skills() {
  return (
    <section id="competencias" className="py-12 sm:py-16">
      <div className="max-w-[1100px] mx-auto">
        {/* ─── Cabeçalho da Seção ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="font-body font-medium text-[15px] text-[var(--muted)]">
              Competências
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.15rem)] tracking-tight leading-[1.08] text-[var(--ink)]">
              Habilidades Técnicas
            </h2>
          </div>

          <p className="font-body text-[15px] sm:text-[16px] leading-[1.65] text-[var(--muted)] max-w-[46ch]">
            Domínio técnico validado em esteiras públicas e projetos de dados estruturados.
          </p>
        </div>

        {/* ─── Matriz 2x2 em Linhas Finas de 1px (Sem numeração 01-04) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--line)]">
          {skillsData.map((skill) => (
            <div
              key={skill.category}
              className="p-6 sm:p-8 border-r border-b border-[var(--line)] bg-transparent hover:bg-[var(--surface)] transition-colors flex flex-col justify-between gap-5"
            >
              <div>
                <h3 className="font-display font-bold text-[19px] sm:text-[21px] tracking-tight text-[var(--ink)] mb-3">
                  {skill.category}
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] leading-[1.7] text-[var(--muted)]">
                  {skill.description}
                </p>
              </div>

              <p className="font-mono text-[13px] text-[var(--muted)] pt-4 border-t border-[var(--line)]">
                {skill.tags.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
