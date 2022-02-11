window.onscroll = function() {myFunction_scroll()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction_scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
