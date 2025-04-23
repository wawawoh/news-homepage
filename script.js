navigation = document.querySelector("nav");
brightFut = document.querySelector(".bright-future");

const burger = document.querySelector(".burger");
const exx = document.querySelector(".toggle");
burger.addEventListener("click", () => {
  navigation.classList.add("active");
  brightFut.classList.add("active");
});
exx.addEventListener("click", () => {
  navigation.classList.remove("active");
  brightFut.classList.remove("active");
});
