/** Valores conferidos no texto compilado do CTB (Lei 9.503/1997) em 16/10/2026. */

export const lawsIntro =
  'Multas não são o objetivo — salvar vidas é. Mas conhecer as regras do Código de Trânsito Brasileiro (CTB) ajuda a entender por que certos comportamentos são tão perigosos.';

export const natures = [
  { name: 'Leve', points: 3, value: 'R$ 88,38' },
  { name: 'Média', points: 4, value: 'R$ 130,16' },
  { name: 'Grave', points: 5, value: 'R$ 195,23' },
  { name: 'Gravíssima', points: 7, value: 'R$ 293,47' },
] as const;

export const naturesNote =
  'Valores e pontos dos arts. 258 e 259. Algumas infrações gravíssimas têm multa multiplicada (×3, ×5, ×10). Pagando até o vencimento, a multa sai com 20% de desconto (art. 284).';

export const suspension = {
  title: 'Quando a CNH é suspensa por pontos',
  text: 'A soma de pontos em 12 meses leva à suspensão do direito de dirigir (art. 261):',
  steps: [
    { points: 20, condition: 'com 2 ou mais infrações gravíssimas' },
    { points: 30, condition: 'com 1 infração gravíssima' },
    { points: 40, condition: 'sem nenhuma infração gravíssima' },
  ],
} as const;

export type Severity = 'leve' | 'media' | 'grave' | 'gravissima';

export interface Infraction {
  title: string;
  article: string;
  severity: Severity;
  nature: string;
  fine: string;
  detail: string;
}

export const infractions: Infraction[] = [
  {
    title: 'Celular na mão ao dirigir',
    article: 'Art. 252, parágrafo único',
    severity: 'gravissima',
    nature: 'Gravíssima · 7 pontos',
    fine: 'R$ 293,47',
    detail: 'Segurar ou manusear o celular. Dirigir usando fone de ouvido ou celular sem segurar é infração média (art. 252, VI).',
  },
  {
    title: 'Sem cinto de segurança',
    article: 'Art. 167',
    severity: 'grave',
    nature: 'Grave · 5 pontos',
    fine: 'R$ 195,23',
    detail: 'Vale para o condutor e para todos os passageiros. O veículo fica retido até que o cinto seja colocado.',
  },
  {
    title: 'Criança sem cadeirinha',
    article: 'Arts. 64 e 168',
    severity: 'gravissima',
    nature: 'Gravíssima · 7 pontos',
    fine: 'R$ 293,47',
    detail: 'Crianças com menos de 10 anos que ainda não atingiram 1,45 m vão no banco traseiro, em dispositivo de retenção adequado à idade, peso e altura.',
  },
  {
    title: 'Excesso de velocidade',
    article: 'Art. 218',
    severity: 'gravissima',
    nature: 'Média a gravíssima',
    fine: 'R$ 130,16 a R$ 880,41',
    detail: 'Até 20% acima do limite: média. De 20% a 50%: grave. Mais de 50%: gravíssima com multa ×3 e suspensão do direito de dirigir.',
  },
  {
    title: 'Dirigir sob efeito de álcool',
    article: 'Arts. 165 e 306',
    severity: 'gravissima',
    nature: 'Gravíssima ×10',
    fine: 'R$ 2.934,70',
    detail: 'Suspensão do direito de dirigir por 12 meses (multa em dobro se reincidir em 12 meses). A partir de 0,3 mg/L no bafômetro, ou com sinais de alteração, é crime: detenção de 6 meses a 3 anos.',
  },
  {
    title: 'Recusar o bafômetro',
    article: 'Art. 165-A',
    severity: 'gravissima',
    nature: 'Gravíssima ×10',
    fine: 'R$ 2.934,70',
    detail: 'Recusar o teste, exame ou perícia tem a mesma penalidade de dirigir embriagado: multa e suspensão por 12 meses.',
  },
  {
    title: 'Avançar o sinal vermelho',
    article: 'Art. 208',
    severity: 'gravissima',
    nature: 'Gravíssima · 7 pontos',
    fine: 'R$ 293,47',
    detail: 'Vale também para quem não para na placa de parada obrigatória (PARE).',
  },
  {
    title: 'Não dar preferência ao pedestre',
    article: 'Art. 214',
    severity: 'gravissima',
    nature: 'Gravíssima · 7 pontos',
    fine: 'R$ 293,47',
    detail: 'Na faixa, para quem ainda não terminou a travessia (mesmo com sinal verde para o veículo) e para pessoas com deficiência, crianças, idosos e gestantes.',
  },
  {
    title: 'Moto sem capacete',
    article: 'Art. 244, I e II',
    severity: 'gravissima',
    nature: 'Gravíssima + suspensão',
    fine: 'R$ 293,47',
    detail: 'Vale para o condutor e para o passageiro. Além da multa, há suspensão do direito de dirigir e retenção da moto.',
  },
  {
    title: 'Vaga de idoso ou PcD sem credencial',
    article: 'Art. 181, XX',
    severity: 'gravissima',
    nature: 'Gravíssima · 7 pontos',
    fine: 'R$ 293,47',
    detail: 'Estacionar em vaga reservada sem a credencial que comprove a condição. O veículo pode ser removido.',
  },
];

export const lawsDisclaimer =
  'Conteúdo educativo, resumido do texto oficial do CTB. Para casos concretos, consulte a lei completa e o órgão de trânsito.';

export const ctbUrl = 'https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm';
