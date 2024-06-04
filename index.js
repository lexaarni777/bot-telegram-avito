const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = `7192524376:AAGe8MhzT-tDSJeuoBE3DGc-dy5M0PXrcpE`;

// Создаём бота
const bot = new TelegramBot(token, { polling: true });

// Клавиатура с кнопками
function showMainMenu(chatId) {
    const photoUrl = 'https://sun9-61.userapi.com/impg/tKEeq8GTVrv_41_QCM1JEa2ppIqEnNAfDo8qaA/tT8e4gsINUQ.jpg?size=1261x473&quality=95&sign=41f98123fdc7990e0e624ebb72448f83&type=album'; 
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'ул. Кирочная д.11 (ВИНТАЖ)', callback_data: 'kirr11v' }],
          [{ text: 'ул. Кирочная д.11 (ЛОФТ)', callback_data: 'kirr11l' }]
          // Добавьте другие кнопки основного меню, если нужно
        ]
      }
    };
    bot.sendPhoto(chatId, photoUrl)
    .then(() => {
        // После успешной отправки фотографии отправляем главное меню
        bot.sendMessage(chatId, 'Для продолжения выберите Ваши апартаменты:', options);
    })
    .catch(error => {
        console.log(error); // Логируем ошибку, если что-то пошло не так
        bot.sendMessage(chatId, 'Произошла ошибка при отправке фотографии.');
    });
};

function showApartmentMenukirr11v(chatId) {
  
  const options = {
      reply_markup: {
          inline_keyboard: [
              [{ text: 'Wi-Fi', callback_data: 'wifi' }],
              [{ text: 'Инструкция по размещению', callback_data: 'ruleskirr11v' }],
              [{ text: 'Контакты', callback_data: 'contacts' }],
              [{ text: 'Вернуться в основное меню', callback_data: 'backToMenu' }]
          ]
      }
  };

  bot.sendMessage(chatId, 'ул. Кирочная д.11 (ВИНТАЖ)\nВыберите необходимый пункт меню:', options);
};

function showMainshowApartmentMenuruleskirr11l(chatId) {
  const photoUrl = 'https://sun9-25.userapi.com/impg/xx9MKtITcOpFU8ci4-9dxAfJIS5DCQjF-tmokg/H8j0xQ2-4_Y.jpg?size=707x2160&quality=95&sign=e0821df54df3ac15a670db375271e412&type=album'; 
  
  bot.sendPhoto(chatId, photoUrl)
  .then(() => {
      // После успешной отправки фотографии отправляем главное меню
      bot.sendMessage(chatId, 'Выберете опцию',{
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Вернуться назад', callback_data: 'kirr11l' }]
            ]
        }
    })

  })
  .catch(error => {
      console.log(error); // Логируем ошибку, если что-то пошло не так
      bot.sendMessage(chatId, 'Произошла ошибка при отправке фотографии.');
  });
};

function showMainshowApartmentMenuruleskirr11v(chatId) {
  const photoUrl = 'https://sun9-25.userapi.com/impg/xx9MKtITcOpFU8ci4-9dxAfJIS5DCQjF-tmokg/H8j0xQ2-4_Y.jpg?size=707x2160&quality=95&sign=e0821df54df3ac15a670db375271e412&type=album'; 
  
  bot.sendPhoto(chatId, photoUrl)
  .then(() => {
      // После успешной отправки фотографии отправляем главное меню
      bot.sendMessage(chatId, 'Выберете опцию',{
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Вернуться назад', callback_data: 'kirr11v' }]
            ]
        }
    });

  })
  .catch(error => {
      console.log(error); // Логируем ошибку, если что-то пошло не так
      bot.sendMessage(chatId, 'Произошла ошибка при отправке фотографии.');
  });
};

function showApartmentMenukirr11l(chatId) {
  
  const options = {
      reply_markup: {
          inline_keyboard: [
              [{ text: 'Wi-Fi', callback_data: 'wifi' }],
              [{ text: 'Инструкция по размещению', callback_data: 'ruleskirr11l' }],
              [{ text: 'Контакты', callback_data: 'contacts' }],
              [{ text: 'Вернуться в основное меню', callback_data: 'backToMenu' }]
          ]
      }
  };

  bot.sendMessage(chatId, 'ул. Кирочная д.11 (ЛОФТ)\nВыберите необходимый пункт меню:', options);
};



bot.onText(/^\/start/, (msg) => {
  const chatId = msg.chat.id;
  const photoUrl = 'https://sun9-61.userapi.com/impg/tKEeq8GTVrv_41_QCM1JEa2ppIqEnNAfDo8qaA/tT8e4gsINUQ.jpg?size=1261x473&quality=95&sign=41f98123fdc7990e0e624ebb72448f83&type=album'; 
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'ул. Кирочная д.11 (Винтаж)', callback_data: 'kirr11v' }],
          [{ text: 'ул. Кирочная д.11 (Лофт)', callback_data: 'kirr11l' }]
          // Добавьте другие кнопки основного меню, если нужно
        ]
      }}
      bot.sendPhoto(chatId, photoUrl)
      .then(() => {
          // После успешной отправки фотографии отправляем главное меню
          bot.sendMessage(chatId, 'Здраствуйте! Я Бот который поможет Вам с информмацией по размещению в наших апартаментах FLATS.\nДля продолжения выберите Ваши апартамнты', options);;
      })
      .catch(error => {
          console.log(error); // Логируем ошибку, если что-то пошло не так
          bot.sendMessage(chatId, 'Произошла ошибка при отправке фотографии.');
      });
  
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

    switch (data) {
      case 'backToMenu':
        // Показываем основное меню
        showMainMenu(chatId);
        break;
      case 'kirr11v':
        showApartmentMenukirr11v(chatId);
        break;
      case 'kirr11l':
        showApartmentMenukirr11l(chatId);
        break;  
      case 'wifi':
            // Информация о Wi-Fi
            const wifiInfo = 'Информация о Wi-Fi:\nLogin: Vlad\nPassword: 89050646663';
            bot.sendMessage(chatId, wifiInfo, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Вернуться назад', callback_data: 'backToMenu' }]
                    ]
                }
            });
            break;
      case 'backToApartmentMenu':
            // Показываем подменю апартаментов
            showApartmentMenu(chatId);
            break;
      case 'ruleskirr11l':
        showMainshowApartmentMenuruleskirr11l(chatId);
        break;
      case 'ruleskirr11v':
        showMainshowApartmentMenuruleskirr11v(chatId);
        break;
      case 'contacts':
        const contactsInfo = 'Телефон для связи с администратором:\n +7-995-932-40-22 ';
        bot.sendMessage(chatId, contactsInfo, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Вернуться назад', callback_data: 'backToMenu' }]
                ]
            }
        });
          break;
      
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
