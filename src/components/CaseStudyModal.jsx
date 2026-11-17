import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers, Image as ImageIcon, ZoomIn, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose, isFullstack }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) setIsZoomed(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, isZoomed]);

  if (!project) return null;

  const currentImage = project.images && project.images[selectedImageIndex] ? project.images[selectedImageIndex] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
          title="Fechar (ESC)"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Title */}
        <div className="pr-12">
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            project.tags?.includes('Power BI')
              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
              : isFullstack
              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          }`}>
            {project.category}
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
            <span className="font-mono text-xs sm:text-sm text-slate-200">{project.metrics}</span>
          </div>
        )}

        {/* Power BI Dashboard Interactive Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <BarChart3 className="h-4 w-4 text-amber-400" />
                <span>Demonstração Visual do Dashboard ({project.images.length} {project.images.length === 1 ? 'tela' : 'telas'})</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Clique na imagem para ampliar em alta definição</span>
              </div>
            </div>

            {/* Screen Tabs (if multiple images) */}
            {project.images.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-4 pb-2 border-b border-slate-800/80">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedImageIndex === idx
                        ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span>{idx + 1}. {img.title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Active Screen Display */}
            {currentImage && (
              <div className="space-y-3">
                <div
                  onClick={() => setIsZoomed(true)}
                  className="group/screen relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 cursor-zoom-in aspect-[16/10] sm:aspect-[16/10]"
                >
                  <img
                    src={currentImage.url}
                    alt={currentImage.title}
                    className="w-full h-full object-contain bg-slate-950 transition-transform duration-300 group-hover/screen:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-700 px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-sm">
                      <ZoomIn className="h-4 w-4 text-amber-400" />
                      Ampliar Tela Cheia (Alta Resolução)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">{currentImage.title}</h5>
                    <p className="text-slate-400 text-xs mt-0.5">{currentImage.description}</p>
                  </div>

                  <a
                    href={currentImage.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
                    <span>Abrir Imagem Original</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Deep Dive Sections */}
        <div className="mt-6 space-y-4 text-sm text-slate-300">
          
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <AlertCircle className="h-4 w-4 text-rose-400" />
              O Desafio / Problema
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-400">
              {project.caseStudy?.problem || project.description}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <Cpu className="h-4 w-4 text-cyan-400" />
              Solução Técnica Implementada
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
              {project.caseStudy?.solution}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <Layers className="h-4 w-4 text-purple-400" />
              Arquitetura & Engenharia
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-400">
              {project.caseStudy?.techStackDetails}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-emerald-950/20 p-4 border-emerald-500/20">
            <h4 className="flex items-center gap-2 font-bold text-emerald-300 text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Resultados & Impacto em Produção
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
              {project.caseStudy?.results}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 ${
                project.tags?.includes('Power BI')
                  ? 'bg-amber-600 hover:bg-amber-500'
                  : isFullstack
                  ? 'bg-purple-600 hover:bg-purple-500'
                  : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              <span>{project.tags?.includes('Power BI') ? 'Abrir no Power BI Cloud (Link Externo)' : 'Acessar Portal ao Vivo'}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Ver Código no GitHub</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-xs font-medium text-slate-400 hover:text-slate-200 py-2 px-3"
          >
            Fechar janela
          </button>
        </div>

      </div>

      {/* Lightbox Fullscreen Zoom Modal */}
      {isZoomed && currentImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-lg animate-fadeIn cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800/90 text-white hover:bg-slate-700 z-10"
            title="Fechar Zoom (ESC)"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-[96vw] max-h-[92vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
