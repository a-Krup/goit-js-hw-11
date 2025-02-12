// pixabay-api.js
import axios from 'axios'; // Імпортуємо бібліотеку для HTTP-запитів

// Функція для запиту до API Pixabay
export const fetchImages = async (searchQuery, page = 1) => {
  const API_KEY = '48797096-f4883239ab22667ebb957e7d3'; // Твій унікальний ключ доступу до API
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    // Запит до Pixabay API
    const response = await axios.get(BASE_URL, {
      params: {
        key: '48797096-f4883239ab22667ebb957e7d3',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 9, // Кількість зображень на сторінку
      },
    });

    return response.data.hits; // Повертаємо масив зображень
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; // Викидаємо помилку для подальшого оброблення
  }
};
