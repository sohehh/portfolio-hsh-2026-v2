const $imageModal = $("#image-scale-modal");
const $modalImage = $imageModal.find(".modal__img");
const $htmlBody = $("html, body");

function onImageZoomInClick() {
  const imageSrc = $(this).attr("src");
  const imageAlt = $(this).attr("alt") || "";

  $modalImage.attr({
    src: imageSrc,
    alt: imageAlt,
  });

  scrollDisable();
  $imageModal.fadeIn(150);
}

function closeImageModal() {
  $imageModal.fadeOut(150, function () {
    $modalImage.attr({
      src: "",
      alt: "",
    });
  });

  scrollAble();
}

function onModalCloseClick() {
  closeImageModal();
}

function onModalOverlayClick(e) {
  if (e.target === this) {
    closeImageModal();
  }
}

function onDocumentKeydown(e) {
  if (e.key === "Escape" && $imageModal.is(":visible")) {
    closeImageModal();
  }
}

$(document)
  .on("click", ".js-img-zoomIn", onImageZoomInClick)
  .on("click", ".js-modal-close", onModalCloseClick)
  .on("click", ".modal-overlay--image", onModalOverlayClick)
  .on("keydown", onDocumentKeydown);

function scrollDisable() {
  $("html, body")
    .addClass("hidden")
    .on(
      "scroll.imageModal touchmove.imageModal mousewheel.imageModal",
      function (e) {
        e.preventDefault();
      },
    );
}

function scrollAble() {
  $("html, body").removeClass("hidden").off(".imageModal");
}
