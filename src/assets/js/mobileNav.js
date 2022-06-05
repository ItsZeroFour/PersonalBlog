// Get Elements
const burger = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const page = document.getElementById("page");
// body
const body = document.body;

// Добавляем событие на клик по бургер-меню
burger.addEventListener("click", (event) => {
  // Проверяем, есть ли класс show-sidebar у body
  if (body.classList.contains("show-sidebar")) {
    // Если есть - удаляем
    closeSidebar();
  } else {
    // Если нет - добавляем
    showSidebar();
  }
});

// Функция открытия меню
function showSidebar() {
  // Создаем саму маску
  let mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar);
  // Добавляем ее в page
  page.appendChild(mask);

  // Выдаем body класс show-sidebar
  body.classList.add("show-sidebar");
}

// Функция закрытия меню
function closeSidebar() {
  body.classList.remove("show-sidebar");
  document.querySelector(".page__mask").remove();
}
