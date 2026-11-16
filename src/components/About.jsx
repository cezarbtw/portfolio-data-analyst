import React from 'react';
import { User, CheckCircle2, Building2, BrainCircuit, BarChart3, ArrowUpRight } from 'lucide-react';
import { personalInfo, dataAnalystData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
            <User className="h-3.5 w-3.5 text-emerald-400" />
            <span>Sobre Mim & Perfil Profissional</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Transformando dados dispersos em decisões estratégicas de alto impacto.
          </h2>
        </div>

        {/* Grid Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Bio text */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {dataAnalystData.bio.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Localização: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Status: {personalInfo.status}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Modalidade: Remoto / Híbrido</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Foco: BI, ETL, SQL & Estatística</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards on the Right */}
          <div className="lg:col-span-5 space-y-4">

            {/* Power BI Spotlight */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Power BI & Modelagem DAX</h3>
                  <span className="text-xs text-slate-400">Dashboards Executivos em Nuvem</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Desenvolvimento de relatórios interativos com modelagem dimensional (Star Schema), medidas DAX calculadas, storytelling visual e análise exploratória para suporte à tomada de decisão de gestores.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-amber-400 font-semibold">Power BI Cloud Service</span>
                <a
                  href={personalInfo.powerBiReportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Abrir Relatório</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* TCM-GO Spotlight */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Pipelines ETL no TCM-GO</h4>
                  <span className="text-[11px] text-slate-400">Tribunal de Contas dos Municípios (Goiás)</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Desenvolvimento e sustentação de esteiras ETL para processar e higienizar bases orçamentárias de políticas ambientais dos 246 municípios de Goiás para o Novo Portal do Cidadão.
              </p>
            </div>

            {/* AI / Machine Learning Spotlight */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <BrainCircuit className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Machine Learning & Visão Computacional</h4>
                  <span className="text-[11px] text-slate-400">YOLOv8 & Métricas de Avaliação</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extração de métricas quantitativas e dados estruturados a partir de imagens de inspeção com avaliação estatística rigorosa (mAP50-95, Precision e Recall).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
