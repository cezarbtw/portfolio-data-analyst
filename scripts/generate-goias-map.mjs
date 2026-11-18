/**
 * scripts/generate-goias-map.mjs
 * Busca malha de municípios de Goiás do IBGE, simplifica paths
 * e gera src/data/goiasMapPaths.js (sem d3 no bundle do cliente).
 *
 * Uso: node scripts/generate-goias-map.mjs
 */

import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { presimplify, simplify } from 'topojson-simplify';
import { writeFileSync, mkdirSync, statSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dir, '../src/data/goiasMapPaths.js');

const IBGE_MALHAS =
  'https://servicodados.ibge.gov.br/api/v2/malhas/52/?resolucao=5&formato=application/json';
const IBGE_NOMES =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/52/municipios?orderBy=nome';

async function main() {
  console.log('⬇  Baixando malha de Goiás (246 municípios)…');
  let topo = await fetch(IBGE_MALHAS).then(r => r.json());

  console.log('⬇  Baixando nomes dos municípios…');
  const nomesArr = await fetch(IBGE_NOMES).then(r => r.json());
  const nomesMap = Object.fromEntries(nomesArr.map(m => [String(m.id), m.nome]));

  // Simplificar topojson para reduzir tamanho
  topo = presimplify(topo);
  topo = simplify(topo, 0.005);

  const objKey  = Object.keys(topo.objects)[0];
  const geojson = feature(topo, topo.objects[objKey]);

  const W = 480, H = 540;
  const projection = geoMercator().fitSize([W, H], geojson);
  const pathGen    = geoPath(projection);

  const paths = geojson.features
    .map((f) => {
      const id   = String(f.properties?.codarea ?? f.id ?? '');
      const name = nomesMap[id] ?? f.properties?.nome ?? id;
      const d    = pathGen(f) ?? '';
      return { id, name, d };
    })
    .filter(p => p.d && p.d.length > 4);

  // Comprimir: coordenadas com 1 decimal (suficiente para display ~480px)
  const pathsCompact = paths.map(p => ({
    ...p,
    d: p.d.replace(/(\d+\.\d{2,})/g, n => parseFloat(n).toFixed(1))
  }));

  const js = `// AUTO-GERADO — NÃO EDITAR
// Fonte: IBGE API de Malhas v2 · UF 52 Goiás · resolução 5 (municípios)
// Simplificado com topojson-simplify (fator 0.005) · ${new Date().toISOString().slice(0,10)}
// viewBox: 0 0 ${W} ${H}

export const MAPA_WIDTH  = ${W};
export const MAPA_HEIGHT = ${H};
export const municipios  = ${JSON.stringify(pathsCompact)};
`;

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, js, 'utf8');
  const finalKB = statSync(OUTPUT).size / 1024;
  console.log(`✅ ${pathsCompact.length} municípios → .${OUTPUT.slice(process.cwd().length)} (${finalKB.toFixed(1)} KB)`);
}

main().catch((e) => { console.error('❌', e.message); process.exit(1); });
