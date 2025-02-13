// main.js
import { fetchImages } from './js/pixabay-api';
import { renderImages, toggleLoadingIndicator } from './js/render-functions';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const searchQuery = document.querySelector('.form-input').value.trim(); // Отримуємо пошуковий запит

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
      timeout: 5000,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut'
    });
    return; // Якщо поле пошуку порожнє, виводимо попередження
  }

  toggleLoadingIndicator(true); // Показуємо індикатор завантаження перед запитом

  try {
    const images = await fetchImages(searchQuery);
    
    // Затримка 10 секунд для анімації лоадера
    await new Promise(resolve => setTimeout(resolve, 10000)); // Затримка в 10 секунду для анімації лоадера, щоб не було занадто довго.

    renderImages(images); // Рендеримо зображення після отримання даних
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
      timeout: 5000,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut'
    });
  } finally {
    toggleLoadingIndicator(false); // Ховаємо індикатор завантаження після завершення запиту
  }
});
