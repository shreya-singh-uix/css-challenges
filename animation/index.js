// console.log("heello");
// const iconCollection = document.getElementsByClassName("nav-icon1");
// const ele1 = document.getElementsByClassName("notification-tab");
// const ele2 = document.getElementsByClassName("nav-menu");

// const iconArray = Array.from(iconCollection);
// const icon = iconArray[0];

// icon.addEventListener("click", () => {
//   ele1.classList.toggle("forward");

// });

icon = document.querySelector(".nav-icon1");
el1 = document.querySelector(".notification-tab");
el2 = document.querySelector(".nav-menu");
searchicon = document.querySelector(".nav-icon2");
search = document.querySelector(".nav-search");

icon.addEventListener("click", () => {
  el1.classList.toggle("forward");
  el2.classList.toggle("backward");
});

searchicon.addEventListener("click", () => {
  search.classList.toggle("display");
});
