// main.js
import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';

renderThumbnails();

document.querySelector('.pictures').addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (!picture) return;

  evt.preventDefault();

  const url = picture.querySelector('.picture__img').src;
  const likes = picture.querySelector('.picture__likes').textContent;
  const commentsCount = picture.querySelector('.picture__comments').textContent;

  // Здесь должны быть данные о комментариях и описании, которые должны передаваться в функцию openBigPicture
  // Поскольку их пока нет, использую случайные данные
  const comments = [
    { avatar: 'img/avatar-1.svg', message: 'Отличное фото!', name: 'Вася' },
    { avatar: 'img/avatar-2.svg', message: 'Здорово!', name: 'Петя' },
  ];
  const description = 'Это описание фотографии';

  openBigPicture({ url, likes, comments, description });
});
