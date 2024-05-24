// big-picture.js

let commentsShown = 0;
const COMMENTS_TO_SHOW = 5;
let comments = [];
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const pictureCancel = bigPicture.querySelector('#picture-cancel');

// Функция для отображения комментариев
const renderComments = () => {
  // Сброс отображаемых комментариев при каждом вызове
  socialComments.innerHTML = '';

  // Обновление количества показанных комментариев
  commentsShown = Math.min(commentsShown + COMMENTS_TO_SHOW, comments.length);

  // Отображение комментариев
  comments.slice(0, commentsShown).forEach(({ avatar, message, name }) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = avatar;
    img.alt = name;
    img.width = 35;
    img.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = message;

    commentElement.appendChild(img);
    commentElement.appendChild(text);

    socialComments.appendChild(commentElement);
  });

  // Обновление счетчика комментариев
  socialCommentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;

  // Скрытие или отображение кнопки загрузки комментариев
  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

// Функция для открытия полноразмерного изображения
const openBigPicture = ({ url, likes, comments: photoComments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = photoComments.length;
  socialCaption.textContent = description;

  comments = photoComments;
  commentsShown = 0;
  renderComments();

  // Отображение счетчика комментариев и кнопки загрузки
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onEscPress);
};

// Функция для закрытия полноразмерного изображения
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
};

// Обработчик нажатия клавиши Esc
const onEscPress = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeBigPicture();
  }
};

// Обработчик нажатия на кнопку загрузки комментариев
commentsLoader.addEventListener('click', () => {
  renderComments();
});

// Обработчик нажатия на кнопку закрытия
pictureCancel.addEventListener('click', closeBigPicture);

export { openBigPicture };
