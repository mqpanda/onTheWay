let svgElements = document.querySelectorAll('svg'),
svgPath = document.querySelectorAll('svg path');

function isInViewport(element) {
    let boundingBox = element.getBoundingClientRect();
    return boundingBox.top < window.innerHeight/2 && boundingBox.bottom >= 0;
}

function handleScroll() {
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