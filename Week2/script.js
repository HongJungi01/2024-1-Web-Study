const name = document.querySelector(".name");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

orange.addEventListener("click", function () {
  name.style.color = "orange";
});
green.addEventListener("click", function () {
    name.style.color = "green";
  });
red.addEventListener("click", function () {
    name.style.color = "red";
  });