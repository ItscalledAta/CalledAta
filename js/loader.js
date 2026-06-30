window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-overlay");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // فقط برای صبر کردن تا انیمیشن fade کامل شه
});
