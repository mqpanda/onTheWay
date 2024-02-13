let checkbox = document.querySelector(".form-ckbox"), 
label = document.querySelector("label[for='ckbox']");

if (checkbox.checked) {
    
    label.classList.add("unchecked");
}

// if (!($("#ckbox").is(':checked'))) {
//     $("label[for='ckbox']").addClass("unchecked");
// }