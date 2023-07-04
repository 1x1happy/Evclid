window.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector(".burger");
  let body = document.querySelector("body");
  let hidden = document.querySelector(".hidden");
  let header = document.querySelector(".header");
  // let faqDescription = document.querySelector(".section-faq-item-description");
  // let faqContent = document.querySelector(".section-faq-content-heading");

  burger.addEventListener("click", function () {
    body.classList.add("lock");
    header.classList.add("is-active");
    hidden.classList.add("hidden-open");
  });
  hidden.addEventListener("click", function () {
    body.classList.remove("lock");
    header.classList.remove("is-active");
    hidden.classList.remove("hidden-open");
  });
  const swiper = new Swiper(".swiper", {
    loop: true,
  });

  document.querySelectorAll(".section-how-item").forEach(function (howItem) {
    howItem.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document
        .querySelectorAll(".section-how-main")
        .forEach(function (howMain) {
          howMain.classList.remove("how-active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("how-active");
    });
  });

  document
    .querySelectorAll(".section-faq-content-heading")
    .forEach(function (faqItem) {
      faqItem.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path;
        document
          .querySelectorAll(".section-faq-item-description")
          .forEach(function (faqDescription) {
            document
              .querySelector(`[data-target="${path}"]`)
              .classList.toggle("not-active");
          });
      });
    });
});
