let modal = document.body.querySelector(".modal_wrapper"),
    modalCloseButton = document.body.querySelector(".modal_close_button"),
    submitBtn = document.querySelector("#form-block")

    submitBtn.addEventListener("click", ()=>{
        toggleModal();
        StopScroll();
    });

if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
}




function toggleModal() {
    modal.classList.toggle("is-open");
    window.addEventListener("scroll", StopScroll);
};
function StopScroll() {
    window.scroll(0, 0);
}
function closeModal() {
    modal.classList.remove("is-open");
    window.removeEventListener("scroll", StopScroll);
};
