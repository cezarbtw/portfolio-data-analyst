import React from 'react';

/**
 * Diagrama SVG do fluxo automatizado de auditoria da API de NER no TCM-GO.
 * Compartilhado entre a listagem de projetos e a página de estudo de caso.
 */
export default function NerPipelineSvg() {
  return (
    <svg
      viewBox="0 0 540 168"
      className="w-full h-auto block"
      role="img"
      aria-label="Diagrama do pipeline: Payload JSON enviado ao Validador concorrente em Python para reconciliação com Consultas SQL"
    >
      <defs>
        <marker
          id="ner-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 2 L 8 5 L 1 8 z" fill="var(--muted)" />
        </marker>
        <marker
          id="ner-arrow-accent"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 2 L 8 5 L 1 8 z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* Nó 1: Payload JSON */}
      <rect
        x="8"
        y="16"
        width="144"
        height="76"
        rx="6"
        fill="var(--surface)"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
      <text
        x="80"
        y="38"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
      >
        ENTRADA API NER
      </text>
      <text
        x="80"
        y="60"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="14"
        fontWeight="600"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Payload JSON
      </text>
      <text
        x="80"
        y="78"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="11"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Extratos bancários
      </text>

      {/* Seta 1 -> 2 */}
      <line
        x1="156"
        y1="54"
        x2="188"
        y2="54"
        stroke="var(--muted)"
        strokeWidth="1.5"
        markerEnd="url(#ner-arrow)"
      />

      {/* Nó 2: Validador concorrente */}
      <rect
        x="194"
        y="16"
        width="152"
        height="76"
        rx="6"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <text
        x="270"
        y="38"
        textAnchor="middle"
        fill="var(--accent)"
        fontSize="10"
        fontWeight="600"
        fontFamily="JetBrains Mono, monospace"
      >
        PYTHON THREADS
      </text>
      <text
        x="270"
        y="60"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="14"
        fontWeight="600"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Validador concorrente
      </text>
      <text
        x="270"
        y="78"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="11"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Confronto campo a campo
      </text>

      {/* Seta bidirecional 2 <-> 3 */}
      <line
        x1="352"
        y1="54"
        x2="384"
        y2="54"
        stroke="var(--accent)"
        strokeWidth="1.5"
        markerStart="url(#ner-arrow-accent)"
        markerEnd="url(#ner-arrow-accent)"
      />

      {/* Nó 3: Consultas SQL */}
      <rect
        x="388"
        y="16"
        width="144"
        height="76"
        rx="6"
        fill="var(--surface)"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
      <text
        x="460"
        y="38"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
      >
        BASE OFICIAL
      </text>
      <text
        x="460"
        y="60"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="14"
        fontWeight="600"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Consultas SQL
      </text>
      <text
        x="460"
        y="78"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="11"
        fontFamily="Schibsted Grotesk, sans-serif"
      >
        Dados contábeis (nolock)
      </text>

      {/* Saída inferior de reconciliação */}
      <line
        x1="270"
        y1="92"
        x2="270"
        y2="112"
        stroke="var(--muted)"
        strokeWidth="1.5"
        markerEnd="url(#ner-arrow)"
      />
      <rect
        x="110"
        y="116"
        width="320"
        height="36"
        rx="6"
        fill="var(--surface)"
        stroke="var(--line)"
        strokeWidth="1.2"
      />
      <text
        x="270"
        y="139"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="12"
        fontFamily="JetBrains Mono, monospace"
      >
        Saída: Relatório CSV / JSON de divergências
      </text>
    </svg>
  );
}
