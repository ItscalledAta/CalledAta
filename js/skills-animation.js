const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // یه بار اجرا میشه، تموم
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".skill-card").forEach((card) => {
  observer.observe(card);
});
