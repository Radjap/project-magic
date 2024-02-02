$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();
    $(this).find(".program__acc-head").toggleClass("active");

    $(this).children(".program__acc-text").slideToggle();
  });

  // $(document).ready(function () {
  //   // Добавить плавную прокрутку до всех ссылок
  //   $(".contact__center-up").on("click", function (event) {
  //     // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
  //     if (this.hash !== "") {
  //       // Запретить поведение щелчка якоря по умолчанию
  //       event.preventDefault();

  //       // Хранить хэш
  //       var hash = this.hash;

  //       // Использование метода animate() jQuery для добавления плавной прокрутки страницы
  //       // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
  //       $("html, body").animate(
  //         {
  //           scrollTop: $(hash).offset().top,
  //         },
  //         20000,
  //         function () {
  //           // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
  //           window.location.hash = hash;
  //         }
  //       );
  //     } // Конец, если
  //   });
  // });
});

// document.querySelector(".toggle-btn").addEventListener("click", function () {
//   document.querySelector(".hidden-content").classList.toggle("active");
// });

// function toggleList(header) {
//   var listContainer = header.parentNode;
//   var list = listContainer.querySelector(".list-items");
//   var icon = header.querySelector(".icon");

//   list.classList.toggle("open");
//   header.classList.toggle("open");
//   icon.style.transform =
//     icon.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
// }
// function handleFruitChange() {
//   const selectElement = document.getElementById("fruits");
//   const selectedFruit = selectElement.value;
//   alert("Вы выбрали: " + selectedFruit);
// }
