window.onscroll = function () {
  myFunction();
};

var mainnav_container = document.getElementById("scroll");
var sticky = mainnav_container.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    mainnav_container.classList.add("sticky");
  } else {
    mainnav_container.classList.remove("sticky");
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
