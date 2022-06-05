// Поиск дата-аттрибутов
const modalBtn = document.querySelectorAll("[data-modal]");
// Получаем тэг body
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");

// Функция открытия модальных окон
modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    // currentTarget - получаем весь блок, а не только тот элемент, на который нажал
    let $this = event.currentTarget;
    // Получаем дата-аттрибут data-modal
    let modalID = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalID);
    let modalContent = modal.querySelector(".modal__content");

    // Клик по дочерним элементам модального окна не будет вызывать события у родителя
    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    // Добавляем класс по открытию модального окна
    modal.classList.add("show");
    // Добавляем класс, который не дет скроллить
    body.classList.add("no-scroll");

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 1);
  });
});

// Функция закрытия модальных окон по крестику
modalClose.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Ищем ближайшего родителя с классом modal
    let currenModal = event.currentTarget.closest(".modal");

    closeModal(currenModal);
  });
});

// Функция закрытия модальных окон по клику вне модального окна

modal.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currenModal = event.currentTarget;

    closeModal(currenModal);
  });
});

// Функция по закрытию модального окна
function closeModal(currenModal) {
  let modalContent = currenModal.querySelector(".modal__content");
  modalContent.removeAttribute("style");

  setTimeout(() => {
    currenModal.classList.remove("show");
    body.classList.remove("no-scroll");
  }, 200);
}
