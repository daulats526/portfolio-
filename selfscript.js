// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
let promise = new Promise((resolve, reject) => {
  resolve("success");
});

promise.then((value) => {
  console.log(value);
});
