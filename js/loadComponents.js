// Функция для загрузки и вставки HTML компонентов
function loadComponent(url, targetId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const targetElement = document.getElementById(targetId);
      targetElement.innerHTML = html;

      // Загружаем и применяем CSS для компонента
      loadComponentCSS(url.replace('.html', '.css'));
    })
    .catch((error) => console.error('Error loading component:', error));
}

// Функция для загрузки и применения CSS для компонента
function loadComponentCSS(cssUrl) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssUrl;
  document.head.appendChild(link);
}

// Загружаем и вставляем компоненты
window.onload = function () {
  loadComponent('components/header/header.html', 'header');
  // Другие компоненты, если необходимо
};
