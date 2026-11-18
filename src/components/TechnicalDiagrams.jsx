import React from 'react';

export function NerPipelineDiagram() {
  return (
    <div className="w-full border border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] p-4 sm:p-6 overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="flex items-center justify-between text-xs font-mono text-[#444440] dark:text-[#A8A69E] mb-4 pb-2 border-b border-[#E5E3DD] dark:border-[#282826]">
          <span>DIAGRAMA DE FLUXO: AUDITORIA E RECONCILIAÇÃO NER x SQL</span>
          <span className="text-[#1F4E5F] dark:text-[#6EA3B4]">TCM-GO</span>
        </div>

        <svg viewBox="0 0 680 140" className="w-full h-auto text-[#1C1C1A] dark:text-[#EAE8E3]" fill="none">
          {/* Node 1: Documentos Municipais */}
          <rect x="10" y="30" width="120" height="80" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
          <text x="70" y="60" textAnchor="middle" className="text-[12px] font-sans font-medium fill-current">Extratos em PDF</text>
          <text x="70" y="80" textAnchor="middle" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Envios Municipais</text>

          {/* Arrow 1 */}
          <path d="M130 70 L170 70" stroke="#1F4E5F" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="170,70 164,66 164,74" fill="#1F4E5F" />

          {/* Node 2: API de NER */}
          <rect x="175" y="30" width="115" height="80" rx="2" stroke="#1F4E5F" strokeWidth="1.5" fill="#1F4E5F" fillOpacity="0.05" />
          <text x="232" y="60" textAnchor="middle" className="text-[12px] font-sans font-semibold fill-current">API de NER</text>
          <text x="232" y="80" textAnchor="middle" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">Extração de Entidades</text>

          {/* Arrow 2 */}
          <path d="M290 70 L330 70" stroke="#1F4E5F" strokeWidth="1.5" />
          <polygon points="330,70 324,66 324,74" fill="#1F4E5F" />

          {/* Node 3: Worker Python */}
          <rect x="335" y="20" width="140" height="100" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
          <text x="405" y="52" textAnchor="middle" className="text-[12px] font-sans font-semibold fill-current">Worker Concorrente</text>
          <text x="405" y="70" textAnchor="middle" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Python · ThreadPool</text>
          <text x="405" y="88" textAnchor="middle" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">Reconciliação JSON x SQL</text>

          {/* Arrow 3 (Two way to SQL) */}
          <path d="M475 70 L515 70" stroke="#1F4E5F" strokeWidth="1.5" />
          <polygon points="515,70 509,66 509,74" fill="#1F4E5F" />

          {/* Node 4: Bases SQL / Relatório */}
          <rect x="520" y="30" width="145" height="80" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
          <text x="592" y="58" textAnchor="middle" className="text-[12px] font-sans font-medium fill-current">Bases Orçamentárias</text>
          <text x="592" y="76" textAnchor="middle" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Consultas SQL com Nolock</text>
          <text x="592" y="94" textAnchor="middle" className="text-[10px] font-mono fill-current font-medium">Relatório de Divergências</text>
        </svg>
      </div>
    </div>
  );
}

export function TimeSeriesDiagram() {
  return (
    <div className="w-full border border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] p-4 sm:p-6 overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="flex items-center justify-between text-xs font-mono text-[#444440] dark:text-[#A8A69E] mb-4 pb-2 border-b border-[#E5E3DD] dark:border-[#282826]">
          <span>TELEMETRIA TEMPORAL: SINAL BRUTO vs. MÉDIA MÓVEL (9 QUADROS)</span>
          <span className="text-[#1F4E5F] dark:text-[#6EA3B4]">Latência: 0.22ms</span>
        </div>

        <svg viewBox="0 0 680 130" className="w-full h-auto text-[#1C1C1A] dark:text-[#EAE8E3]" fill="none">
          {/* Axis */}
          <line x1="40" y1="105" x2="650" y2="105" stroke="#E5E3DD" strokeWidth="1" />
          <line x1="40" y1="15" x2="40" y2="105" stroke="#E5E3DD" strokeWidth="1" />
          
          <text x="35" y="25" textAnchor="end" className="text-[9px] font-mono fill-[#444440] dark:fill-[#A8A69E]">1.0</text>
          <text x="35" y="65" textAnchor="end" className="text-[9px] font-mono fill-[#444440] dark:fill-[#A8A69E]">0.5</text>
          <text x="35" y="105" textAnchor="end" className="text-[9px] font-mono fill-[#444440] dark:fill-[#A8A69E]">0.0</text>
          <text x="650" y="120" textAnchor="end" className="text-[9px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Tempo (s) ➔</text>

          {/* Raw volatile line (dashed) */}
          <path
            d="M 40 85 Q 80 30, 120 75 T 200 40 T 280 80 T 360 30 T 440 60 T 520 25 T 600 70 T 650 45"
            stroke="#999790"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />

          {/* Smoothed moving average line (accent colored) */}
          <path
            d="M 40 80 C 100 55, 160 50, 220 52 C 300 55, 360 45, 420 48 C 500 50, 580 40, 650 48"
            stroke="#1F4E5F"
            strokeWidth="2.5"
          />

          {/* Legend */}
          <circle cx="480" cy="20" r="4" fill="#999790" />
          <text x="490" y="23" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Sinal biométrico bruto (volátil)</text>
          <line x1="475" y1="36" x2="485" y2="36" stroke="#1F4E5F" strokeWidth="2.5" />
          <text x="490" y="39" className="text-[10px] font-mono font-medium fill-[#1F4E5F] dark:fill-[#6EA3B4]">Série suavizada (filtro centrado)</text>
        </svg>
      </div>
    </div>
  );
}

export function YoloInspectionDiagram() {
  return (
    <div className="w-full border border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] p-4 sm:p-6 overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="flex items-center justify-between text-xs font-mono text-[#444440] dark:text-[#A8A69E] mb-4 pb-2 border-b border-[#E5E3DD] dark:border-[#282826]">
          <span>INSPEÇÃO VISUAL: DETECÇÃO DE PATOLOGIA E MÉTRICAS ESTRUTURAIS</span>
          <span className="text-[#1F4E5F] dark:text-[#6EA3B4]">mAP50-95: 86.7%</span>
        </div>

        <svg viewBox="0 0 680 130" className="w-full h-auto text-[#1C1C1A] dark:text-[#EAE8E3]" fill="none">
          {/* Coordinate grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect x="20" y="15" width="380" height="100" fill="url(#grid)" stroke="#E5E3DD" strokeWidth="1" />

          {/* Crack representation */}
          <path d="M 70 85 Q 120 70, 160 55 T 240 45 T 320 35" stroke="#1C1C1A" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Bounding box */}
          <rect x="60" y="25" width="270" height="70" stroke="#1F4E5F" strokeWidth="1.5" strokeDasharray="4 2" fill="#1F4E5F" fillOpacity="0.04" />
          
          {/* Label badge */}
          <rect x="60" y="12" width="130" height="16" fill="#1F4E5F" rx="2" />
          <text x="66" y="24" className="text-[10px] font-mono font-medium fill-white">fissura_concreto 0.94</text>

          {/* Measurement ruler */}
          <line x1="60" y1="102" x2="330" y2="102" stroke="#1F4E5F" strokeWidth="1" />
          <line x1="60" y1="99" x2="60" y2="105" stroke="#1F4E5F" strokeWidth="1" />
          <line x1="330" y1="99" x2="330" y2="105" stroke="#1F4E5F" strokeWidth="1" />
          <text x="195" y="113" textAnchor="middle" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">Extensão estimada: 142 mm</text>

          {/* Evaluation metrics panel on the right */}
          <rect x="420" y="15" width="240" height="100" stroke="#E5E3DD" strokeWidth="1" fill="currentColor" fillOpacity="0.02" rx="2" />
          <text x="435" y="38" className="text-[11px] font-sans font-semibold fill-current">Validação Estatística (YOLOv8)</text>
          <text x="435" y="58" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Precisão (Precision): <tspan className="font-semibold fill-[#1F4E5F] dark:fill-[#6EA3B4]">92.4%</tspan></text>
          <text x="435" y="76" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">Revocação (Recall): <tspan className="font-semibold fill-[#1F4E5F] dark:fill-[#6EA3B4]">89.1%</tspan></text>
          <text x="435" y="94" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">mAP50-95: <tspan className="font-semibold fill-[#1F4E5F] dark:fill-[#6EA3B4]">86.7%</tspan></text>
        </svg>
      </div>
    </div>
  );
}

export function RelationalSchemaDiagram() {
  return (
    <div className="w-full border border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] p-4 sm:p-6 overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="flex items-center justify-between text-xs font-mono text-[#444440] dark:text-[#A8A69E] mb-4 pb-2 border-b border-[#E5E3DD] dark:border-[#282826]">
          <span>MODELAGEM RELACIONAL NORMALIZADA (3FN): MEDICLIN</span>
          <span className="text-[#1F4E5F] dark:text-[#6EA3B4]">MySQL 8.0</span>
        </div>

        <svg viewBox="0 0 680 135" className="w-full h-auto text-[#1C1C1A] dark:text-[#EAE8E3]" fill="none">
          {/* Entity: PACIENTE */}
          <g>
            <rect x="10" y="20" width="135" height="95" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" rx="2" />
            <path d="M10 40 L145 40" stroke="#E5E3DD" strokeWidth="1" />
            <text x="20" y="34" className="text-[11px] font-sans font-bold fill-current">tb_paciente</text>
            <text x="20" y="55" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">PK id_paciente</text>
            <text x="20" y="70" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">nome_completo</text>
            <text x="20" y="85" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">cpf_hash</text>
            <text x="20" y="100" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">data_nascimento</text>
          </g>

          {/* Relation 1 */}
          <path d="M145 55 L210 55" stroke="#1F4E5F" strokeWidth="1.5" />
          <text x="155" y="48" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">1</text>
          <text x="195" y="48" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">N</text>

          {/* Entity: CONSULTA (Central) */}
          <g>
            <rect x="210" y="10" width="155" height="115" stroke="#1F4E5F" strokeWidth="1.5" fill="#1F4E5F" fillOpacity="0.04" rx="2" />
            <path d="M210 32 L365 32" stroke="#1F4E5F" strokeWidth="1" />
            <text x="220" y="26" className="text-[11px] font-sans font-bold fill-[#1F4E5F] dark:fill-[#6EA3B4]">tb_consulta [Fato]</text>
            <text x="220" y="48" className="text-[10px] font-mono fill-current font-semibold">PK id_consulta</text>
            <text x="220" y="63" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">FK id_paciente</text>
            <text x="220" y="78" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">FK id_medico</text>
            <text x="220" y="93" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">data_agendamento</text>
            <text x="220" y="108" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">status_comparecimento</text>
          </g>

          {/* Relation 2 */}
          <path d="M365 55 L430 55" stroke="#1F4E5F" strokeWidth="1.5" />
          <text x="375" y="48" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">N</text>
          <text x="415" y="48" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">1</text>

          {/* Entity: MEDICO */}
          <g>
            <rect x="430" y="20" width="125" height="95" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" rx="2" />
            <path d="M430 40 L555 40" stroke="#E5E3DD" strokeWidth="1" />
            <text x="440" y="34" className="text-[11px] font-sans font-bold fill-current">tb_medico</text>
            <text x="440" y="55" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">PK id_medico</text>
            <text x="440" y="70" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">nome_medico</text>
            <text x="440" y="85" className="text-[10px] font-mono fill-[#444440] dark:fill-[#A8A69E]">crm</text>
            <text x="440" y="100" className="text-[10px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">FK id_especialidade</text>
          </g>

          {/* Relation 3 */}
          <path d="M555 55 L585 55" stroke="#1F4E5F" strokeWidth="1.5" />

          {/* Entity: ESPECIALIDADE */}
          <g>
            <rect x="585" y="30" width="85" height="70" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" rx="2" />
            <path d="M585 50 L670 50" stroke="#E5E3DD" strokeWidth="1" />
            <text x="592" y="44" className="text-[10px] font-sans font-bold fill-current">tb_especialidade</text>
            <text x="592" y="65" className="text-[9px] font-mono fill-[#1F4E5F] dark:fill-[#6EA3B4]">PK id_esp</text>
            <text x="592" y="80" className="text-[9px] font-mono fill-[#444440] dark:fill-[#A8A69E]">nome</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
