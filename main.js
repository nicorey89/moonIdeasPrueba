const btnMenu = document.querySelector(".menu-btn");
const toogleMenu = document.querySelector(".burgerMenu");

btnMenu.addEventListener("click", () => {
    toogleMenu.classList.toggle("toogleMenu")
});

const btnShop = document.querySelector(".shop-btn");
const btnNew = document.querySelector(".new-btn");
const shop = document.querySelector(".shop");
const newColection = document.querySelector(".newColection");

btnShop.addEventListener("click", () => {
    shop.classList.toggle("active-shop")
})
btnNew.addEventListener("click", () => {
    newColection.classList.toggle("active-new")
})

const favorite1 = document.querySelector("#favorite1");
const favorite2 = document.querySelector("#favorite2");
const favorite3 = document.querySelector("#favorite3");

favorite1.addEventListener("click", () => {
    favorite1.classList.toggle("fa-solid")
})

favorite2.addEventListener("click", () => {
    favorite2.classList.toggle("fa-solid")
})

favorite3.addEventListener("click", () => {
    favorite3.classList.toggle("fa-solid")
})
