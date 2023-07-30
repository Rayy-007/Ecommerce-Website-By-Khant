const mobileBar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (mobileBar) {
  mobileBar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}
