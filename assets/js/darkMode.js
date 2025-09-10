const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", function(e) {
  e.preventDefault();
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.innerHTML = '<i class="bi bi-sun"></i> Light Mode';
  } else {
    toggleButton.innerHTML = '<i class="bi bi-moon"></i> Dark Mode';
  }
});
