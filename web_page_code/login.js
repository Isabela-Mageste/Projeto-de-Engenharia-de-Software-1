// login.js - lógica mínima para ativar botão e redirecionar
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

  function updateButtonState() {
    const hasUser = username.value.trim().length > 0;
    const hasPass = password.value.trim().length > 0;
    loginBtn.disabled = !(hasUser && hasPass);
  }

  username.addEventListener("input", updateButtonState);
  password.addEventListener("input", updateButtonState);

  form.addEventListener("submit", (ev) => {
    ev.preventDefault(); // não manda pra servidor
    // somente redireciona se os campos tiverem texto (botão só habilita nesse caso)
    if (!loginBtn.disabled) {
      // animação/suavização opcional
      loginBtn.textContent = "Entrando...";
      loginBtn.disabled = true;
      setTimeout(() => {
        // redireciona para a página de home
        window.location.href = "home_video.html";
      }, 350);
    }
  });

  // melhora UX: ativar botão se o usuário pressionar Enter e campos preenchidos
  [username, password].forEach(inp => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (!loginBtn.disabled) {
          form.requestSubmit(); // dispara o submit
        } else {
          e.preventDefault();
        }
      }
    });
  });

  // inicializa estado
  updateButtonState();
});
