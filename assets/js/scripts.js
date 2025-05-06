
// Header Section

fetch('./components/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

// Menu Toggle
 
function toggleMenu() {
  const links = document.getElementById("nav-links");
  links.classList.toggle("active");
}

// Footer Section
fetch('./components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
