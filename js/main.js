// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile (toggle)
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// AOS — animações de revelação ao rolar (respeita prefers-reduced-motion)
if (window.AOS) {
  const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  AOS.init({
    duration: 650,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
    disable: reduzido,
  });
}
