import Ambulance from '@lucide/astro/icons/ambulance';
import Flame from '@lucide/astro/icons/flame';
import Siren from '@lucide/astro/icons/siren';
import Route from '@lucide/astro/icons/route';
import CloudRain from '@lucide/astro/icons/cloud-rain';

export const emergencyIntro =
  'Saber o que fazer nos primeiros minutos depois de um sinistro de trânsito pode salvar uma vida — inclusive a sua. Guarde estes números e estes passos.';

export const contacts = [
  { number: '192', name: 'SAMU', when: 'Vítimas feridas e atendimento médico de urgência', icon: Ambulance, primary: true },
  { number: '193', name: 'Bombeiros', when: 'Vítimas presas nas ferragens, incêndio e resgate', icon: Flame, primary: true },
  { number: '190', name: 'Polícia Militar', when: 'Segurança do local e ocorrências nas vias urbanas', icon: Siren, primary: false },
  { number: '191', name: 'PRF', when: 'Sinistros em rodovias federais', icon: Route, primary: false },
  { number: '199', name: 'Defesa Civil', when: 'Deslizamentos, quedas de barreira e alagamentos na via', icon: CloudRain, primary: false },
] as const;

export const steps = [
  {
    title: 'Sinalize o local',
    text: 'Ligue o pisca-alerta e coloque o triângulo a pelo menos 30 metros do veículo — mais longe em curvas, lombadas e à noite — para avisar quem vem atrás.',
  },
  {
    title: 'Proteja-se primeiro',
    text: 'Saia do veículo pelo lado oposto ao fluxo e espere fora da pista, na calçada ou atrás do guard-rail. Um socorrista ferido não ajuda ninguém.',
  },
  {
    title: 'Peça socorro',
    text: 'Ligue 192 (SAMU) ou 193 (Bombeiros). Informe o endereço com pontos de referência, quantas vítimas há e como elas estão.',
  },
  {
    title: 'Não mova as vítimas',
    text: 'Só retire alguém do local se houver risco imediato, como fogo. Nunca tire o capacete de um motociclista ferido.',
  },
  {
    title: 'Acolha e acompanhe',
    text: 'Converse com a vítima, mantenha-a aquecida e calma. Não ofereça água, comida nem remédios.',
  },
  {
    title: 'Sem feridos? Libere a via',
    text: 'Fotografe a posição dos veículos e retire-os da pista quando for necessário para a segurança e a fluidez (art. 178 do CTB). Depois, registre o boletim de ocorrência.',
  },
] as const;

export const legalNotes = [
  {
    title: 'Omissão de socorro é infração e crime',
    text: 'O condutor envolvido que deixa de prestar ou providenciar socorro comete infração gravíssima, com multa ×5 (R$ 1.467,35) e suspensão do direito de dirigir (art. 176), além de crime com detenção de 6 meses a 1 ano (art. 304) — mesmo que outra pessoa socorra a vítima.',
  },
  {
    title: 'Ligar já é ajudar',
    text: 'Se você não sabe prestar primeiros socorros, acionar o socorro especializado e sinalizar o local já é a ajuda mais importante.',
  },
] as const;
