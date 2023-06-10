import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", () => {});

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
  basicLightbox
    .create(
      `
    <img src=${target.dataset.source} width="100%" height="100%">
    </img>
`
    )
    .show();
});

console.log(makeGalleryCard);
