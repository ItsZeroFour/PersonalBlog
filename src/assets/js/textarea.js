const textArea = document.querySelectorAll("[data-autoresize]");

// Автомотическое увеличение текстового поля
textArea.forEach((item) => {
  let textAreaHeight = item.offsetHeight
  item.addEventListener("input", (event) => {
    let $this = event.target;

    $this.style.height = `${textAreaHeight}px`;
    // Увеличение размера по высоте скролла
    $this.style.height = `${$this.scrollHeight}px`;
  });
});
