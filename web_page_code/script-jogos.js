// --- DADOS FICTÍCIOS PARA POPULAR O PERFIL ---
const statsData = {
    totalFilms: 250,
    genres: [
        { name: "Terror", percentage: 45 },
        { name: "Drama", percentage: 30 },
        { name: "Comédia", percentage: 15 },
    ]
};

const badgesData = [
    { name: "Insígnia Crânio", iconClass: "fa-skull" },       
    { name: "Insígnia Coração", iconClass: "fa-heart" },       
    { name: "Insígnia Troféu", iconClass: "fa-trophy" },      
    { name: "Insígnia Espadas", iconClass: "fa-crosshairs" }   
];

const profilesData = [
    {
        name: "Anafalim",
        filmsWatched: 120,
        badges: [
            { iconClass: "fa-heart" },
            { iconClass: "fa-mask-theater" },
            { iconClass: "fa-crosshairs" },
            { iconClass: "fa-skull" }
        ]
    },
    {
        name: "gataxxx",
        filmsWatched: 88,
        badges: [
            { iconClass: "fa-heart" },
            { iconClass: "fa-mask-theater" },
            { iconClass: "fa-crosshairs" },
            { iconClass: "fa-skull" }
        ]
    },
    {
        name: "você",
        filmsWatched: 155,
        badges: [
            { iconClass: "fa-skull" },
            { iconClass: "fa-heart" },
            { iconClass: "fa-trophy" },
            { iconClass: "fa-crosshairs" }
        ]
    }
];

// --- FUNÇÕES DE RENDERIZAÇÃO DO PERFIL ---

function renderStats() {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;
    
    // 1. Adiciona a classe principal para estilização
    statsSection.classList.add('jogos-section');

    let html = `
        <div class="jogos-stat-header" style="background-color: var(--accent); color: var(--primary);">
            Filmes assistidos: ${statsData.totalFilms}
        </div>
    `;

    statsData.genres.forEach((genre) => {
        const label = `Gênero  ${genre.name}`; // Mantenho o nome "gênero 1" como no seu print
        
        html += `
            <div class="jogos-genre-bar-container">
                <div class="jogos-genre-label">${label}</div>
                <div class="jogos-bar-wrapper">
                    <div class="jogos-genre-bar" style="width: ${genre.percentage}%; background-color: var(--accent);"></div>
                </div>
            </div>
        `;
    });

    statsSection.innerHTML = html;
}

function renderBadges() {
    const badgesSection = document.getElementById('badges-section');
    if (!badgesSection) return;

    badgesSection.classList.add('jogos-section'); // Adiciona a classe principal

    let html = `
        <div class="jogos-stat-header" style="background-color: var(--primary); color: var(--text-light);">
            Insígnias
        </div>
        <div class="jogos-badges-grid">
    `;

    badgesData.forEach(badge => {
        // A cor do ícone é alterada com base no index para imitar o mockup
        const iconColor = (badge.name === "Insígnia Crânio" || badge.name === "Insígnia Troféu") 
                            ? 'var(--text-light)' : 'var(--accent)'; 
                            
        const bgColor = (badge.name === "Insígnia Crânio" || badge.name === "Insígnia Troféu") 
                            ? 'var(--accent)' : 'var(--primary)'; // Cor do fundo do badge (inversão)

        html += `
            <div class="jogos-badge-item" style="background-color: var(--primary);">
                <i class="fas ${badge.iconClass} jogos-badge-icon" style="color: ${iconColor};"></i>
            </div>
        `;
    });

    html += `</div>`;
    badgesSection.innerHTML = html;
}

function renderProfiles() {
    const profilesSection = document.getElementById('profiles-section');
    if (!profilesSection) return;

    profilesSection.classList.add('jogos-profiles-column'); // Adiciona a classe de coluna

    let html = '';

    profilesData.forEach(profile => {
        html += `
            <div class="jogos-profile-card">
        `;

        // Coluna 1: Avatar
        html += `
            <div class="jogos-profile-avatar" style="background-color: var(--accent);">
                <i class="fas fa-user avatar-icon" style="color: var(--primary);"></i>
            </div>
        `;

        // Coluna 2: Nome e Filmes
        html += `
            <div style="flex-grow: 1; text-align: center;">
                <div class="jogos-profile-name-box" style="background-color: var(--accent); color: var(--primary); margin-bottom: 2px;">
                    ${profile.name}
                </div>
                <div class="jogos-profile-name-box" style="background-color: var(--accent); color: var(--primary);">
                    ${profile.filmsWatched} filmes
                </div>
            </div>
        `;
        
        // Coluna 3: Insígnias (Usando a primeira insígnia como no mockup)
        const badge1 = profile.badges[0];
        const badge2 = profile.badges[1];
        
        // Renderiza apenas a primeira insígnia como um bloco grande (simulando a renderização do mockup)
        html += `
            <div style="text-align: center; margin-top: 10px;">
                <i class="fas ${badge1.iconClass}" style="font-size: 3em; color: var(--accent);"></i>
            </div>
        `;

        html += `
            </div> `;
    });

    profilesSection.innerHTML = html;
}

// --- FUNÇÕES DE INTERAÇÃO (SIDEBAR, MODO ESCURO) ---

function setupSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            // Você pode adicionar uma classe para mudar o ícone do menu, se desejar
            menuToggle.classList.toggle('active'); 
        }

        menuToggle.addEventListener('click', toggleSidebar);
    }
}

function setupDarkMode() {
    const themeSwitch = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Verifica a preferência do usuário ou a última escolha (usa 'dark-mode' do CSS original)
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'false');
        }
    });
}

// --- INICIALIZAÇÃO DA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. GARANTE QUE AS COLUNAS RECEBAM AS CLASSES CORRETAS
    document.getElementById('left-column').classList.add('jogos-left-column', 'jogos-column');
    document.getElementById('profiles-section').classList.add('jogos-profiles-column', 'jogos-column');


    // 2. Renderiza o conteúdo do perfil
    renderStats();
    renderBadges();
    renderProfiles();
    
    // 3. Adiciona funcionalidades de interação
    setupSidebar();
    setupDarkMode();
});