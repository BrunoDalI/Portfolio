# Portfólio — Bruno Dall

Portfólio pessoal de **Bruno Dall Stella Cardoso**, desenvolvedor mobile (Flutter) formado em Ciência da Computação.

Site estático feito com HTML, CSS e JavaScript puro, com:

- 🌗 Modo claro/escuro (respeita o tema do sistema e salva a preferência)
- 🇧🇷 🇺🇸 Tradução PT/EN (detecta o idioma do navegador e salva a escolha)
- 📱 Layout responsivo
- 🗂️ Projetos reais do GitHub com capas próprias

## Principais projetos

| Projeto | Stack | Links |
| --- | --- | --- |
| Flexa | Flutter, Firebase, BLoC, SQLite | Código privado |
| Orçamentos Online | Flutter, Clean Architecture, BLoC, PDF | Código privado |
| StellCore Software | React, TypeScript, Tailwind, shadcn/ui | Código privado · [LinkedIn](https://www.linkedin.com/company/stellcore-software/about/) |
| Estofaria Cardoso | Flutter Web, BLoC, go_router | Código privado |
| Unique Combinations | HTML, CSS, Bootstrap | [Repositório](https://github.com/GMCfromhell/unique-combinations-webpage) · [Site](https://gmcfromhell.github.io/unique-combinations-webpage/) |
| Stock Regulator | App Android + landing page (HTML, CSS, Bootstrap) | [Google Play](https://play.google.com/store/apps/details?id=com.stock_regulator) · [Repositório](https://github.com/bruno-dall/stock-regulator-webpage) · [Site](https://bruno-dall.github.io/stock-regulator-webpage/) |

## Outros projetos

| Projeto | Stack | Repositório |
| --- | --- | --- |
| BRL Exchange Rate App | Flutter, Clean Architecture | [Specs](https://github.com/bruno-dall/Specs) |
| BrasilCripto | Flutter, BLoC, Dio, SQLite | [brasil_cripto](https://github.com/bruno-dall/brasil_cripto) |
| Classificador de Cômodos com CNN (TCC) | Python, TensorFlow/Keras | [IA_CNN](https://github.com/bruno-dall/IA_CNN) |
| Kanban Board | React | [kanban-with-react](https://github.com/bruno-dall/kanban-with-react) |
| Snake Game | Python, Pygame | [Processamento-Digital-de-imagem](https://github.com/bruno-dall/Processamento-Digital-de-imagem) |

## Estrutura

```
├── index.html
├── css/style.css
├── js/script.js              # menu, scroll spy, tema, idioma e animações
├── js/certificates-data.js   # lista de certificados (arquivos do Google Drive)
├── js/certificates.js        # filtros e lista da seção de certificados
└── images/
    ├── projects/             # capas SVG dos projetos
    ├── flags/                # bandeiras do seletor de idioma
    ├── home.png
    └── about.png
```

## Certificados

Os certificados ficam na pasta pública do Google Drive **Certificados**. Para adicionar um novo,
suba o arquivo no Drive e inclua uma linha em `js/certificates-data.js` com o título, a plataforma (`provider`),
a categoria (`flutter`, `ios`, `react-native`, `java`, `web`, `design`, `tools`, `data`, `agile`, `soft` ou `other`),
`degree: true` se for uma formação completa e o `id` do arquivo (o trecho entre `/d/` e `/view` do link do Drive).

## Rodando localmente

Não há build. Basta servir a pasta:

```bash
python3 -m http.server 8080
```

E abrir <http://localhost:8080>.

## Publicando alterações

O GitHub Pages deixa o CSS e o JS em cache no navegador. Ao alterar `css/style.css` ou `js/script.js`, atualize o `?v=` nas tags `<link>` e `<script>` do `index.html` (ex.: `?v=20261008` → data do dia) para que os visitantes recebam a versão nova.

## Adicionando um projeto

1. Crie a capa em `images/projects/` (640×426).
2. Copie um `.portfolio-box` da seção `#featured` (principais) ou `#other-projects` (outros) em `index.html` e ajuste título, descrição e links.
   - Repositório privado: use o selo `.portfolio-private` no lugar do botão "Code".
   - Site no ar: adicione o botão "Live site" e o selo `.portfolio-badge`.
3. Adicione a tradução em português no objeto `translations.pt` de `js/script.js`, usando a mesma chave do `data-i18n`.
