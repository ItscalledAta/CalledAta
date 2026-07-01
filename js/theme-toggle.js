function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle || toggle.dataset.initialized) return;
  toggle.dataset.initialized = "true";

  const root = document.documentElement;

  toggle.checked = root.getAttribute("data-theme") === "light";

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  });
}
