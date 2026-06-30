function setupMobileMenu() {
  const toggle = document.querySelector(".mb-ham");
  const menu = document.querySelector(".mobile-menu");

  if (!toggle || !menu) return;

  // مهم: منو رو از داخل هدر (که backdrop-filter داره) بیرون می‌کشیم
  // و مستقیم به body می‌چسبونیم تا position:fixed درست کار کنه
  if (menu.parentElement !== document.body) {
    document.body.appendChild(menu);
  }

  if (toggle.dataset.initialized) return;
  toggle.dataset.initialized = "true";

  const body = document.body;
  const links = menu.querySelectorAll("a");

  const openMenu = () => {
    toggle.classList.add("active");
    menu.classList.add("open");
    body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    toggle.classList.remove("active");
    menu.classList.remove("open");
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) closeMenu();
  });
}
