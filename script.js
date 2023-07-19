const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

const createNotification = (message = null, type = null) => {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomType()); //Using the passed parameters, if no parameters are passed, get a random message and/or type.
  notification.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
