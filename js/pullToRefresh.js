const pullToRefresh = document.querySelector(".pull-to-refresh");
let touchstartY = 0;

if (pullToRefresh) {
  document.addEventListener("touchstart", (e) => {
    touchstartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchY - touchstartY;

    if (touchDiff > 0 && window.scrollY === 0) {
      pullToRefresh.classList.add("seen");
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener("touchend", () => {
    if (pullToRefresh.classList.contains("seen")) {
      pullToRefresh.classList.remove("seen");
      location.reload();
    }
  });
}