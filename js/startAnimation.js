let svgElements = document.querySelectorAll('svg'),
svgPath = document.querySelectorAll('svg path');

let container = document.getElementById('lottie-animation');

// console.log(container);

const animation = lottie.loadAnimation({
    container: container, // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: false, 
    autoplay: false, 
    path: 'https://lottie.host/c8bfe3ba-1930-4ac9-afe8-35c0ea07e912/cV6BwEUmOV.json' 
  });

function isInViewport(element) {
    let boundingBox = element.getBoundingClientRect();
    return boundingBox.top < window.innerHeight/2 && boundingBox.bottom >= 0;
}

function handleScroll() {

    if(isInViewport(container)){
        animation.play();
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