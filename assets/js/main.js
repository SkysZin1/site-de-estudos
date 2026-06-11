// Controla o botão de voltar ao topo e pequenas interações visuais.
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  const cards = document.querySelectorAll(".subject-card");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      const shouldShowButton = window.scrollY > 320;
      backToTopButton.classList.toggle("is-visible", shouldShowButton);
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Destaca o card que está em foco pelo teclado ou mouse.
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("is-active"));
    card.addEventListener("mouseleave", () => card.classList.remove("is-active"));
    card.addEventListener("focus", () => card.classList.add("is-active"));
    card.addEventListener("blur", () => card.classList.remove("is-active"));
  });
});
