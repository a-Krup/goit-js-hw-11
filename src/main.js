import { fetchImages } from './js/pixabay-api';
import { renderImages, toggleLoadingIndicator } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = document.querySelector('.form-input').value.trim();

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
      timeout: 5000,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut',
    });
    return;
  }

  gallery.innerHTML = '';
  toggleLoadingIndicator(true);

  try {
    const images = await fetchImages(searchQuery);

    await new Promise(resolve => setTimeout(resolve, 2000));

    renderImages(images);

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();

    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    nextButton.addEventListener('click', () => {
      lightbox.next();
    });

    prevButton.addEventListener('click', () => {
      lightbox.prev();
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
      timeout: 5000,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut',
    });
  } finally {
    toggleLoadingIndicator(false);
  }
});
