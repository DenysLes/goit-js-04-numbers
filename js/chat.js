// Напишіть скрипт який перевіряє можливість відкрити чат з користувачем
// длЯ ЦЬОГО КОРИСТУВАЧ ПОВИНЕН бути:
// -другом
// -онлайн
// -без режиму "НЕ ТУРБУВАТИ"
const isOnLine = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnLine && isFriend && !isDnd;
console.log(`Можно відкрити чат? `, canOpenChat);