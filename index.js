const elBody = document.querySelector("body");
const elToggle = document.querySelector(".toggle");

elToggle.addEventListener("click", function (){
    elBody.classList.toggle("dark");
});