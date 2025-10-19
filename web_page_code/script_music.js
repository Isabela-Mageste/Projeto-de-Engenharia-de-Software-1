document.addEventListener("DOMContentLoaded", () => {

  /* === SIDEBAR + MODO ESCURO === */
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const darkModeToggle = document.getElementById("darkModeToggle");

  // abrir e fechar sidebar
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // fechar ao clicar fora
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  }

  // alternar modo escuro
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      const isDark = darkModeToggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("dark-mode", isDark);
    });

    // carregar tema salvo
    const savedTheme = localStorage.getItem("dark-mode") === "true";
    document.body.classList.toggle("dark-mode", savedTheme);
    darkModeToggle.checked = savedTheme;
  }

  /* === DADOS === */
  const recentes = [
    { nome: "Lost in Waves", artista: "Luna Soria", capa: "https://picsum.photos/200?1", banner: "https://picsum.photos/1200/400?1" },
    { nome: "Electric Sky", artista: "Neon Soul", capa: "https://picsum.photos/200?2", banner: "https://picsum.photos/1200/400?2" },
    { nome: "Golden Hours", artista: "Eloá V.", capa: "https://picsum.photos/200?3", banner: "https://picsum.photos/1200/400?3" },
    { nome: "City Lights", artista: "Felipe Nova", capa: "https://picsum.photos/200?4", banner: "https://picsum.photos/1200/400?4" },
  ];

  const recomendados = [
    { nome: "Aurora Dream", artista: "Satori", capa: "https://picsum.photos/200?5", banner: "https://picsum.photos/1200/400?5" },
    { nome: "Moonlight Dance", artista: "Narae", capa: "https://picsum.photos/200?6", banner: "https://picsum.photos/1200/400?6" },
    { nome: "Echoes", artista: "The Seekers", capa: "https://picsum.photos/200?7", banner: "https://picsum.photos/1200/400?7" },
    { nome: "Afterglow", artista: "Vitoria L.", capa: "https://picsum.photos/200?8", banner: "https://picsum.photos/1200/400?8" },
  ];

  const categorias = [
    {
      titulo: "Pop Hits",
      musicas: [
        { nome: "Shine On", artista: "Mila", capa: "https://picsum.photos/200?9", banner: "https://picsum.photos/1200/400?9" },
        { nome: "Move", artista: "DJ Lane", capa: "https://picsum.photos/200?10", banner: "https://picsum.photos/1200/400?10" },
        { nome: "Sunset Ride", artista: "Aurélio", capa: "https://picsum.photos/200?11", banner: "https://picsum.photos/1200/400?11" },
      ]
    },
    {
      titulo: "Rock Classics",
      musicas: [
        { nome: "High Voltage", artista: "Steel Heart", capa: "https://picsum.photos/200?12", banner: "https://picsum.photos/1200/400?12" },
        { nome: "Dust Storm", artista: "The Rangers", capa: "https://picsum.photos/200?13", banner: "https://picsum.photos/1200/400?13" },
        { nome: "Red Flame", artista: "Black Nova", capa: "https://picsum.photos/200?14", banner: "https://picsum.photos/1200/400?14" },
      ]
    },
    {
      titulo: "Lo-Fi Beats",
      musicas: [
        { nome: "Study Mode", artista: "LoTune", capa: "https://picsum.photos/200?15", banner: "https://picsum.photos/1200/400?15" },
        { nome: "Calm Street", artista: "Yuki Beats", capa: "https://picsum.photos/200?16", banner: "https://picsum.photos/1200/400?16" },
        { nome: "Coffee Time", artista: "LoChill", capa: "https://picsum.photos/200?17", banner: "https://picsum.photos/1200/400?17" },
      ]
    }
  ];

  /* === FUNÇÃO PARA RENDERIZAR CARDS === */
  function renderMusicas(containerId, lista) {
    const container = document.getElementById(containerId);
    if (!container) return;
    lista.forEach(m => {
      const card = document.createElement("div");
      card.classList.add("music-card");
      card.innerHTML = `
        <img src="${m.capa}" alt="${m.nome}">
        <h4>${m.nome}</h4>
        <p>${m.artista}</p>
      `;
      card.addEventListener("click", () => tocarMusica(m));
      container.appendChild(card);
    });
  }

  /* === RENDERIZA SEÇÕES PRINCIPAIS === */
  renderMusicas("recentes", recentes);
  renderMusicas("recomendados", recomendados);

  /* === CATEGORIAS DINÂMICAS === */
  const categoriasContainer = document.getElementById("categorias");
  if (categoriasContainer) {
    categorias.forEach(cat => {
      const section = document.createElement("section");
      section.classList.add("categoria");
      section.innerHTML = `<h3>${cat.titulo}</h3>`;
      
      const linha = document.createElement("div");
      linha.classList.add("categoria-linha");
      
      cat.musicas.forEach(m => {
        const card = document.createElement("div");
        card.classList.add("music-card");
        card.innerHTML = `
          <img src="${m.capa}" alt="${m.nome}">
          <h4>${m.nome}</h4>
          <p>${m.artista}</p>
        `;
        card.addEventListener("click", () => tocarMusica(m));
        linha.appendChild(card);
      });
      
      section.appendChild(linha);
      categoriasContainer.appendChild(section);
    });
  }

  /* === PLAYER === */
  const player = document.createElement("div");
player.classList.add("music-player");
player.innerHTML = `
  <div class="player-left">
    <img id="player-banner" src="${recentes[0].capa}" alt="banner atual">
    <div class="music-info">
      <h4 id="player-nome">${recentes[0].nome}</h4>
      <p id="player-artista">${recentes[0].artista}</p>
      <br><br>
    </div>
  </div>

  <div class="player-center">
    <div class="player-controls">
      <button><i class="fa-solid fa-backward"></i></button>
      <button id="play-btn"><i class="fa-solid fa-play"></i></button>
      <button><i class="fa-solid fa-forward"></i></button>
    </div>
    <div class="progress-area">
      <span id="current-time">0:50</span>
      <div class="progress-bar"><div class="progress"></div></div>
      <span id="duration">4:14</span>
    </div>
  </div>

  <div class="extra-controls">
    <i class="fa-solid fa-bars"></i>
    <i class="fa-solid fa-volume-high"></i>
    <input type="range" min="0" max="100" value="50" id="volume">
    <i class="fa-solid fa-user-circle"></i>
  </div>
`;
document.body.appendChild(player);

  document.body.appendChild(player);

  /* === CONTROLE DE PLAYER === */
  const playBtn = document.getElementById("play-btn");
  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    const icon = playBtn.querySelector("i");
    isPlaying = !isPlaying;
    icon.classList.toggle("fa-play", !isPlaying);
    icon.classList.toggle("fa-pause", isPlaying);
  });

  function trocarBanner(capa) {
    const banner = document.getElementById("player-banner");
    banner.style.transition = "opacity 0.3s ease";
    banner.style.opacity = "0";
    setTimeout(() => {
      banner.src = capa;
      banner.style.opacity = "1";
    }, 300);
  }

  function tocarMusica(musica) {
    trocarBanner(musica.capa);
    document.getElementById("player-nome").textContent = musica.nome;
    document.getElementById("player-artista").textContent = musica.artista;
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${musica.banner}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
  }

  const volumeInput = document.getElementById("volume");
  volumeInput.addEventListener("input", (e) => {
    const vol = e.target.value;
    document.getElementById("player-banner").style.filter = `brightness(${0.5 + vol / 200})`;
  });
});
