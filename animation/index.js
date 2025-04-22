// console.log("heello");
// const iconCollection = document.getElementsByClassName("nav-icon1");
// const ele1 = document.getElementsByClassName("notification-tab");
// const ele2 = document.getElementsByClassName("nav-menu");

// const iconArray = Array.from(iconCollection);
// const icon = iconArray[0];

// icon.addEventListener("click", () => {
//   ele1.classList.toggle("forward");

// });

const icon = document.querySelector(".nav-icon1");
const el1 = document.querySelector(".notification-tab");
const el2 = document.querySelector(".nav-menu");
const searchicon = document.querySelector(".nav-icon2");
const search = document.querySelector(".nav-search");

icon.addEventListener("click", () => {
  el1.classList.toggle("forward");
  el2.classList.toggle("backward");
});

searchicon.addEventListener("click", () => {
  search.classList.toggle("display");
});
