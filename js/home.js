document.addEventListener("DOMContentLoaded", () => {
  // Likes
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
    });
  });

  // navegacion activo
  const page = window.location.pathname.split("/").pop().replace(".html", "") || "home";
  const navLinks = document.querySelectorAll(".bottom-nav-link");

  navLinks.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
});