import Car from '@lucide/astro/icons/car';
import Motorbike from '@lucide/astro/icons/motorbike';
import PersonStanding from '@lucide/astro/icons/person-standing';
import Bike from '@lucide/astro/icons/bike';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import PhoneOff from '@lucide/astro/icons/phone-off';
import MoveHorizontal from '@lucide/astro/icons/move-horizontal';
import ArrowUpRight from '@lucide/astro/icons/arrow-up-right';
import Wrench from '@lucide/astro/icons/wrench';
import MoonStar from '@lucide/astro/icons/moon-star';
import Ban from '@lucide/astro/icons/ban';
import HardHat from '@lucide/astro/icons/hard-hat';
import Eye from '@lucide/astro/icons/eye';
import Route from '@lucide/astro/icons/route';
import OctagonPause from '@lucide/astro/icons/octagon-pause';
import Footprints from '@lucide/astro/icons/footprints';
import Flashlight from '@lucide/astro/icons/flashlight';
import Lightbulb from '@lucide/astro/icons/lightbulb';
import Scale from '@lucide/astro/icons/scale';
import Hand from '@lucide/astro/icons/hand';

export const tipsIntro =
  'A segurança no trânsito é responsabilidade de todos. Motoristas, motociclistas, pedestres e ciclistas devem seguir as normas e adotar comportamentos seguros para proteger suas vidas e a dos demais usuários das vias.';

export const tipGroups = [
  {
    id: 'motoristas',
    label: 'Motoristas',
    icon: Car,
    items: [
      { icon: ShieldCheck, title: 'Direção Defensiva', text: 'Pratique a direção defensiva, antecipando situações de risco e agindo preventivamente para evitá-las. Mantenha-se sempre alerta ao seu redor.' },
      { icon: PhoneOff, title: 'Não Use o Celular', text: 'Evite o uso de celular ao dirigir. A distração causada pelo aparelho aumenta drasticamente o risco de acidentes graves.' },
      { icon: MoveHorizontal, title: 'Mantenha Distância Segura', text: 'Mantenha uma distância segura do veículo da frente para ter tempo e espaço suficientes para reagir a imprevistos.' },
      { icon: ArrowUpRight, title: 'Use a Seta', text: 'Sinalize suas intenções com antecedência usando a seta. A sinalização não é opcional, é obrigatória e salva vidas.' },
      { icon: Wrench, title: 'Manutenção Preventiva', text: 'Realize a manutenção preventiva do veículo regularmente para garantir seu bom funcionamento e a segurança de todos.' },
      { icon: MoonStar, title: 'Evite Dirigir com Sono', text: 'Faça pausas regulares em viagens longas e evite dirigir cansado ou com sono. O cansaço compromete seus reflexos.' },
    ],
  },
  {
    id: 'motociclistas',
    label: 'Motociclistas',
    icon: Motorbike,
    items: [
      { icon: Ban, title: 'Evite Corredores', text: 'Evite utilizar corredores entre os veículos, pois essa prática aumenta significativamente o risco de colisões.' },
      { icon: HardHat, title: 'Equipamentos de Segurança', text: 'Use sempre capacete certificado e outros equipamentos de proteção como jaqueta, luvas e botas adequadas.' },
      { icon: Eye, title: 'Seja Visível', text: 'Use roupas claras ou refletivas e mantenha os faróis sempre acesos para aumentar sua visibilidade no trânsito.' },
      { icon: Route, title: 'Respeite as Faixas', text: 'Trafegue sempre nas faixas adequadas e respeite os limites de velocidade estabelecidos para cada via.' },
    ],
  },
  {
    id: 'pedestres',
    label: 'Pedestres',
    icon: PersonStanding,
    items: [
      { icon: OctagonPause, title: 'Pare, Olhe e Escute', text: 'Antes de atravessar a rua, pare, olhe para os dois lados e escute. Sua atenção pode salvar sua vida.' },
      { icon: Footprints, title: 'Use a Faixa de Pedestres', text: 'Atravesse sempre na faixa de pedestres. É o local mais seguro e onde os motoristas esperam encontrar pedestres.' },
      { icon: Eye, title: 'Atenção Redobrada', text: 'Esteja atento ao seu redor e evite distrações como o uso de celular ao caminhar pelas ruas.' },
      { icon: Flashlight, title: 'Visibilidade à Noite', text: 'À noite, use roupas claras ou refletivas para ser mais facilmente visto pelos motoristas.' },
    ],
  },
  {
    id: 'ciclistas',
    label: 'Ciclistas',
    icon: Bike,
    items: [
      { icon: HardHat, title: 'Use Capacete', text: 'O capacete é essencial para proteger sua cabeça em caso de quedas ou colisões. Use sempre.' },
      { icon: Lightbulb, title: 'Iluminação e Sinalização', text: 'Use luzes dianteiras e traseiras, além de refletores, especialmente à noite ou em condições de baixa visibilidade.' },
      { icon: Scale, title: 'Respeite as Leis', text: 'Siga as regras de trânsito como qualquer outro veículo. Respeite semáforos, placas e sinalizações.' },
      { icon: Hand, title: 'Sinalize suas Intenções', text: 'Use gestos com as mãos para indicar suas intenções de virar ou parar, facilitando a comunicação com outros usuários.' },
    ],
  },
] as const;
