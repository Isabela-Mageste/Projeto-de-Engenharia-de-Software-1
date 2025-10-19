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
      const descricao = user.descricao || "Adicione uma frase sobre você.";
      const foto = user.foto || "Perfil.png";
      const estetica = user.estetica_mes || "";
      const filmes = user.filmes_recentes || [];
      const amigos = user.amigos || [];
      const emblemas = user.emblemas || [];

      profileContainer.innerHTML = `
        <div class="profile-root">
          <div class="profile-grid">

            <!-- COLUNA ESQUERDA -->
            <aside class="col-card left-card">
              <div class="avatar-wrap">
                <img src="${foto}" alt="Foto de ${nome}" />
              </div>
              <div class="nickname">${nome}</div>
              <div class="quote">“ET... Telefone... Minha casa.”</div>
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
                  <div class="inner amigos-container"></div>
                </div>

                <div class="stack-item small">
                  <h4>Emblemas</h4>
                  <div class="inner emblemas-container"></div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      `;

      /* ==== AMIGOS ==== */
      const amigosContainer = profileContainer.querySelector(".amigos-container");
      if (amigos.length) {
        const amigosHtml = amigos
          .slice(0, 2)
          .map(a => `
            <div class="amigo">
              <img src="${a.foto}" alt="${a.nome}">
              <span>${a.nome}</span>
            </div>
          `).join("");

        amigosContainer.innerHTML = amigosHtml;

        if (amigos.length > 2) {
          amigosContainer.insertAdjacentHTML("beforeend",
            `<button class="ver-mais" data-tipo="amigos">Ver mais</button>`
          );
        }
      } else {
        amigosContainer.innerHTML = "<p style='color:#fff;padding:10px;'>Sem amigos</p>";
      }

      /* ==== EMBLEMAS ==== */
      const emblemasContainer = profileContainer.querySelector(".emblemas-container");
      if (emblemas.length) {
        const emblemasHtml = emblemas
          .slice(0, 2)
          .map(e => `
            <div class="emblema">
              <img src="${e.imagem}" alt="${e.titulo}" class="emblema-img">
              <span>${e.titulo}</span>
            </div>
          `).join("");

        emblemasContainer.innerHTML = emblemasHtml;

        if (emblemas.length > 2) {
          emblemasContainer.insertAdjacentHTML("beforeend",
            `<button class="ver-mais" data-tipo="emblemas">Ver mais</button>`
          );
        }
      } else {
        emblemasContainer.innerHTML = "<p style='color:#fff;padding:10px;'>Sem emblemas</p>";
      }

      /* ==== MODAL DE LISTA COMPLETA ==== */
      document.addEventListener("click", e => {
        const btn = e.target.closest(".ver-mais");
        if (!btn) return;

        const tipo = btn.dataset.tipo;
        const lista = tipo === "amigos" ? amigos : emblemas;

        const modal = document.createElement("div");
        modal.classList.add("lista-modal");
        modal.innerHTML = `
          <div class="lista-modal-content">
            <span class="close-modal">&times;</span>
            <h3>${tipo === "amigos" ? "Todos os Amigos" : "Todos os Emblemas"}</h3>
            <div class="lista-scroll">
              ${
                tipo === "amigos"
                  ? lista.map(a => `<div class="amigo"><img src="${a.foto}"><span>${a.nome}</span></div>`).join("")
                  : lista.map(e => `<div class="emblema"><img src="${e.imagem}" class="emblema-img"><span>${e.titulo}</span></div>`).join("")
              }
            </div>
          </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add("active"), 10);

        const close = modal.querySelector(".close-modal");
        close.addEventListener("click", () => modal.remove());
        modal.addEventListener("click", evt => {
          if (evt.target === modal) modal.remove();
        });

        // === CLIQUE NO EMBLEMA PARA AMPLIAR (NA FRENTE DO MODAL) ===
        modal.querySelectorAll(".emblema-img").forEach(img => {
          img.addEventListener("click", () => {
            const zoomModal = document.createElement("div");
            zoomModal.classList.add("image-modal");
            zoomModal.style.zIndex = "3000"; // garante que fica acima do modal de lista
            zoomModal.innerHTML = `
              <div class="image-modal-content">
                <span class="close-modal">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
              </div>
            `;
            document.body.appendChild(zoomModal);
            setTimeout(() => zoomModal.classList.add("active"), 10);

            // Fechar modal
            const close = zoomModal.querySelector(".close-modal");
            close.addEventListener("click", () => zoomModal.remove());
            zoomModal.addEventListener("click", ev => {
              if (ev.target === zoomModal) zoomModal.remove();
            });
          });
        });
      });
    })
    .catch(error => {
      profileContainer.innerHTML = `<p>Erro ao carregar informações do usuário.</p>`;
      console.error("Erro ao carregar JSON:", error);
    });
}

/* === EXPANDIR ESTÉTICA DO MÊS === */
document.addEventListener("click", e => {
  const img = e.target.closest(".aesthetic-img");
  if (!img) return;

  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  modal.innerHTML = `
    <div class="image-modal-content">
      <span class="close-modal">&times;</span>
      <img src="${img.src}" alt="Estética do mês expandida" />
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add("active"), 10);

  const close = modal.querySelector(".close-modal");
  close.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", event => {
    if (event.target === modal) modal.remove();
  });
});
