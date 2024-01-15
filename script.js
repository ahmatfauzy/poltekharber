window.addEventListener("scroll", function () {
  const navbar = document.getElementById("myNavbar");
  const logoPutih = document.querySelector(".putih");
  const logoBerwarna = document.querySelector(".berwarna");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    logoPutih.style.display = "none";
    logoBerwarna.style.display = "inline-block";
  } else {
    navbar.classList.remove("navbar-scrolled");
    logoPutih.style.display = "inline-block";
    logoBerwarna.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("myNavbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-transparent");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("myNavbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-transparent");
  }
});

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("myButton").style.backgroundColor = "green"; // Ganti warna saat tombol ditekan
});

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    document.getElementById("registerButton").style.backgroundColor = "green"; // Ganti warna saat tombol ditekan
  });
