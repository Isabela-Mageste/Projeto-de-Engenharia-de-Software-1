// === SIDEBAR + MODO ESCURO ===
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
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("dark-mode") === "true";
    document.body.classList.toggle("dark-mode", savedTheme);
    darkModeToggle.checked = savedTheme;
  });
}

/* === PERFIL DO USUÁRIO === */
const profileContainer = document.getElementById("profile");

if (profileContainer) {
  fetch("user.json")
    .then(response => response.json())
    .then(user => {
      const nome = user.nome || "Nickname";
      const cargo = user.cargo || "";
      const descricao = user.descricao || "Adicione uma frase sobre você.";
      const foto = user.foto || "Perfil.png";
      const estetica = user.estetica_mes || "";
      const filmes = user.filmes_recentes || [];

      profileContainer.innerHTML = `
        <div class="profile-root">
          <div class="profile-grid">

            <!-- COLUNA ESQUERDA -->
            <aside class="col-card left-card">
              <div class="avatar-wrap">
                <img src="${foto}" alt="Foto de ${nome}" />
              </div>

              <div class="nickname">${nome}</div>
              <div class="quote">“Adicione a frase de seu filme favorito”</div>

              <div class="genres">
                <h4>Gêneros mais assistidos</h4>
                <div class="genre-list">
                  <div class="genre">Comédia</div>
                  <div class="genre">Aventura</div>
                  <div class="genre">Romance</div>
                  <div class="genre">Ficção</div>
                </div>
              </div>
            </aside>

            <!-- COLUNA CENTRAL -->
            <section class="col-card">
              <div class="center-top bio-card">
                <h3>Bio</h3>
                <p style="color:var(--muted); line-height:1.5;">${descricao}</p>
              </div>

              <div class="aesthetics">
                <h3 style="color:#fff; margin-bottom:14px;">Estética do mês</h3>
                <div class="box">
                  ${
                    estetica
                      ? `<img src="${estetica}" alt="Estética do mês" class="aesthetic-img">`
                      : `<p>Nenhuma imagem disponível</p>`
                  }
                </div>
              </div>
            </section>

            <!-- COLUNA DIREITA -->
            <aside class="col-card right-column">
              <div class="right-stack">
                <div class="stack-item">
                  <h4>Assistidos recentes</h4>
                  <div class="inner filmes-grid">
                    ${
                      filmes.length
                        ? filmes.map(src => `<img src="${src}" class="filme-poster" alt="Poster de filme">`).join("")
                        : "<p style='padding:10px;color:#fff;'>Nenhum filme recente</p>"
                    }
                  </div>
                </div>

                <div class="stack-item">
                  <h4>Amigos</h4>
                  <div class="inner"></div>
                </div>

                <div class="stack-item small">
                  <h4>Emblemas</h4>
                  <div class="inner"></div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      `;

      const centerCol = profileContainer.querySelector(".col-card:nth-child(2)");
      if (centerCol) {
        const bioCard = centerCol.querySelector(".bio-card");
      }
    })
    .catch(error => {
      profileContainer.innerHTML = `<p>Erro ao carregar informações do usuário.</p>`;
      console.error("Erro ao carregar JSON:", error);
    });
}

// === FUNÇÃO DE EXPANDIR IMAGEM DA ESTÉTICA ===
document.addEventListener("click", (e) => {
  const img = e.target.closest(".aesthetic-img");
  if (!img) return;

  // cria o modal
  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  modal.innerHTML = `
    <div class="image-modal-content">
      <span class="close-modal">&times;</span>
      <img src="${img.src}" alt="Estética do mês expandida" />
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add("active"), 10); // animação de fade-in

  // fechar ao clicar no botão ou fora
  const close = modal.querySelector(".close-modal");
  close.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.remove();
  });
});
