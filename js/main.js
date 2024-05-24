// main.js
import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { addPhotos } from './data.js';

renderThumbnails();

const photos = addPhotos();

document.querySelector('.pictures').addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (!picture) return;

  evt.preventDefault();

  const pictureId = parseInt(picture.dataset.id, 10);
  const photo = photos.find((p) => p.id === pictureId);

  if (photo) {
    openBigPicture({
      url: photo.url,
      likes: photo.likes,
      comments: photo.comments.map(comment => ({
        avatar: 'img/avatar-1.svg',
        message: comment,
        name: 'Автор'
      })),
      description: photo.description
    });
  }
});
