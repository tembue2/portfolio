// Atualiza o ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});
