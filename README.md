# 🚦 Trânsito Seguro Nova Friburgo

Site de conscientização sobre segurança no trânsito em Nova Friburgo, desenvolvido pela **Turma de Jogos Cooperativos** do **CEFET/RJ - Campus Nova Friburgo**.

## 📋 Sobre o Projeto

Este site foi criado com o objetivo de informar e sensibilizar a população de Nova Friburgo sobre a importância de adotar comportamentos seguros no trânsito. O projeto apresenta dados estatísticos reais, dicas práticas de segurança, informações sobre sinalização viária e atividades interativas.

## 🎯 Funcionalidades

- **Hero Section Animado**: Seção inicial impactante com animações modernas
- **Estatísticas em Tempo Real**: Contadores animados com dados de acidentes em Nova Friburgo
- **Dicas de Segurança por Categoria**: Sistema de tabs para motoristas, motociclistas, pedestres e ciclistas
- **Galeria de Sinalização**: Informações completas sobre placas de trânsito
- **Quiz Interativo**: Teste seus conhecimentos sobre segurança viária
- **Design Responsivo**: Totalmente adaptável para dispositivos móveis
- **Animações Suaves**: Efeitos de scroll, parallax e transições modernas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis CSS, Grid, Flexbox e animações
- **JavaScript (Vanilla)**: Interatividade sem dependências externas
- **Design Responsivo**: Mobile-first approach

```

## 📊 Dados Estatísticos

Os dados apresentados no site são baseados em fontes confiáveis:

- **643 acidentes em 2025**: Número próximo ao total de 2024 inteiro
- **Quase 200 acidentes em 3 meses**: Demonstra a gravidade da situação
- **Média de 2 acidentes por dia**: Em períodos críticos
- **Principal causa**: Imprudência dos motoristas (segundo a prefeitura)
- **Tipos mais comuns**: Colisões e atropelamentos

## 🎨 Personalização

### Cores

As cores podem ser facilmente alteradas no arquivo `styles.css`, na seção de variáveis CSS:

```css
:root {
    --primary-color: #FFC107;      /* Amarelo principal */
    --primary-dark: #FFA000;       /* Amarelo escuro */
    --secondary-color: #212121;    /* Preto/cinza escuro */
    --accent-color: #FF5722;       /* Laranja de destaque */
}
```

### Conteúdo

Todo o conteúdo textual está no arquivo `index.html` e pode ser editado diretamente. As seções estão claramente identificadas com comentários HTML.

### Imagens

Para adicionar ou substituir imagens:

1. Coloque a nova imagem na pasta `images/`
2. Atualize o caminho no arquivo `index.html`
3. Adicione um texto alternativo descritivo (atributo `alt`)

## ✨ Recursos Interativos

### Quiz de Conhecimentos

O quiz possui 5 questões sobre segurança no trânsito com:
- Feedback imediato para cada resposta
- Pontuação final com mensagem personalizada
- Opção de refazer o quiz

### Sistema de Tabs

As dicas de segurança são organizadas por categorias:
- 🚗 Motoristas
- 🏍️ Motociclistas
- 🚶 Pedestres
- 🚴 Ciclistas

### Animações

- **Contadores animados**: Números das estatísticas sobem gradualmente
- **Scroll reveal**: Elementos aparecem suavemente ao rolar a página
- **Parallax**: Efeito de profundidade no hero section
- **Hover effects**: Cards e botões respondem ao passar do mouse
- **Smooth scroll**: Navegação suave entre seções

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Layout ajustado com grids adaptáveis
- **Mobile**: Menu hambúrguer e layout em coluna única

## ♿ Acessibilidade

- Textos alternativos em todas as imagens
- Contraste adequado entre texto e fundo
- Navegação por teclado
- Estrutura semântica HTML5
- Tamanhos de fonte legíveis

## 🔧 Manutenção

### Atualizando Estatísticas

Para atualizar os números de acidentes, edite o arquivo `index.html` e altere os valores em `data-target`:

```html
<div class="stat-card" data-animate="counter" data-target="643">
```

### Adicionando Novas Dicas

Para adicionar uma nova dica, copie a estrutura de um `.dica-card` existente e modifique o conteúdo:

```html
<div class="dica-card">
    <div class="dica-icon">🔧</div>
    <h3>Título da Dica</h3>
    <p>Descrição da dica aqui.</p>
</div>
```

DESENVOLVIDO POR: LUCAS LIRA
