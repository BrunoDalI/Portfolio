# Portfólio — Bruno Dall

Portfólio pessoal de **Bruno Dall Stella Cardoso**, desenvolvedor mobile (Flutter) formado em Ciência da Computação.

Site estático feito com HTML, CSS e JavaScript puro, com:

- 🌗 Modo claro/escuro (respeita o tema do sistema e salva a preferência)
- 🇧🇷 🇺🇸 Tradução PT/EN (detecta o idioma do navegador e salva a escolha)
- 📱 Layout responsivo
- 🗂️ Projetos reais do GitHub com capas próprias

## Projetos em destaque

| Projeto | Stack | Repositório |
| --- | --- | --- |
| BRL Exchange Rate App | Flutter, Clean Architecture | [Specs](https://github.com/BrunoDalI/Specs) |
| BrasilCripto | Flutter, BLoC, Dio, SQLite | [brasil_cripto](https://github.com/BrunoDalI/brasil_cripto) |
| Classificador de Cômodos com CNN (TCC) | Python, TensorFlow/Keras | [IA_CNN](https://github.com/BrunoDalI/IA_CNN) |
| Stock Regulator | HTML, CSS, Bootstrap | [stock-regulator-webpage](https://github.com/BrunoDalI/stock-regulator-webpage) |
| Kanban Board | React | [kanban-with-react](https://github.com/BrunoDalI/kanban-with-react) |
| Snake Game | Python, Pygame | [Processamento-Digital-de-imagem](https://github.com/BrunoDalI/Processamento-Digital-de-imagem) |

## Estrutura

```
├── index.html
├── css/style.css
├── js/script.js          # menu, scroll spy, tema, idioma e animações
└── images/
    ├── projects/         # capas SVG dos projetos
    ├── flags/            # bandeiras do seletor de idioma
    ├── home.png
    └── about.png
```

## Rodando localmente

Não há build. Basta servir a pasta:

```bash
python3 -m http.server 8080
```

E abrir <http://localhost:8080>.

## Adicionando um projeto

1. Crie a capa em `images/projects/` (640×426).
2. Copie um `.portfolio-box` em `index.html` e ajuste título, descrição e links.
3. Adicione a tradução em português no objeto `translations.pt` de `js/script.js`, usando a mesma chave do `data-i18n`.
