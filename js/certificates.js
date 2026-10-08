/*========== certificates section ==========*/
const certCategories = [
    { key: 'degree', icon: 'bx-medal', en: 'Degrees', pt: 'Formações' },
    { key: 'flutter', icon: 'bxl-flutter', en: 'Flutter & Dart', pt: 'Flutter & Dart' },
    { key: 'ios', icon: 'bxl-apple', en: 'iOS & Swift', pt: 'iOS & Swift' },
    { key: 'react-native', icon: 'bxl-react', en: 'React Native', pt: 'React Native' },
    { key: 'java', icon: 'bxl-java', en: 'Java', pt: 'Java' },
    { key: 'web', icon: 'bx-code-alt', en: 'Web', pt: 'Web' },
    { key: 'design', icon: 'bx-palette', en: 'Design & UX', pt: 'Design & UX' },
    { key: 'tools', icon: 'bx-terminal', en: 'Dev Tools', pt: 'Ferramentas' },
    { key: 'data', icon: 'bx-bar-chart-alt-2', en: 'Data & AI', pt: 'Dados & IA' },
    { key: 'agile', icon: 'bx-task', en: 'Agile & Kanban', pt: 'Ágil & Kanban' },
    { key: 'soft', icon: 'bx-group', en: 'Soft Skills', pt: 'Soft Skills' },
    { key: 'other', icon: 'bx-award', en: 'Others', pt: 'Outros' },
    { key: 'all', icon: 'bx-grid-alt', en: 'All', pt: 'Todos' }
];

const certTexts = {
    en: {
        summary: (total, degrees) => `${total} certificates from Alura, Udemy and more, including ${degrees} complete learning paths.`,
        degree: 'Degree',
        more: 'Show more',
        less: 'Show less',
        open: 'Open certificate'
    },
    pt: {
        summary: (total, degrees) => `${total} certificados da Alura, Udemy e outras, incluindo ${degrees} formações completas.`,
        degree: 'Formação',
        more: 'Ver mais',
        less: 'Ver menos',
        open: 'Abrir certificado'
    }
};

const CERT_PAGE_SIZE = 9;

let certFilter = 'degree';
let certExpanded = false;

let certSummary = document.querySelector('.cert-summary');
let certFilters = document.querySelector('.cert-filters');
let certContainer = document.querySelector('.cert-container');
let certMoreButton = document.querySelector('.cert-more');

function certLang() {
    return document.documentElement.lang === 'pt-BR' ? 'pt' : 'en';
}

function certMatches(cert, filter) {
    if (filter === 'all') return true;
    if (filter === 'degree') return cert.degree;
    return cert.category === filter;
}

function escapeHtml(text) {
    return text.replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function renderCertFilters() {
    let lang = certLang();

    certFilters.innerHTML = certCategories.map(cat => {
        let count = CERTIFICATES.filter(cert => certMatches(cert, cat.key)).length;
        let active = cat.key === certFilter;
        return `<button type="button" role="tab" class="cert-filter${active ? ' active' : ''}" aria-selected="${active}" data-filter="${cat.key}">
                    <i class='bx ${cat.icon}'></i>${cat[lang]}<span class="cert-count">${count}</span>
                </button>`;
    }).join('');
}

function renderCertList() {
    let lang = certLang();
    let texts = certTexts[lang];
    let list = CERTIFICATES.filter(cert => certMatches(cert, certFilter));
    let visible = certExpanded ? list : list.slice(0, CERT_PAGE_SIZE);

    certContainer.innerHTML = visible.map(cert => {
        let category = certCategories.find(cat => cat.key === cert.category);
        let title = escapeHtml(cert.title);
        return `<a class="cert-box" href="https://drive.google.com/file/d/${cert.id}/view" target="_blank" rel="noopener" aria-label="${texts.open}: ${title}">
                    <i class='bx ${category.icon} cert-icon'></i>
                    <div class="cert-info">
                        <div class="cert-meta">
                            ${cert.provider ? `<span class="cert-provider">${cert.provider}</span>` : ''}
                            ${cert.degree ? `<span class="cert-degree">${texts.degree}</span>` : ''}
                        </div>
                        <h4>${title}</h4>
                    </div>
                    <i class='bx bx-link-external cert-open'></i>
                </a>`;
    }).join('');

    certMoreButton.hidden = list.length <= CERT_PAGE_SIZE;
    certMoreButton.textContent = certExpanded ? texts.less : texts.more;
}

function renderCertificates() {
    let texts = certTexts[certLang()];
    certSummary.textContent = texts.summary(CERTIFICATES.length, CERTIFICATES.filter(cert => cert.degree).length);
    renderCertFilters();
    renderCertList();
}

certFilters.onclick = e => {
    let button = e.target.closest('.cert-filter');
    if (!button) return;

    certFilter = button.dataset.filter;
    certExpanded = false;
    renderCertFilters();
    renderCertList();
};

certMoreButton.onclick = () => {
    certExpanded = !certExpanded;
    renderCertList();

    if (!certExpanded) {
        document.querySelector('#certifications').scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('languagechange', renderCertificates);
renderCertificates();
