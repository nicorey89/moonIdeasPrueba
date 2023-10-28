const btnMenu = document.querySelector(".menu-btn");
const toogleMenu = document.querySelector(".burgerMenu");

btnMenu.addEventListener("click", () => {
    toogleMenu.classList.add("toogleMenu")
});
function pullDown(){
    toogleMenu.classList.remove("toogleMenu");
};