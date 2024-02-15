let showMoreBtns = document.querySelectorAll(".show-more");

showMoreBtns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        e.target.previousSibling.style.webkitLineClamp = "none";
        e.target.parentNode.style.height = "fit-content";
    });
});