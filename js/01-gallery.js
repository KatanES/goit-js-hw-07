import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const makeGalleryCard = galleryItems.map(
  (galleryItems) =>
    `<li class="gallery__item">
  <a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image "
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>
</li>`
);
gallery.insertAdjacentHTML("beforeend", makeGalleryCard.join(""));

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  if (target.dataset.source) {
    console.log("click");
  }

  if (target.dataset.source !== "Img") {
    return;
  }
  //   basicLightbox
  //     .create(
  //       `
  //     <img src=${target.dataset.source} width="100%" height="100%">
  //     </img>
  // `
  //     )
  //     .show();

  const modalGallery = `<img
        width=100%"
        height="100%"
        src = ${e.target.dataset.source}
      >`;

  let modalImg;

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") modalImg.close();
  };
  modalImg = basicLightbox.create(modalGallery, {
    onShow: () => gallery.addEventListener("keydown", onEscKeyPress),
  });
  modalImg.show();
});
// console.log(makeGalleryCard);

// function closeModal() {
//   gallery.style.display = "none";
// }

// gallery.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeModal();
//   }
// });

// gallery.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     e.close();
//   }
// });
