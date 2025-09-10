// Show button when scrolling down
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "inline-block";
  } else {
    btn.style.display = "none";
  }
}

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
