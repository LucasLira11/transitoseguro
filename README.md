# 🚦 Trânsito Seguro Nova Friburgo

Site de conscientização sobre segurança no trânsito em Nova Friburgo, desenvolvido pela **Turma de Jogos Cooperativos** do **CEFET/RJ - Campus Nova Friburgo**.

O site reúne dados reais da cidade, dicas para cada tipo de usuário da via, placas de trânsito interativas, as principais regras e multas do Código de Trânsito Brasileiro (CTB), o que fazer em caso de sinistro, a campanha Maio Amarelo, os nossos jogos e um quiz.

## ✨ O que tem no site

| Seção | Conteúdo |
|---|---|
| **Números** | Ocorrências de trânsito em Friburgo (2023–2025), dados mais recentes sobre motos, com fontes |
| **Dicas** | Abas para motoristas, motociclistas, pedestres e ciclistas |
| **Placas** | Os três tipos de placa e uma galeria de 15 placas em SVG que viram ao toque |
| **Leis e multas** | Natureza das infrações, pontos, suspensão da CNH e as infrações mais perigosas (CTB) |
| **Emergência** | Telefones (192, 193, 190, 191, 199) com ligação direta e o passo a passo em caso de sinistro |
| **Maio Amarelo** | A campanha e o tema de 2026 |
| **Jogos** | Acesso aos jogos em [jogos-cooperativos.vercel.app](https://jogos-cooperativos.vercel.app/) e citações sobre educação no trânsito |
| **Quiz** | 10 perguntas sorteadas de um banco de 22, com explicação a cada resposta |

## 🛠️ Tecnologias

- **[Astro 7](https://astro.build/)**: gera um site 100% estático e só envia JavaScript onde há interação
- **[Tailwind CSS 4](https://tailwindcss.com/)**: estilos com os tokens de cor e fonte do projeto
- **TypeScript** em modo estrito
- **[Lucide](https://lucide.dev/)**: ícones em SVG
- **Fontsource**: fontes Barlow Condensed e Inter servidas pelo próprio site, sem chamadas externas
- **[Vitest](https://vitest.dev/)**: testes da lógica do quiz e da integridade dos dados

Também tem animações com CSS *scroll-driven* (com alternativa para navegadores sem suporte), respeito a `prefers-reduced-motion`, abas e menu acessíveis por teclado, imagens otimizadas em AVIF/WebP, sitemap e Open Graph.

## 🚀 Rodando localmente

Requer **Node.js 22.22** ou superior.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm test` | Roda os testes (Vitest) |
| `npm run check` | Checagem de tipos do Astro/TypeScript |

## ✏️ Como atualizar o conteúdo

Todo o conteúdo fica em `src/data/`, separado do layout. Para mudar um número ou um texto, edite só esses arquivos:

| Arquivo | Conteúdo |
|---|---|
| `site.ts` | Nome, descrição, menu, links dos jogos e autores |
| `stats.ts` | Estatísticas de Nova Friburgo e fontes |
| `tips.ts` | Dicas por perfil |
| `signs.ts` | Tipos de placa e a galeria |
| `laws.ts` | Multas, pontos e infrações do CTB |
| `emergency.ts` | Telefones e passo a passo |
| `quiz.ts` | Banco de perguntas (cada uma com explicação) |
| `quotes.ts` | Citações |
| `references.ts` | Links úteis e referências do rodapé |

Exemplo, para atualizar o total de ocorrências de 2025 em `src/data/stats.ts`:

```ts
{ year: '2025', value: 643, note: 'jan–set' },
```

Depois de editar, rode `npm test` para garantir que o banco do quiz continua válido.

## 📁 Estrutura

```
src/
├── assets/        imagens (otimizadas no build)
├── components/    uma seção por arquivo + ui/ (Logo, Sign, Counter, SectionHeading)
├── data/          todo o conteúdo do site
├── layouts/       Base.astro (head, SEO, fontes)
├── lib/quiz.ts    lógica do quiz, sem DOM
├── pages/         index.astro e 404.astro
└── styles/        global.css (tokens do tema "asfalto noturno")
public/            favicon, imagem de compartilhamento, robots.txt
tests/             testes Vitest
```

## ☁️ Deploy na Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new). A Vercel detecta o Astro sozinha.
2. Mantenha o comando de build `npm run build` e a pasta de saída `dist`.
3. Se o domínio final não for `transitoseguro.vercel.app`, atualize `site` em `astro.config.mjs` e a linha `Sitemap` em `public/robots.txt`.

## 📊 Fontes dos dados

- Corpo de Bombeiros (6º GBM), via [TV Zoom](https://tvzoom.com.br/dia-nacional-do-transito-friburgo-em-alerta-acidentes-de-2025-ja-chegam-perto-do-total-de-todo-2024/), [Portal Multiplix](https://www.portalmultiplix.com/noticias/cotidiano/nova-friburgo-ja-registra-30-acidentes-de-transito-em-marco-e-quase-200-em-menos-de-tres-meses) e [A Voz da Serra](https://avozdaserra.com.br/noticias/friburgo-registra-quase-600-acidentes-com-motocicletas-em-um-ano)
- [Código de Trânsito Brasileiro — texto compilado (Planalto)](https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm), conferido em outubro de 2026
- [Maio Amarelo 2026 — Portal do Trânsito](https://www.portaldotransito.com.br/noticias/conscientizacao/maio-amarelo/maio-amarelo-2026-ja-tem-tema-definido-no-transito-enxergar-o-outro-e-salvar-vidas/)

O conteúdo sobre leis é educativo. Para casos concretos, consulte o texto oficial do CTB.

---

Desenvolvido pela Turma de Jogos Cooperativos do CEFET/RJ: **[Lucas Lira](https://lucaslira11.github.io/)** e **[Gregory Queiroz](https://github.com/GregoryCardoso)**.
