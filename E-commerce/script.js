// Script for navigation bar

let menubtn = document.querySelector("#bar");
let menu = document.querySelector("#navbar");
let closebtn = document.querySelector("#close");

menubtn.addEventListener("click", function () {
  menu.style.right = "0px";
});

closebtn.addEventListener("click", function(){
    menu.style.right = "-200px";
})


