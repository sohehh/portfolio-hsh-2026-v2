document.querySelectorAll(".template-result").forEach((section) => {
  const slider = section.querySelector(".swiper");
  if (!slider) return;

  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: section.querySelector(".swiper-button-next"),
      prevEl: section.querySelector(".swiper-button-prev"),
    },
  });
});
