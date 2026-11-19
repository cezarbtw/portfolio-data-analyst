import React, { useEffect, useRef } from 'react';

export default function ImageLightbox({ image, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!image) return;

    // Foco no botão de fechar ao abrir
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
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
      aria-label="Visualização em alta resolução da imagem"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 bg-[#121212]/95 cursor-zoom-out"
      onClick={onClose}
    >
      {/* Barra superior de controle do lightbox */}
      <div className="absolute top-4 left-4 right-4 max-w-[1200px] mx-auto flex items-center justify-between pointer-events-auto">
        <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#F4F1EA]/70">
          [ESC] para fechar
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar ampliação"
          className="px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] bg-[#121212] text-[#F4F1EA] border border-[#F4F1EA]/30 hover:border-[#F4F1EA] hover:text-[#D9411E] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          Fechar [×]
        </button>
      </div>

      {/* Conteúdo ampliado */}
      <div
        className="max-w-[1100px] max-h-[85vh] w-full flex flex-col items-center pointer-events-auto cursor-default mt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border border-[#F4F1EA]/20 bg-[#121212] overflow-hidden max-w-full">
          <img
            src={image.url || image}
            alt={image.caption || image.title || "Captura em alta resolução"}
            className="max-w-full max-h-[72vh] w-auto h-auto object-contain block"
          />
        </div>

        {(image.caption || image.title) && (
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.08em] text-center text-[#F4F1EA]/80 max-w-2xl px-2">
            {image.caption || image.title}
          </p>
        )}
      </div>
    </div>
  );
}
