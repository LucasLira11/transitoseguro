export const site = {
  name: 'Trânsito Seguro',
  fullName: 'Trânsito Seguro Nova Friburgo',
  title: 'Conscientização no Trânsito — Nova Friburgo | CEFET/RJ',
  tagline: 'Juntos por um trânsito mais consciente em Nova Friburgo',
  description:
    'Site de conscientização sobre segurança no trânsito em Nova Friburgo, desenvolvido pela turma de Jogos Cooperativos do CEFET/RJ. Dados da cidade, dicas, placas, leis, o que fazer em caso de sinistro e quiz.',
  keywords: 'trânsito, segurança viária, Nova Friburgo, CEFET/RJ, conscientização, Maio Amarelo, CTB, placas de trânsito',
  author: 'Turma de Jogos Cooperativos - CEFET/RJ Nova Friburgo',
  gamesUrl: 'https://jogos-cooperativos.vercel.app/',
  repoUrl: 'https://github.com/LucasLira11/transitoseguro',
  authors: [
    { name: 'Lucas Lira', url: 'https://lucaslira11.github.io/' },
    { name: 'Gregory Queiroz', url: 'https://github.com/GregoryCardoso' },
  ],
} as const;

export const nav = [
  { href: '#numeros', label: 'Números' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#placas', label: 'Placas' },
  { href: '#leis', label: 'Leis' },
  { href: '#emergencia', label: 'Emergência' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#sobre', label: 'Sobre' },
] as const;
