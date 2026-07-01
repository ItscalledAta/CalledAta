function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle || toggle.dataset.initialized) return;
  toggle.dataset.initialized = "true";

  const root = document.documentElement;

  toggle.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}
