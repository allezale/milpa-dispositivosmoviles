document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nationalityToggle");
  const flagButtons = document.querySelectorAll(".flag-btn");
  const flagText = document.querySelector(".edit-nationality-flag");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
    });
  }

  flagButtons.forEach((button) => {
    button.addEventListener("click", () => {

      flagButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const img = button.querySelector("img");

      if (flagText && img) {
        flagText.textContent = img.alt || "🌎";
      }

    });
  });

});