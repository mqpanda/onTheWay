function scrollToAbout(event) {
  if (burgerMenu.classList.contains("menu-active")) {
    burgerMenu.classList.remove("menu-active");
  }

  event.preventDefault(); // Отменяем стандартное поведение ссылки

  const targetElement = document.querySelector(
    event.target.getAttribute('href')
  ); // Получаем элемент, к которому нужно пролистать
  const offset = targetElement.offsetTop - 80; // Считаем позицию с учетом смещения на 50px

  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}

// Получаем все ссылки, к которым есть якорь
const linksWithAnchor = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события для каждой ссылки
linksWithAnchor.forEach((link) => {
  link.addEventListener('click', scrollToAbout);
});


/*
function scrollToBlock(event) {
  // event.stopPropagation()
  

  let href = event.target.getAttribute('href');
  console.log(href);
  const targetElement = document.querySelector(href); // Получаем элемент, к которому нужно пролистать
  targetElement.scrollIntoView({
    top: 100,
    block: "start",
    behavior: 'smooth',
  })
  let offset = targetElement.offsetTop + 80; // Считаем позицию с учетом смещения на 50px

  // if (href == "#form-block") {
  //   offset = targetElement.offsetTop - 300;
  //   console.log(1234);
  // }

}

// Получаем все ссылки, к которым есть якорь
const linksWithAnchor = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события для каждой ссылки
linksWithAnchor.forEach((link) => {
  link.addEventListener('click', scrollToBlock);
});*/