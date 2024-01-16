let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Checks if dark mode is enabled
// if not turns it on, if it is then turns it off

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

darkModeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
