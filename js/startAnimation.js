let svgElements = document.querySelectorAll('svg'),
    svgPath = document.querySelectorAll('svg path'),

    formBlock = document.querySelector(".block_form"),
    benefitBlock = document.querySelector(".block_benefit"),

    animationFormFlag = false,
    animationBenefitFlag = false;


let formAnimCode = '<dotlottie-player src="https://lottie.host/41398e8e-2543-4ac0-8eba-9002e082af3c/cLstUWhBKU.json" background="transparent" speed="1" autoplay></dotlottie-player>';

let benefitAnimCode = '<dotlottie-player src="https://lottie.host/c6345b86-402b-4f59-b9cb-6ecb8d841e8a/1L1G9F5aaq.json" background="transparent" speed="1" style="width: 1300px; height: 500px;" autoplay></dotlottie-player>';

function isInViewport(element) {
    let boundingBox = element.getBoundingClientRect();
    return boundingBox.top < window.innerHeight / 2 && boundingBox.bottom >= 0;
}

function handleScroll() {

    if (isInViewport(formBlock) && !animationFormFlag) {
        formBlock.innerHTML += formAnimCode;
        animationFormFlag = true;
    }
    if (isInViewport(benefitBlock) && !animationBenefitFlag) {
        benefitBlock.innerHTML += benefitAnimCode;
        animationBenefitFlag = true;
    }

    svgElements.forEach((svgElement, index) => {
        if (
            isInViewport(svgElement) &&
            !svgElement.classList.contains('animate')
        ) {
            svgPath[index].classList.add('animate');
        }
    });


}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Вызываем функцию при загрузке страницы