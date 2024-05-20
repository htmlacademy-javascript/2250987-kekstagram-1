// renderThumbnails.js
import { addPhotos } from './data.js';
const photos = addPhotos();
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderThumbnails = () => {
  photos.forEach(({ url, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
