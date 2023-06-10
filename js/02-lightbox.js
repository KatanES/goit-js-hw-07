import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryCard = galleryItems.map(
  (galleryItems) =>
    `

<li class="gallery__item">
   <a class="gallery__link" href=${galleryItems.original}>
      <img class="gallery__image" src=${galleryItems.preview} alt=${galleryItems.description} />
   </a>
</li>`
);
gallery.insertAdjacentHTML("beforeend", makeGalleryCard.join(""));

gallery.addEventListener("click", onClick);

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });

function onClick(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
