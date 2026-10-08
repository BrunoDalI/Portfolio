/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuIcon.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuIcon.click();
    }
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let link = document.querySelector('header nav a[href="#' + id + '"]');

        if (link && top >= offset && top < offset + height) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        }
    });


    /*========== sticky navbar ==========*/
    header.classList.toggle('sticky', top > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    darkModeIcon.classList.toggle('bx-sun', enabled);
    darkModeIcon.setAttribute('aria-label', enabled ? 'Switch to light mode' : 'Switch to dark mode');
}

darkModeIcon.onclick = () => {
    let enabled = !document.body.classList.contains('dark-mode');
    setDarkMode(enabled);
    try { localStorage.setItem('theme', enabled ? 'dark' : 'light'); } catch (e) {}
};

darkModeIcon.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        darkModeIcon.click();
    }
};

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
setDarkMode(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .skills-container, .portfolio-box, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*========== footer year ==========*/
document.querySelector('#current-year').textContent = new Date().getFullYear();


/*========== language (en / pt) ==========*/
const translations = {
    pt: {
        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.services": "Serviços",
        "nav.skills": "Skills",
        "nav.portfolio": "Portfólio",
        "nav.contact": "Contato",
        "home.hello": "Olá, eu sou",
        "home.p1": "Desenvolvedor mobile formado em Ciência da Computação, focado em Flutter e na construção de apps com Clean Architecture, BLoC e código bem testado. Também trabalho com React Native, Java/Kotlin e Swift.",
        "home.p2": "Também atuo como designer, o que me ajuda a criar interfaces funcionais e agradáveis de usar, e sigo expandindo para o desenvolvimento web para entregar soluções completas mobile e web.",
        "home.cta": "Fale Comigo",
        "prof.mobile": "Dev Mobile",
        "prof.web": "Dev Web",
        "about.title": "Sobre <span>Mim</span>",
        "about.h3": "Oi, eu sou o Bruno, um desenvolvedor mobile que adora transformar ideias em apps rápidos e bem estruturados.",
        "about.p1": "Sou formado em Ciência da Computação, e meu TCC foi uma rede neural convolucional que reconhece os cômodos de uma casa simulada a partir de imagens. Hoje meu dia a dia é Flutter: desenvolvo apps organizados com Clean Architecture e SOLID, gerência de estado com BLoC, injeção de dependências com GetIt, integrações REST com Dio e persistência local com SQLite.",
        "about.p2": "Além do código, tenho experiência com design, então cuido dos detalhes da interface e da experiência do usuário. Estou sempre em busca de novos desafios onde eu possa unir conhecimento técnico e criatividade.",
        "about.cta": "Ver meu GitHub",
        "services.title": "Meus <span>Serviços</span>",
        "services.mobile.title": "Desenvolvimento Mobile",
        "services.mobile.text": "Apps multiplataforma com Flutter e React Native, além de Android (Kotlin) e iOS (Swift) nativos, construídos com Clean Architecture, BLoC e testes automatizados.",
        "services.web.title": "Desenvolvimento Web",
        "services.web.text": "Landing pages e aplicações web responsivas com HTML, CSS, JavaScript e React, com foco em performance e em um layout limpo e acessível.",
        "services.design.title": "UI &amp; Design Gráfico",
        "services.design.text": "Interfaces, protótipos e identidade visual pensados no usuário, prontos para serem entregues e implementados em código.",
        "portfolio.title": "Outros <span>Projetos</span>",
        "portfolio.subtitle": "Projetos de estudo e acadêmicos onde pratiquei novas tecnologias.",
        "projects.brl.title": "App de Câmbio BRL",
        "projects.brl.text": "App Flutter que mostra a cotação do Real em relação a outras moedas, com histórico de 30 dias (abertura, máxima, mínima, fechamento e variação), construído com Clean Architecture.",
        "projects.cripto.text": "App Flutter para pesquisar, ver detalhes e favoritar criptomoedas usando a API da CoinGecko, com BLoC, Dio, GetIt e SQLite.",
        "projects.cnn.title": "Classificador de Cômodos com CNN",
        "projects.cnn.text": "TCC de Ciência da Computação: uma rede neural convolucional que identifica cada cômodo de uma casa simulada a partir de imagens.",
        "projects.stock.text": "Landing page responsiva do Stock Regulator, um produto para melhorar o controle de estoque.",
        "projects.kanban.title": "Quadro Kanban",
        "projects.kanban.text": "Minha primeira aplicação em React: um quadro kanban para organizar tarefas por meio de cards.",
        "projects.snake.title": "Jogo da Cobrinha",
        "projects.snake.text": "Jogo da cobrinha clássico feito em Python com Pygame para a disciplina de Processamento Digital de Imagem e Computação Gráfica.",
        "portfolio.more": "Ver todos no GitHub",
        "projects.code": "Código",
        "projects.live": "Ver site",
        "projects.badge": "Online",
        "featured.flexa.text": "App de gestão para estúdios de Pilates e assessorias de corrida: alunos, agenda com aulas recorrentes, financeiro, múltiplos estúdios e permissões por papel.",
        "featured.orcamentos.text": "App Flutter para cadastrar clientes e dados da empresa e gerar orçamentos em PDF, prontos para imprimir ou compartilhar, construído com Clean Architecture.",
        "featured.stellcore.text": "Site institucional da StellCore Software, empresa de desenvolvimento de software, feito com React, TypeScript, Tailwind e shadcn/ui.",
        "featured.estofaria.text": "Site feito em Flutter Web para uma estofaria de Curitiba, com seções em parallax e formulário de contato gerenciado com BLoC.",
        "featured.unique.text": "Landing page comercial do Unique Combinations, um app para Windows que ajuda empresas a melhorar o desempenho com estatísticas precisas.",
        "featured.stock.text": "App Android de gestão de estoque: leitura de código de barras e QR Code, cadastro de produtos, importação e exportação de planilhas Excel e ordens de serviço em PDF, além da landing page.",
        "projects.play": "Google Play",
        "featured.title": "Principais <span>Projetos</span>",
        "projects.private": "Código privado",
        "projects.linkedin": "LinkedIn",
        "skills.title": "Minhas <span>Skills</span>",
        "nav.certifications": "Certificados",
        "cert.title": "Formação &amp; <span>Certificados</span>",
        "edu.bachelor.title": "Bacharelado em Ciência da Computação",
        "edu.bachelor.date": "Concluído em 2022",
        "edu.pos.title": "Pós-graduação em Desenvolvimento Mobile",
        "edu.pos.date": "2024 – 2025 · 360 horas",
        "edu.document": "Ver documento",
        "cert.drive": "Ver todos no Google Drive",
        "contact.title": "Fale <span>Comigo!</span>",
        "contact.text": "Tem um projeto em mente ou uma oportunidade para conversar? Fale comigo por um dos canais abaixo.",
        "footer.rights": "Todos os direitos reservados."
    }
};

let i18nElements = document.querySelectorAll('[data-i18n]');
let languageIcon = document.querySelector('#language-icon');
let langFlag = document.querySelector('#lang-flag');

// the HTML is written in English, keep it as the "en" dictionary
translations.en = {};
i18nElements.forEach(el => translations.en[el.dataset.i18n] = el.innerHTML);

function setLanguage(lang) {
    i18nElements.forEach(el => {
        let text = translations[lang][el.dataset.i18n];
        if (text) el.innerHTML = text;
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    langFlag.src = lang === 'en' ? 'images/flags/usa_flag.png' : 'images/flags/brazil_flag.png';
    languageIcon.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');

    try { localStorage.setItem('lang', lang); } catch (e) {}

    // lets sections rendered by JS (e.g. certificates) translate themselves
    document.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
}

function toggleLanguage() {
    setLanguage(document.documentElement.lang === 'en' ? 'pt' : 'en');
}

languageIcon.onclick = toggleLanguage;
languageIcon.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleLanguage();
    }
};

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) {}
setLanguage(savedLang || (navigator.language.startsWith('pt') ? 'pt' : 'en'));
