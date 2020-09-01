import telebot
import config
import datetime

now = datetime.datetime.now()
password = False
from telebot import types
bot = telebot.TeleBot(config.TOKEN)

tt = []
ttstr = 'Пусто('
@bot.message_handler(commands=['start'])
def welcome(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton("Завтрашнее расписание")
    markup.add(item1)
    bot.send_message(message.chat.id, "Добро пожаловать, {0.first_name}!\nЯ - <b>{1.first_name}</b>, бот, который умеет отправлять Вам расписание уроков 10 класса!".format(message.from_user,bot.get_me()),
        parse_mode='html', reply_markup = markup)

@bot.message_handler(content_types=['text'])
def lalala(message):
    global password
    global ttstr
    global tt
    data = 0
    if message.chat.type == 'private':
        data = now.day
        
        if message.text == '1xerrd':
            password = True
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton("Обновить завтрашнее расписание")
            item2 = types.KeyboardButton("Посмотреть расписание")
            item3 = types.KeyboardButton("Очистить расписание")


            markup.add(item1, item2, item3)
            bot.send_message(message.chat.id, 'Добро пожаловать в подвал. Что хотите сделать: ', reply_markup = markup)

        elif message.text == 'Обновить завтрашнее расписание' and password:


            ttstr = 'Пусто('

            markup = types.InlineKeyboardMarkup(row_width=2)
            item1 = types.InlineKeyboardButton("Русский язык", callback_data='rus')
            item2 = types.InlineKeyboardButton("Математика", callback_data='math')
            item3 = types.InlineKeyboardButton("Литература", callback_data='lit')
            item4 = types.InlineKeyboardButton("Физика", callback_data='phys')
            item5 = types.InlineKeyboardButton("Информатика", callback_data='inf')
            item6 = types.InlineKeyboardButton("Немецкий яз.", callback_data='deutsch')
            markup.add(item1, item2, item3, item4, item5, item6)
            bot.send_message(message.chat.id, 'Добавьте предметы', reply_markup = markup)
        elif message.text == 'Завтрашнее расписание' or message.text == "Посмотреть расписание":
            bot.send_message(message.chat.id, ttstr)
        elif message.text == "Очистить расписание":
            ttstr = 'Пусто...'
            bot.send_message(message.chat.id, ttstr)
        elif data != now.day:
            ttstr = 'Пустоо'
        else:
            bot.send_message(message.chat.id, 'Я пока не умею отвечать на этот запрос. Мой ПОВЕЛИТЕЛЬ вскоре добавит эту возможность... Ладно?')
        

   
@bot.callback_query_handler(func=lambda call: True)
def callback_inline(call):
    global tt
    global ttstr
    try:
        if call.message:
            if call.data == 'rus':
                tt.append('Русский язык')
                bot.send_message(call.message.chat.id, 'Выполнено')

            elif call.data == 'math':
                tt.append('Математика')
                bot.send_message(call.message.chat.id, 'Выполнено')

            elif call.data == 'lit':
                tt.append('Литература')
                bot.send_message(call.message.chat.id, 'Выполнено')

            elif call.data == 'phys':
                tt.append('Физика')
                bot.send_message(call.message.chat.id, 'Выполнено')

            elif call.data == 'inf':
                tt.append('Информатика')
                bot.send_message(call.message.chat.id, 'Выполнено')

            elif call.data == 'deutsch':
                tt.append('Немецкий язык')
                bot.send_message(call.message.chat.id, 'Выполнено')

            ttstr = ', '.join(tt)
            #remove inline buttons
            #bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text="Ага",
            #    reply_markup=None)

            #bot.answer_callback_query(chat_id=call.message.chat.id, show_alert=False,
            #    text = "Это тестовое уведомление")
    except Exception as e:
        print(repr(e))

bot.polling(none_stop=True)
