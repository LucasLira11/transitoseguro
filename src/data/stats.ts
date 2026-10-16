import Car from '@lucide/astro/icons/car';
import TriangleAlert from '@lucide/astro/icons/triangle-alert';
import Timer from '@lucide/astro/icons/timer';

/** Números principais (cards com contador). */
export const headline = [
  {
    icon: Car,
    value: 643,
    label: 'Ocorrências em 2025',
    detail: 'De janeiro a setembro — perto do total de 2024 inteiro (767).',
  },
  {
    icon: TriangleAlert,
    value: 196,
    label: 'No 1º trimestre de 2025',
    detail: 'Quase 200 ocorrências em menos de três meses (jan–mar).',
  },
  {
    icon: Timer,
    value: 2,
    prefix: '≈',
    label: 'Ocorrências por dia',
    detail: 'Média diária em 2025. Em fevereiro, passou de 3 por dia.',
  },
] as const;

export const cause = {
  label: 'Principal causa',
  value: 'Imprudência',
  detail: 'Atribuída pela prefeitura como causa principal.',
} as const;

/** Total anual de ocorrências registradas pelo Corpo de Bombeiros. */
export const yearly = [
  { year: '2023', value: 748 },
  { year: '2024', value: 767 },
  { year: '2025', value: 643, note: 'jan–set' },
] as const;

export const commonTypes = {
  title: 'Tipos de acidentes mais comuns',
  text: 'Colisões e atropelamentos lideram os casos registrados em Nova Friburgo. A atenção e o respeito às normas de trânsito são fundamentais para reverter esse cenário.',
} as const;

/** Levantamento mais recente (12 meses). */
export const recent = {
  period: 'Agosto de 2025 a julho de 2026',
  source: 'Corpo de Bombeiros (6º GBM), via A Voz da Serra — 14/08/2026',
  items: [
    { value: 324, suffix: '', label: 'colisões entre moto e carro' },
    { value: 164, suffix: '', label: 'quedas de moto' },
    { value: 30, suffix: '%', label: 'das ocorrências na Av. Gov. Roberto Silveira (Duas Pedras – Conselheiro Paulino)' },
  ],
  fleet: 'Friburgo tem cerca de 146 mil veículos — 26 mil deles motos — para aproximadamente 203 mil habitantes (Detran-RJ, jun/2026).',
} as const;

export const statsSources = [
  {
    label: 'TV Zoom — Dia Nacional do Trânsito: Friburgo em alerta (2025)',
    url: 'https://tvzoom.com.br/dia-nacional-do-transito-friburgo-em-alerta-acidentes-de-2025-ja-chegam-perto-do-total-de-todo-2024/',
  },
  {
    label: 'Portal Multiplix — quase 200 acidentes em menos de três meses (18/03/2025)',
    url: 'https://www.portalmultiplix.com/noticias/cotidiano/nova-friburgo-ja-registra-30-acidentes-de-transito-em-marco-e-quase-200-em-menos-de-tres-meses',
  },
  {
    label: 'A Voz da Serra — quase 600 acidentes com motocicletas em um ano (14/08/2026)',
    url: 'https://avozdaserra.com.br/noticias/friburgo-registra-quase-600-acidentes-com-motocicletas-em-um-ano',
  },
] as const;
