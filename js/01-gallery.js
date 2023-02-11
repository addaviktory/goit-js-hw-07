import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup)
gallery.addEventListener("click", onGalleryClick);

function createGalleryMarkup(galleryFunction){
    return galleryFunction
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('')
}
function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
  
    const instance = basicLightbox.create(
      `<img width="1400" height="900" src="${event.target.dataset.source}">`,
      {
        onShow: (basicLightbox) => {
          window.addEventListener("keydown", closeModal);
        },
        onClose: (basicLightbox) => {
          window.removeEventListener("keydown", closeModal);
        },
      }
    );
    instance.show();
  
    function closeModal(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
  }