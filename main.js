const btnMenu = document.querySelector(".menu-btn");
const toogleMenu = document.querySelector(".burgerMenu");

btnMenu.addEventListener("click", () => {
    toogleMenu.classList.toggle("toogleMenu")
});