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

/* Show Detail Image SLide */
const mainImg = document.getElementById("main--image");
const smallImg = document.getElementsByClassName("small-img");

for (const img of smallImg) {
  img.onclick = () => {
    mainImg.src = img.src;
  };
}

// Go to Detail page
const productCard = document.getElementsByClassName("pro");

for (const card of productCard) {
  card.onclick = () => {
    location.href = "sproduct.html";
  };
}

// Read More Functionality
const readMore = document.getElementById("read-more");
const readMoreText = document.getElementById("read-more-text");

readMore.addEventListener("click", () => {
  if (readMore.textContent === "read more...") {
    readMore.textContent = "read less";
    readMoreText.style.display = "inline";
  } else {
    readMore.textContent = "read more...";
    readMoreText.style.display = "none";
  }
});
