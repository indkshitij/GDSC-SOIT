const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const linkContainer = document.querySelector(".link");

function openMenu() {
    linkContainer.style.visibility = "visible";
  }
function closeMenu() {
  linkContainer.style.visibility = "hidden";
}



if (window.innerWidth < 768) {
    closeMenu();
  }

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.onscroll = function () {
  const totalHeight = document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  let percentageScroll = (scrollY / (totalHeight - clientHeight)) * 100;
  if (percentageScroll <= 1) {
    progressBar.style.width = "0%";
  } else {
    progressBar.style.width = percentageScroll + "%";

  }
};

// Preloader
const preloader = document.getElementById("preloader")
window.addEventListener("load",function(){
  preloader.style.display = "none"
})
