import React, { useEffect, useRef } from 'react';
import PixelIcon from './PixelIcon';

export default function ImageLightbox({ image, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!image) return;

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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 bg-[#000000]/90 backdrop-blur-md cursor-zoom-out"
      onClick={onClose}
    >
      {/* Barra superior de controle do lightbox */}
      <div className="absolute top-4 left-4 right-4 max-w-[1200px] mx-auto flex items-center justify-between pointer-events-auto">
        <span className="font-body text-[13px] text-[#FFFFFF]/75">
          Pressione <kbd className="font-mono px-1.5 py-0.5 rounded bg-[#FFFFFF]/15 text-[#FFFFFF] text-[11px]">Esc</kbd> para fechar
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar ampliação"
          className="flex items-center gap-1.5 px-3 py-1.5 font-body font-medium text-[13px] bg-[#18181D] text-[#FFFFFF] rounded-card border border-[#FFFFFF]/25 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
        >
          <PixelIcon name="close" size={14} />
          <span>Fechar</span>
        </button>
      </div>

      {/* Conteúdo ampliado */}
      <div
        className="max-w-[1200px] max-h-[85vh] w-full flex flex-col items-center pointer-events-auto cursor-default mt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border border-[#FFFFFF]/20 rounded-card bg-[#131316] overflow-hidden max-w-full shadow-2xl">
          <img
            src={image.url || image}
            alt={image.caption || image.title || "Captura em alta resolução"}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain block mx-auto"
          />
        </div>

        {(image.caption || image.title) && (
          <p className="mt-3 font-body text-[13px] text-center text-[#FFFFFF]/85 max-w-2xl px-3">
            {image.caption || image.title}
          </p>
        )}
      </div>
    </div>
  );
}
