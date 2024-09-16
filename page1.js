const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});
