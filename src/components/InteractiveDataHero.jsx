import React, { useState } from 'react';
import { Database, Filter, RefreshCw, CheckCircle2, TrendingUp, BarChart2, ShieldCheck, Cpu, Code2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveDataHero() {
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'sql'
  const [selectedMunicipality, setSelectedMunicipality] = useState('todos');
  const [isProcessingETL, setIsProcessingETL] = useState(false);
  const [etlStep, setEtlStep] = useState(0);
  const [showLog, setShowLog] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const realSqlScript = `-- Script de Auditoria TCM-GO (COLARE & DW)
-- Autor: Abraão Cezar Inácio
SELECT 
    nome_pessoa_fisica AS NomeCompleto,
    pad2029.nomeDoCargoRegistrado AS CargoRegistrado,
    '"' + CAST(cadastro.numeroCPF AS VARCHAR(11)) + '"' AS CPF,
    CAST(pad2029.numeroProcessoAdmissao AS VARCHAR) AS NumeroProcesso,
    CAST(pad2029.numeroAcordaoTCM AS VARCHAR) AS NumeroAcordao
FROM colare.dbo.tb_envios_prestacao_contas AS pc WITH (NOLOCK)
    -- Leitura não bloqueante em bases de alta concorrência
    INNER JOIN [COLARE_ETL].[etl].[tb_atosdepessoal_pessoalAdmissao] pa 
        ON pa._idColare = pc.id
    INNER JOIN [COLARE_ETL].[etl].[tb_atosdepessoal_pessoalAdmissao_dadosDaAdmissao_admissaoAte2019] pad2029 
        ON pa._idColare = pad2029._idColare
    INNER JOIN [colare_etl].[etl].[tb_atosdepessoal_pessoalCadastro] cadastro WITH (NOLOCK) 
        ON cadastro.[_idColare] = pa.idPessoalCadastro
    LEFT JOIN integrarfb.dbo.tb_pessoa_fisica servidor WITH (NOLOCK) 
        ON servidor.id = (SELECT MAX(id) FROM integrarfb.dbo.tb_pessoa_fisica WHERE cpf = cadastro.numerocpf)
WHERE YEAR(pa.dataPosseAdmissao) < 2020
ORDER BY NomeCompleto ASC;`;

  const dataSets = {
    todos: {
      name: "Todos os 246 Municípios (Goiás)",
      totalBudget: "R$ 142.8M",
      complianceRate: "96.4%",
      cleanedRows: "1.428.910",
      nerAccuracy: "98.7% F1",
      categories: [
        { name: "Saneamento Básico", value: 85, amount: "R$ 54.2M", color: "bg-emerald-500" },
        { name: "Resíduos Sólidos", value: 72, amount: "R$ 41.0M", color: "bg-teal-500" },
        { name: "Preservação Hídrica", value: 64, amount: "R$ 28.6M", color: "bg-cyan-500" },
        { name: "Educação Ambiental", value: 48, amount: "R$ 19.0M", color: "bg-sky-500" },
      ]
    },
    goiania: {
      name: "Goiânia (Capital)",
      totalBudget: "R$ 48.6M",
      complianceRate: "99.1%",
      cleanedRows: "412.300",
      nerAccuracy: "99.4% F1",
      categories: [
        { name: "Saneamento Básico", value: 92, amount: "R$ 21.2M", color: "bg-emerald-500" },
        { name: "Resíduos Sólidos", value: 88, amount: "R$ 15.4M", color: "bg-teal-500" },
        { name: "Preservação Hídrica", value: 70, amount: "R$ 7.5M", color: "bg-cyan-500" },
        { name: "Educação Ambiental", value: 55, amount: "R$ 4.5M", color: "bg-sky-500" },
      ]
    },
    anapolis: {
      name: "Anápolis (Polo Industrial)",
      totalBudget: "R$ 19.4M",
      complianceRate: "97.5%",
      cleanedRows: "168.900",
      nerAccuracy: "98.1% F1",
      categories: [
        { name: "Saneamento Básico", value: 80, amount: "R$ 8.1M", color: "bg-emerald-500" },
        { name: "Resíduos Sólidos", value: 76, amount: "R$ 5.9M", color: "bg-teal-500" },
        { name: "Preservação Hídrica", value: 65, amount: "R$ 3.4M", color: "bg-cyan-500" },
        { name: "Educação Ambiental", value: 42, amount: "R$ 2.0M", color: "bg-sky-500" },
      ]
    },
    rioverde: {
      name: "Rio Verde (Agronegócio)",
      totalBudget: "R$ 16.2M",
      complianceRate: "98.2%",
      cleanedRows: "142.100",
      nerAccuracy: "98.9% F1",
      categories: [
        { name: "Saneamento Básico", value: 84, amount: "R$ 6.8M", color: "bg-emerald-500" },
        { name: "Resíduos Sólidos", value: 71, amount: "R$ 4.2M", color: "bg-teal-500" },
        { name: "Preservação Hídrica", value: 78, amount: "R$ 3.7M", color: "bg-cyan-500" },
        { name: "Educação Ambiental", value: 39, amount: "R$ 1.5M", color: "bg-sky-500" },
      ]
    }
  };

  const current = dataSets[selectedMunicipality] || dataSets.todos;

  const runETLSimulation = () => {
    setIsProcessingETL(true);
    setShowLog(true);
    setEtlStep(1);

    setTimeout(() => {
      setEtlStep(2);
      setTimeout(() => {
        setEtlStep(3);
        setTimeout(() => {
          setEtlStep(4);
          setIsProcessingETL(false);
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 }
            });
          } catch (e) {}
        }, 600);
      }, 600);
    }, 600);
  };

  const copySql = () => {
    navigator.clipboard.writeText(realSqlScript);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
      
      {/* Header do Sandbox */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 gap-2">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
          <span className="font-mono text-xs text-slate-300 font-medium flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5 text-emerald-400" />
            TCM-GO Indicadores & Auditoria SQL
          </span>
        </div>

        {/* Abas: Dashboard vs Script SQL Real */}
        <div className="flex items-center space-x-1 rounded-lg bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`px-3 py-1 rounded transition-all ${
              activeView === 'dashboard'
                ? 'bg-emerald-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dashboard BI
          </button>
          <button
            onClick={() => setActiveView('sql')}
            className={`px-3 py-1 rounded transition-all flex items-center gap-1 ${
              activeView === 'sql'
                ? 'bg-emerald-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="h-3 w-3" />
            <span>Auditoria.sql</span>
          </button>
        </div>
      </div>

      {activeView === 'dashboard' ? (
        <>
          {/* Filtro de Município */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 text-xs">
            <span className="text-slate-400">Visualização de Indicadores:</span>
            <div className="flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5 text-emerald-400" />
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
              >
                <option value="todos">Goiás (246 Municípios)</option>
                <option value="goiania">Goiânia (Capital)</option>
                <option value="anapolis">Anápolis</option>
                <option value="rioverde">Rio Verde</option>
              </select>
            </div>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950/40 border-b border-slate-800/80">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Orçamento Auditado</span>
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div className="mt-1 text-lg font-bold text-white tracking-tight">{current.totalBudget}</div>
              <div className="text-[10px] text-emerald-400 font-mono">Consolidado TCM-GO</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Conformidade Fiscal</span>
                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
              </div>
              <div className="mt-1 text-lg font-bold text-emerald-300 tracking-tight">{current.complianceRate}</div>
              <div className="text-[10px] text-slate-400 font-mono">Regras contábeis válidas</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Registros no ETL</span>
                <Database className="h-3.5 w-3.5 text-cyan-400" />
              </div>
              <div className="mt-1 text-lg font-bold text-cyan-200 tracking-tight">{current.cleanedRows}</div>
              <div className="text-[10px] text-slate-400 font-mono">Linhas higienizadas</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Validação API NER</span>
                <Cpu className="h-3.5 w-3.5 text-amber-400" />
              </div>
              <div className="mt-1 text-lg font-bold text-amber-300 tracking-tight">{current.nerAccuracy}</div>
              <div className="text-[10px] text-amber-400 font-mono">Reconciliação JSON x SQL</div>
            </div>
          </div>

          {/* Gráficos de Barras com Animação */}
          <div className="p-4 bg-slate-900/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <BarChart2 className="h-3.5 w-3.5 text-emerald-400" />
                Investimento por Eixo Temático ({current.name})
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Valores agregados</span>
            </div>

            <div className="space-y-3">
              {current.categories.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span className="font-medium">{cat.name}</span>
                    <span className="font-mono text-emerald-400 font-semibold">{cat.amount}</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full ${cat.color} transition-all duration-700 ease-out rounded-full shadow-sm`}
                      style={{ width: `${cat.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ETL Pipeline Execution Bar */}
          <div className="border-t border-slate-800 bg-slate-950/80 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono">Pipeline Status: Pronto</span>
                <span className="text-slate-600">•</span>
                <span>Python + Pandas + SQL Server</span>
              </div>

              <button
                onClick={runETLSimulation}
                disabled={isProcessingETL}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isProcessingETL ? 'animate-spin' : ''}`} />
                <span>{isProcessingETL ? 'Executando Pipeline ETL...' : 'Executar Pipeline ETL'}</span>
              </button>
            </div>

            {/* Terminal ETL Log */}
            {showLog && (
              <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-300 space-y-1">
                <div className={`flex items-center gap-2 ${etlStep >= 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {etlStep >= 1 ? <CheckCircle2 className="h-3 w-3" /> : <span className="h-3 w-3 inline-block">•</span>}
                  <span>[1/4] Extraindo bases de dados municipais (TCM-GO)...</span>
                </div>
                <div className={`flex items-center gap-2 ${etlStep >= 2 ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {etlStep >= 2 ? <CheckCircle2 className="h-3 w-3" /> : <span className="h-3 w-3 inline-block">•</span>}
                  <span>[2/4] Higienizando inconsistências com Pandas... ({current.cleanedRows} registros)</span>
                </div>
                <div className={`flex items-center gap-2 ${etlStep >= 3 ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {etlStep >= 3 ? <CheckCircle2 className="h-3 w-3" /> : <span className="h-3 w-3 inline-block">•</span>}
                  <span>[3/4] Agregando métricas por município para alimentação dos gráficos Power BI...</span>
                </div>
                <div className={`flex items-center gap-2 ${etlStep >= 4 ? 'text-teal-300 font-bold' : 'text-slate-500'}`}>
                  {etlStep >= 4 ? <CheckCircle2 className="h-3 w-3" /> : <span className="h-3 w-3 inline-block">•</span>}
                  <span>[4/4] Ingestão concluída com sucesso! (Latência: 0.28s)</span>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        /* Visualização do Script SQL Real */
        <div className="p-4 bg-slate-950/70 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span className="text-emerald-400 font-semibold">COLARE_ETL • Auditoria de Atos de Pessoal</span>
            <button
              onClick={copySql}
              className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded transition-colors"
            >
              {copiedSql ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedSql ? 'Copiado!' : 'Copiar Script'}</span>
            </button>
          </div>
          <pre className="text-slate-300 overflow-x-auto max-h-[360px] leading-relaxed p-2 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <code>{realSqlScript}</code>
          </pre>
          <div className="mt-3 text-[11px] text-slate-400 leading-relaxed bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <strong className="text-emerald-300">Destaque de Engenharia SQL:</strong> Utilização da cláusula <code className="text-amber-300 bg-slate-800 px-1 rounded">WITH (NOLOCK)</code> para leitura assíncrona não bloqueante em bancos de alta concorrência do tribunal, junções relacionais entre múltiplos esquemas de banco e subqueries agregadas.
          </div>
        </div>
      )}
    </div>
  );
}
