// --- DADOS FICTÍCIOS PARA POPULAR O PERFIL (MOCKUP ORIGINAL) ---
const statsData = {
    totalFilms: 250,
    genres: [
        { name: "Gênero 1: Ação", percentage: 45 },
        { name: "Gênero 2: Drama", percentage: 30 },
        { name: "Gênero 3: Comédia", percentage: 15 },
    ]
};

const badgesData = [
    { name: "Insígnia 1", iconClass: "fa-skull" },       // Caveira
    { name: "Insígnia 2", iconClass: "fa-heart" },       // Coração
    { name: "Insígnia 3", iconClass: "fa-trophy" },      // Troféu
    { name: "Insígnia 4", iconClass: "fa-crosshairs" }   // Espadas
];

const profilesData = [
    {
        name: "Anafalim",
        filmsWatched: 120,
        badges: [
            { iconClass: "fa-heart", color: "var(--accent)" },
            { iconClass: "fa-mask-theater", color: "var(--accent)" },
            { iconClass: "fa-crosshairs", color: "var(--accent)" },
            { iconClass: "fa-skull", color: "var(--accent)" }
        ]
    },
    {
        name: "gataxxx",
        filmsWatched: 88,
        badges: [
            { iconClass: "fa-heart", color: "var(--accent)" },
            { iconClass: "fa-mask-theater", color: "var(--accent)" },
            { iconClass: "fa-crosshairs", color: "var(--accent)" },
            { iconClass: "fa-skull", color: "var(--accent)" }
        ]
    },
    {
        name: "você",
        filmsWatched: 155,
        badges: [
            { iconClass: "fa-skull", color: "var(--accent)" },
            { iconClass: "fa-heart", color: "var(--accent)" },
            { iconClass: "fa-trophy", color: "var(--accent)" },
            { iconClass: "fa-crosshairs", color: "var(--accent)" }
        ]
    }
];

// --- FUNÇÕES DE RENDERIZAÇÃO DO PERFIL ---

/**
 * Renderiza as estatísticas de filmes assistidos e barras de gênero.
 */
function renderStats() {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    // Usando a cor de acento como fundo para o cabeçalho 'num Filmes assistidos' (imitando o mockup)
    let html = `
        <div class="stat-header" style="background-color: var(--accent); color: var(--primary);">
            num Filmes assistidos: ${statsData.totalFilms}
        </div>
    `;

    statsData.genres.forEach((genre, index) => {
        // Usando "genero 1" para simular o texto da imagem, mas com o nome real nos dados
        const label = `genero 1 (${genre.name.split(':')[0]})`; 
        
        html += `
            <div class="genre-bar-container">
                <div class="genre-label" style="color: white;">${label}</div>
                <div class="bar-wrapper" style="background-color: #666666;">
                    <div class="genre-bar" style="width: ${genre.percentage}%; background-color: var(--accent);"></div>
                </div>
            </div>
        `;
    });

    statsSection.innerHTML = html;
}

/**
 * Renderiza a seção de insígnias.
 */
function renderBadges() {
    const badgesSection = document.getElementById('badges-section');
    if (!badgesSection) return;

    // Cabeçalho
    let html = `
        <div class="stat-header" style="background-color: var(--primary);">
            Insígnias
        </div>
        <div class="badges-grid">
    `;

    // Itens da Insígnia (4 no mockup)
    badgesData.forEach(badge => {
        html += `
            <div class="badge-item" style="background-color: var(--primary);">
                <i class="fas ${badge.iconClass} badge-icon" style="color: var(--accent);"></i>
            </div>
        `;
    });

    html += `</div>`;
    badgesSection.innerHTML = html;
}

/**
 * Renderiza a seção de comparação de perfis.
 */
function renderProfiles() {
    const profilesSection = document.getElementById('profiles-section');
    if (!profilesSection) return;

    let html = '';

    profilesData.forEach(profile => {
        // Início do Card do Perfil
        html += `
            <div class="profile-card">
                <div class="profile-avatar" style="background-color: var(--accent);">
                    <i class="fas fa-user avatar-icon" style="color: var(--primary);"></i>
                </div>
                <div class="profile-name-box" style="background-color: var(--accent); color: var(--primary);">
                    ${profile.name}
                </div>
                <div class="profile-name-box" style="background-color: var(--accent); color: var(--primary); margin-top: 2px;">
                    ${profile.filmsWatched} filmes
                </div>
                
                <div class="profile-badges-grid">
        `;

        // Insere as Insígnias individuais
        profile.badges.forEach(badge => {
            html += `
                <div class="profile-badge-item" style="background-color: var(--primary); border: 2px solid var(--accent);">
                    <i class="fas ${badge.iconClass} profile-badge-icon" style="color: var(--accent);"></i>
                </div>
            `;
        });

        // Fim do Card do Perfil
        html += `
                </div>
            </div>
        `;
    });

    profilesSection.innerHTML = html;
    // Configura a coluna de perfis para usar a cor de fundo primária (cinza escuro)
    profilesSection.style.backgroundColor = 'var(--primary)';
}


// --- FUNÇÕES DE INTERAÇÃO (SIDEBAR, MODO ESCURO) ---

function setupSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    // Como o HTML não possui overlay, vamos gerá-lo ou simplesmente togglar a classe 'active'
    
    if (menuToggle && sidebar) {
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Se houver animação no CSS
            // Opcional: Adicionar um overlay dinamicamente se o CSS precisar
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
    // Renderiza o conteúdo do perfil
    renderStats();
    renderBadges();
    renderProfiles();
    
    // Adiciona funcionalidades de interação
    setupSidebar();
    setupDarkMode();
}); 