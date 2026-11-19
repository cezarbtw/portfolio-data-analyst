import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      <Header />

      <main className="flex-1 pt-[56px]">
        {/* Seção 01: Teste da Grade e Escala Tipográfica */}
        <section className="py-20 lg:py-32 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Rótulo de seção */}
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-8">
              <span className="text-[var(--accent)]">01 /</span> Fase 1 — Fundação e Escala Tipográfica
            </p>

            {/* 1. Hero Nome: clamp(3.5rem, 11vw, 9.5rem), line-height 0.95, letter-spacing -0.02em */}
            <div className="border-b border-[var(--line)] pb-12 mb-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                Hero Nome — Instrument Serif · clamp(3.5rem, 11vw, 9.5rem) · lh 0.95
              </p>
              <h1 className="font-display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--ink)]">
                Abraão Cezar
              </h1>
            </div>

            {/* 2. H2 de Seção: clamp(2.25rem, 5vw, 4rem), line-height 1 */}
            <div className="border-b border-[var(--line)] pb-12 mb-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                H2 de Seção — Instrument Serif · clamp(2.25rem, 5vw, 4rem) · lh 1
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-[var(--ink)]">
                Projetos Analíticos &amp; Setor Público
              </h2>
            </div>

            {/* 3. Título de Projeto na Lista: clamp(1.75rem, 3.5vw, 3rem) */}
            <div className="border-b border-[var(--line)] pb-12 mb-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                Título de Projeto — Instrument Serif · clamp(1.75rem, 3.5vw, 3rem)
              </p>
              <h3 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] text-[var(--ink)]">
                TCM-GO: Painéis no Power BI para o Portal do Cidadão
              </h3>
            </div>

            {/* 4. Corpo de Texto: 18px / 1.6, máx. 62ch em Schibsted Grotesk */}
            <div className="border-b border-[var(--line)] pb-12 mb-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                Corpo — Schibsted Grotesk · 18px / 1.6 · máx. 62ch
              </p>
              <div className="max-w-[62ch] space-y-4 font-body text-[18px] leading-[1.6] text-[var(--ink)]">
                <p>
                  Texto editorial em Schibsted Grotesk 400. Estrutura de leitura com alto contraste,
                  entrelinha de 1.6 e largura restrita a 62 caracteres para conforto ótico prolongado.
                </p>
                <p className="font-medium">
                  Variação em peso 500 (Medium): utilizado para ênfases estruturais e destaques dentro do corpo do texto.
                </p>
                <p className="font-semibold">
                  Variação em peso 600 (Semibold): peso máximo utilizado em títulos de apoio e cabeçalhos de tabela.
                </p>
              </div>
            </div>

            {/* 5. Rótulo Mono: 12px, uppercase, letter-spacing 0.08em em JetBrains Mono */}
            <div className="border-b border-[var(--line)] pb-12 mb-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                Rótulo Mono — JetBrains Mono · 12px · Uppercase · Tracking 0.08em
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-[12px] uppercase tracking-[0.08em]">
                <span className="text-[var(--ink)]">01 / PROJETOS</span>
                <span className="text-[var(--muted)]">POWER BI · PYTHON · SQL</span>
                <span className="text-[var(--accent)]">246 MUNICÍPIOS DE GOIÁS</span>
              </div>
            </div>

            {/* 6. Interação de Links (DESIGN.md: sublinhado cresce 250ms, seta 3px diagonal) */}
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                Links e Movimento — Sublinhado 250ms e Seta Externa (+3px hover)
              </p>
              <div className="flex flex-wrap items-center gap-8 text-[18px] font-body">
                <a href="#teste" className="link-underline text-[var(--ink)] font-medium">
                  Link interno com sublinhado
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1">
                  Link externo <span aria-hidden="true" className="arrow-ext text-[var(--muted)]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 02: Tokens de Cor e Paleta do DESIGN.md */}
        <section className="py-20 lg:py-32 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-8">
              <span className="text-[var(--accent)]">02 /</span> Tokens de Cor (DESIGN.md)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* --bg */}
              <div className="border border-[var(--line)] p-6 bg-[var(--bg)]">
                <div className="h-16 w-full border border-[var(--line)] mb-4 bg-[#F4F1EA]" />
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">--bg</p>
                <p className="font-mono text-[14px] text-[var(--ink)]">#F4F1EA</p>
                <p className="font-body text-[14px] text-[var(--muted)] mt-1">Fundo quente off-white</p>
              </div>

              {/* --ink */}
              <div className="border border-[var(--line)] p-6 bg-[var(--bg)]">
                <div className="h-16 w-full mb-4 bg-[#121212]" />
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">--ink</p>
                <p className="font-mono text-[14px] text-[var(--ink)]">#121212</p>
                <p className="font-body text-[14px] text-[var(--muted)] mt-1">Texto e elementos estruturais</p>
              </div>

              {/* --muted */}
              <div className="border border-[var(--line)] p-6 bg-[var(--bg)]">
                <div className="h-16 w-full mb-4 bg-[#5E5B54]" />
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">--muted</p>
                <p className="font-mono text-[14px] text-[var(--ink)]">#5E5B54</p>
                <p className="font-body text-[14px] text-[var(--muted)] mt-1">Texto secundário e rótulos</p>
              </div>

              {/* --accent */}
              <div className="border border-[var(--line)] p-6 bg-[var(--bg)]">
                <div className="h-16 w-full mb-4 bg-[#D9411E]" />
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">--accent</p>
                <p className="font-mono text-[14px] text-[var(--accent)] font-medium">#D9411E</p>
                <p className="font-body text-[14px] text-[var(--muted)] mt-1">Vermelho-tijolo (uso estrito)</p>
              </div>
            </div>

            {/* Linha 1px (--line) */}
            <div className="mt-8 border border-[var(--line)] p-6 bg-[var(--bg)]">
              <div className="h-px w-full bg-[var(--line)] mb-4" />
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">--line</p>
              <p className="font-mono text-[14px] text-[var(--ink)]">rgba(18, 18, 18, 0.15)</p>
              <p className="font-body text-[14px] text-[var(--muted)] mt-1">Linha técnica de 1px a 15% de opacidade</p>
            </div>
          </div>
        </section>

        {/* Seção 03: Demonstração da Grade de 12 Colunas (1200px, gutter 24px) */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-8">
              <span className="text-[var(--accent)]">03 /</span> Grade de 12 Colunas (Container 1200px · Gutter 24px)
            </p>

            {/* 12 colunas visíveis */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-6 border-t border-b border-[var(--line)] py-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="border border-[var(--line)] py-6 text-center font-mono text-[12px] text-[var(--muted)]"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Demonstração do layout assimétrico futuro: col 1-4 (título) + col 5-12 (conteúdo) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 pt-8 border-t border-[var(--line)]">
              <div className="lg:col-span-4 border border-[var(--line)] p-4 font-mono text-[12px] text-[var(--muted)]">
                Colunas 1–4: Coluna fixa (sticky) do título da seção (≥1024px)
              </div>
              <div className="lg:col-span-8 border border-[var(--line)] p-4 font-mono text-[12px] text-[var(--muted)]">
                Colunas 5–12: Conteúdo rolando à direita (≥1024px)
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
