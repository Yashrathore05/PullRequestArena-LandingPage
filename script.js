const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const storageKey = "pra-theme";

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem(storageKey, theme);
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

setTheme(getPreferredTheme());

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});
