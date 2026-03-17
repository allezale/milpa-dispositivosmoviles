document.addEventListener("DOMContentLoaded", () => {
  const notificationsToggle = document.getElementById("notificationsToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  const openLogoutModal = document.getElementById("openLogoutModal");
  const cancelLogout = document.getElementById("cancelLogout");
  const confirmLogout = document.getElementById("confirmLogout");
  const logoutSheet = document.getElementById("logoutSheet");
  const logoutOverlay = document.getElementById("logoutOverlay");

  if (notificationsToggle) {
    notificationsToggle.addEventListener("click", () => {
      notificationsToggle.classList.toggle("active");

      const icon = notificationsToggle.querySelector("i");
      if (notificationsToggle.classList.contains("active")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-check");
      } else {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-xmark");
      }
    });
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      darkModeToggle.classList.toggle("active");

      const icon = darkModeToggle.querySelector("i");
      if (darkModeToggle.classList.contains("active")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-check");
      } else {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-xmark");
      }
    });
  }

  function openSheet() {
    logoutSheet.classList.add("show");
    logoutOverlay.classList.add("show");
  }

  function closeSheet() {
    logoutSheet.classList.remove("show");
    logoutOverlay.classList.remove("show");
  }

  if (openLogoutModal) {
    openLogoutModal.addEventListener("click", openSheet);
  }

  if (cancelLogout) {
    cancelLogout.addEventListener("click", closeSheet);
  }

  if (logoutOverlay) {
    logoutOverlay.addEventListener("click", closeSheet);
  }

  if (confirmLogout) {
    confirmLogout.addEventListener("click", () => {
      window.location.href = "logout.html";
    });
  }
});