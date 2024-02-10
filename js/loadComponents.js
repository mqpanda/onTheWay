// Функция для загрузки и вставки HTML компонентов
function loadComponent(url, targetId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const targetElement = document.getElementById(targetId);
      targetElement.innerHTML = html;
    })
    .catch((error) => console.error('Error loading component:', error));
}

// Загружаем и вставляем компоненты
window.onload = function () {
  loadComponent('components/header/header.html', 'header');
  loadComponent('components/footer/footer.html', 'footer');
  // Другие компоненты, если необходимо
};
