async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar ul li");

  navLinks.forEach((li) => {
    li.classList.remove("active");
    const link = li.querySelector("a");
    const href = link.getAttribute("href");

    // اگه لینک anchor داره (شامل #) اصلا فعال نشه
    if (href.includes("#")) return;

    const linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
      li.classList.add("active");
    }
  });
}

loadComponent("header", "./components/header.html").then(() => {
  setActiveNavLink();
  setupMobileMenu();
  setupThemeToggle();
});
loadComponent("footer", "./components/footer.html");
