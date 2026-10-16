export type SignKind = 'regulamentacao' | 'advertencia' | 'indicacao';

export const signsIntro =
  'Conhecer e respeitar a sinalização de trânsito é fundamental para a segurança de todos. As placas, semáforos e marcações viárias orientam o comportamento dos usuários e ajudam a prevenir acidentes.';

export const signKinds: { kind: SignKind; title: string; shape: string; text: string }[] = [
  {
    kind: 'regulamentacao',
    title: 'Placas de Regulamentação',
    shape: 'Circulares, borda vermelha',
    text: 'As placas de regulamentação têm formato circular e indicam obrigações, restrições e proibições. Exemplos: pare, proibido estacionar, velocidade máxima permitida. O desrespeito a essas placas pode resultar em multas e pontos na carteira.',
  },
  {
    kind: 'advertencia',
    title: 'Placas de Advertência',
    shape: 'Losango amarelo',
    text: 'As placas de advertência têm formato quadrado na diagonal (losango) e alertam sobre condições potencialmente perigosas na via. Exemplos: curva acentuada, pista escorregadia, animais na pista. Fique atento a essas sinalizações.',
  },
  {
    kind: 'indicacao',
    title: 'Placas de Indicação',
    shape: 'Retangulares',
    text: 'As placas de indicação têm formato retangular e fornecem informações úteis aos usuários das vias. Exemplos: direção de cidades, serviços auxiliares, pontos turísticos. Facilitam a orientação e o planejamento da rota.',
  },
];

export interface SignInfo {
  /** Identificador usado pelo componente <Sign> para desenhar a placa. */
  id: string;
  /** Código oficial do Manual Brasileiro de Sinalização de Trânsito, quando houver. */
  code?: string;
  name: string;
  kind: SignKind;
  meaning: string;
}

export const signs: SignInfo[] = [
  { id: 'R-1', code: 'R-1', name: 'Parada obrigatória', kind: 'regulamentacao', meaning: 'Pare totalmente e só siga quando for seguro. É a exceção ao formato circular: um octógono.' },
  { id: 'R-2', code: 'R-2', name: 'Dê a preferência', kind: 'regulamentacao', meaning: 'Reduza e ceda a passagem aos veículos da via preferencial — pare, se for preciso. É um triângulo invertido.' },
  { id: 'R-6a', code: 'R-6a', name: 'Proibido estacionar', kind: 'regulamentacao', meaning: 'Não estacione no trecho. A parada breve para embarque e desembarque é permitida.' },
  { id: 'R-6c', code: 'R-6c', name: 'Proibido parar e estacionar', kind: 'regulamentacao', meaning: 'Nenhuma parada voluntária do veículo é permitida no trecho sinalizado.' },
  { id: 'R-7', code: 'R-7', name: 'Proibido ultrapassar', kind: 'regulamentacao', meaning: 'Não ultrapasse outros veículos enquanto a proibição estiver valendo.' },
  { id: 'R-19', code: 'R-19', name: 'Velocidade máxima permitida', kind: 'regulamentacao', meaning: 'Não passe da velocidade indicada (aqui, 40 km/h). Mais de 50% acima do limite é infração gravíssima.' },
  { id: 'R-28', code: 'R-28', name: 'Duplo sentido de circulação', kind: 'regulamentacao', meaning: 'A via tem tráfego nos dois sentidos. Atenção redobrada ao fluxo contrário.' },
  { id: 'A-1a', code: 'A-1a', name: 'Curva acentuada à esquerda', kind: 'advertencia', meaning: 'Reduza a velocidade antes de entrar na curva fechada à esquerda.' },
  { id: 'A-14', code: 'A-14', name: 'Semáforo à frente', kind: 'advertencia', meaning: 'Há um semáforo adiante. Prepare-se para parar.' },
  { id: 'A-18', code: 'A-18', name: 'Saliência ou lombada', kind: 'advertencia', meaning: 'Lombada à frente. Reduza a velocidade para não perder o controle.' },
  { id: 'A-28', code: 'A-28', name: 'Pista escorregadia', kind: 'advertencia', meaning: 'Risco de derrapagem. Reduza a velocidade e evite frear ou virar bruscamente.' },
  { id: 'A-32b', code: 'A-32b', name: 'Passagem sinalizada de pedestres', kind: 'advertencia', meaning: 'Faixa de pedestres adiante. Reduza e dê preferência a quem atravessa.' },
  { id: 'A-33b', code: 'A-33b', name: 'Passagem sinalizada de escolares', kind: 'advertencia', meaning: 'Área escolar. Atenção máxima a crianças atravessando.' },
  { id: 'hospital', name: 'Hospital', kind: 'indicacao', meaning: 'Placa de serviço auxiliar: indica um hospital ou pronto-socorro próximo.' },
  { id: 'destino', name: 'Orientação de destino', kind: 'indicacao', meaning: 'Indica a direção e a distância até cidades ou bairros, ajudando a planejar a rota.' },
];
