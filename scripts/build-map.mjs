/**
 * scripts/build-map.mjs
 * Baixa a malha de municípios de GO (UF 52) da API do IBGE,
 * simplifica a geometria (alvo <150 KB) e grava src/assets/goias.svg.json.
 *
 * Execução: node scripts/build-map.mjs
 */

import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { presimplify, simplify } from 'topojson-simplify';
import { writeFileSync, mkdirSync, statSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dir, '../src/assets/goias.svg.json');

const IBGE_MALHAS =
  'https://servicodados.ibge.gov.br/api/v2/malhas/52/?resolucao=5&formato=application/json';
const IBGE_NOMES =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/52/municipios?orderBy=nome';

async function main() {
  console.log('⬇ Baixando malha oficial de Goiás (UF 52)...');
  let topo = await fetch(IBGE_MALHAS).then((r) => r.json());

  console.log('⬇ Baixando nomes oficiais dos municípios...');
  const nomesArr = await fetch(IBGE_NOMES).then((r) => r.json());
  const nomesMap = Object.fromEntries(nomesArr.map((m) => [String(m.id), m.nome]));

  // Simplificar geometria para manter tamanho leve (<150 KB)
  topo = presimplify(topo);
  topo = simplify(topo, 0.005);

  const objKey = Object.keys(topo.objects)[0];
  const geojson = feature(topo, topo.objects[objKey]);

  const width = 480;
  const height = 540;
  const projection = geoMercator().fitSize([width, height], geojson);
  const pathGen = geoPath(projection);

  const paths = geojson.features
    .map((f) => {
      const id = String(f.properties?.codarea ?? f.id ?? '');
      const name = nomesMap[id] ?? f.properties?.nome ?? id;
      const d = pathGen(f) ?? '';
      return { id, name, d };
    })
    .filter((p) => p.d && p.d.length > 4);

  // Formatar coordenadas com 1 decimal para precisão ótica e arquivo ultra leve
  const municipios = paths.map((p) => ({
    ...p,
    d: p.d.replace(/(\d+\.\d{2,})/g, (n) => parseFloat(n).toFixed(1)),
  }));

  const payload = {
    width,
    height,
    total: municipios.length,
    municipios,
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(payload), 'utf8');

  const finalKB = (statSync(OUTPUT).size / 1024).toFixed(1);
  console.log(`✅ ${municipios.length} municípios gravados em src/assets/goias.svg.json (${finalKB} KB)`);
}

main().catch((err) => {
  console.error('❌ Erro gerando mapa:', err.message);
  process.exit(1);
});
