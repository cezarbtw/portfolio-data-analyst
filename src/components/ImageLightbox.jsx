import React, { useEffect } from 'react';

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização em alta resolução do painel"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 bg-[#141413]/90 backdrop-blur-sm cursor-zoom-out animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
        <span className="text-xs font-mono text-[#A8A69E]">
          Pressione ESC para fechar
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar ampliação"
          className="px-3 py-1.5 text-xs font-mono uppercase bg-[#1C1C1A] text-[#EAE8E3] border border-[#282826] hover:bg-[#282826] transition-colors"
        >
          Fechar [×]
        </button>
      </div>

      <div
        className="max-w-[96vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.caption || image.title || "Captura em alta resolução"}
          className="max-w-full max-h-[78vh] object-contain border border-[#282826] bg-[#141413] shadow-2xl block"
        />

        {(image.caption || image.indicators) && (
          <p className="mt-3 text-xs sm:text-sm font-sans text-center text-[#EAE8E3] max-w-2xl px-2">
            {image.caption || image.indicators}
          </p>
        )}
      </div>
    </div>
  );
}
