const axios = require('axios');
const qs = require('qs');

const client_id = 'LQDUbblXq_xoMn2y0uuj';
const client_secret = 'SRKAie_l4TK70acas4jYBkXFiIWluYWM8YjFsXAh';
const token_url = 'https://api.avito.ru/token'; // Token URL, как вы указали

// Получаем Access Token
axios.post(token_url, qs.stringify({
  client_id: client_id,
  client_secret: client_secret,
  grant_type: 'client_credentials' // Тип авторизации для получения токена без пользователя, если требуется
}), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(response => {
  const accessToken = response.data.access_token;

  // Здесь вы должны подставить соответствующий user_id и item_id
  const user_id = '376484894'; // Подставьте ID пользователя
  const item_id = '3964456145'; // Подставьте ID объекта

  // Используйте свой API endpoint для запроса данных о бронировании
  const bookings_url = `https://api.avito.ru/realty/v1/accounts/${user_id}/items/${item_id}/bookings`;

  // Здесь делаем запрос на получение данных о бронированиях
  return axios.get(bookings_url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
})
.then(response => {
  // Обработка полученных данных о бронированиях
  console.log('Данные о бронированиях получены:', response.data);
})
.catch(error => {
  // Обработка возможных ошибок запроса
  console.error('Произошла ошибка:', error);
});
