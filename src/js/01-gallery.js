// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// code from HW7
const gallery = document.querySelector('.gallery');
// create gallery of divs with imgs from galleryItems

const createGallery = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    let galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item');
    galleryLink.href = galleryItems[i].original;

    let galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = galleryItems[i].preview;
    galleryImg.alt = galleryItems[i].description;

    gallery.append(galleryLink);
    galleryLink.append(galleryImg);
  }
  console.log("I've created a gallery of small imgs");
};
//execute function
createGallery();

// point to SimpleLightbox which elements we want to handle
// in object include options
const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  enableKeyboard: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
