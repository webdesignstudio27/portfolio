// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navigation switching (no scroll, tab-like behavior)
const navLinks = document.querySelectorAll(".nav-link, .nav-switch");
const sections = document.querySelectorAll(".content-section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    // Remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Activate selected
    link.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
