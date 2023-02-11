import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup)
gallery.addEventListener("click", onGalleryClick);
console.log(onGalleryClick)

function createGalleryMarkup(galleryFunction){
    return galleryFunction
    .map(({ preview, original, description }) => {
        return `
       <li><a class="gallery__item" href="${original}">
        <img src="${preview}" alt="${description}" class="gallery__image">
       </a></li>
     `;
      })
      .join("");
}
function onGalleryClick(event){
    event.preventDefault();
    const lightBox = new SimpleLightbox(".gallery__item", {
        captionDelay: 250,
        captionsData: "alt",
        scrollZoom: false,
      });
}

