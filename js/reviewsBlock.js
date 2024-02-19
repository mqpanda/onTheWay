let showMoreBtns = document.querySelectorAll(".show-more"); showMoreBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (!e.target.parentNode.classList.contains("show")) {
            e.target.parentNode.classList.add("show");
            e.target.innerHTML = "Свернуть";
        } else {
            e.target.parentNode.classList.remove("show");
            e.target.innerHTML = "Развернуть...";
        }
    });
});
