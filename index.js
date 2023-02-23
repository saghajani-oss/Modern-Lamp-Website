const btn = document.getElementById("btn");
const light = document.querySelector(".light");
const menuImg = document.querySelector(".menu-img");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    light.classList.toggle("on")
})

menuImg.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
})