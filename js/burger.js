let burgerMenu = document.querySelector('.burger-menu'),
burgerBtn = document.querySelector('.burger-btn');
burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('menu-active');
};//кнопка бургер-меню
let player = document.querySelector(".reverseEffect");
let clicked = false;
player.addEventListener("click", () => {
    if (clicked) {
        player.setDirection(-1);
        clicked = false;
    } else {
        player.setDirection(1);
        clicked = true;
    }
    player.play();
}); 