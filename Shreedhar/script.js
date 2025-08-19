// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Toggle Light Mode"
      : "🌙 Toggle Dark Mode";
  });
}