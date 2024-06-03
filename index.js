const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = `7192524376:AAGe8MhzT-tDSJeuoBE3DGc-dy5M0PXrcpE`;

// Создаём бота
const bot = new TelegramBot(token, { polling: true });

// Клавиатура с кнопками
function showMainMenu(chatId) {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Просмотр фотографий', callback_data: 'photo' }],
          [{ text: 'Показать местоположение', callback_data: 'location' }],
          [{ text: 'Забронировать', callback_data: 'book' }],
          // Добавьте другие кнопки основного меню, если нужно
        ]
      }
    };
  
    bot.sendMessage(chatId, 'Выберите опцию:', options);
};

bot.onText(/^\/start/, (msg) => {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Просмотр фотографий', callback_data: 'photo' }],
          [{ text: 'Показать местоположение', callback_data: 'location' }],
          [{ text: 'Забронировать', callback_data: 'book' }],
          // Добавьте другие кнопки основного меню, если нужно
        ]
      }}
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Здраствуйте! Я могу Вам помоч забронировать шикарные аппатраменты в Центре Санкт-Птербурга по адресу: ул. Кирочная, д.11.', options);
});
// Обработчик нажатий на кнопки
bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data;
    const  backButton = {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Вернуться в основное меню', callback_data: 'backToMenu' }]
          ]
        }
      };

    
    function retMainMenu(){return bot.sendMessage(chatId, 'Выберите действие:', backButton)}

    function createCalendar(){
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
      
        // Получаем количество дней в месяце
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      
        // Создаем массив кнопок
        let buttons = [];
        for (let day = 1; day <= daysInMonth; day++) {
          buttons.push([{ text: `${day}`, callback_data: `chooseDate_${day}` }]);
        }
      
        return {
          reply_markup: {
            inline_keyboard: buttons
          }
        };
      }
    


    switch (data) {
      case 'photo':
        // Массив с URL фотографий
        const photos = [
            'https://sun9-30.userapi.com/impg/m2jZdyC09L2ZWsf5eIzxxdhrJ9DI19J-xGXTnQ/1dAEAqAb75k.jpg?size=640x640&quality=95&sign=f8d90c32c87fe52dd47abd3cb522b4e0&type=album', // Замените на реальный URL фотографии
            'https://sun9-12.userapi.com/impg/gc8nXlc_kylCH_xQJ2IY9bXLOhTa1tA9YmifMQ/67iBRVOwQoI.jpg?size=1280x853&quality=95&sign=61a1f6049d4fb6d2fe07aed80daa344c&type=album', // Замените на реальный URL фотографии
            'https://sun9-77.userapi.com/impg/fjq5CKauWCz0MmvU03xYCciioeAjCe9NHmqN-Q/gwlAJDSfE9c.jpg?size=1280x853&quality=95&sign=c4bc58373976506374370e8a2d9298b4&type=album', // Замените на реальный URL фотографии
            'https://sun9-39.userapi.com/impg/A2GiC5KU8YclBseHBHKYh-JKEa-hbzPSSZY1eQ/0X1922wTXTc.jpg?size=1280x853&quality=95&sign=ab6e706bd989ef43bff4dff4e1364404&type=album', // Замените на реальный URL фотографии
        ];

        // Создаем массив объектов для отправки
        let  mediaGroup = photos.map(photo => ({
            type: 'photo',
            media: photo
        }));

        // Отправляем группу фотографий
        bot.sendMediaGroup(message.chat.id, mediaGroup)
            .then(()=>{
                retMainMenu()})
            .catch(error => {
                console.log(error); // Логируем ошибку, если что-то пошло не так
            bot.sendMessage(message.chat.id, 'Произошла ошибка при отправке фотографий.');
            
        });
        break;
      case 'location':
        const latitude = 59.943791;
        const longitude = 30.354559;
        bot.sendLocation(message.chat.id, latitude, longitude)
            .then(()=>{
                retMainMenu()})
            .catch(error => {
                console.log(error); // Логируем ошибку, если что-то пошло не так
                bot.sendMessage(message.chat.id, 'Произошла ошибка при отправке местоположения.');
        });
        break;
      case 'book':
        const calendarKeyboard = createCalendar();
        bot.sendMessage(message.chat.id, 'Выберите дату бронирования:', calendarKeyboard);
        break;
      case 'backToMenu':
        // Показываем основное меню
        showMainMenu(chatId);
        break
    }
  });

// Обработчик текстовых сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toLowerCase().includes('сдать квартиру')) {
    // Здесь может быть логика бронирования или показа информации о квартирах
    bot.sendMessage(chatId, 'Отлично! Для бронирования квартиры отправьте мне название города и даты.');
  }
});

// Здесь можете добавить больше обработчиков для различных команд и сообщений
