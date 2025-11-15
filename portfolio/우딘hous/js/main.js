document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.querySelector(".med1-img1");
  const img2 = document.querySelector(".med1-img2");
  let showFirst = true;

  setInterval(() => {
    if (showFirst) {
      img1.style.opacity = 0;
      img2.style.opacity = 1;
    } else {
      img1.style.opacity = 1;
      img2.style.opacity = 0;
    }
    showFirst = !showFirst;
  }, 2500);
});
