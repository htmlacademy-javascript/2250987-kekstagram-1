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

let commentsShown = 0;
const COMMENTS_TO_SHOW = 5;
let comments = [];

const renderComments = () => {
  commentsShown += COMMENTS_TO_SHOW;
  const currentComments = comments.slice(0, commentsShown);

  socialComments.innerHTML = '';
  currentComments.forEach(({ avatar, message, name }) => {
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

  socialCommentCount.textContent = `${currentComments.length} из ${comments.length} комментариев`;

  if (currentComments.length >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const openBigPicture = ({ url, likes, comments: photoComments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = photoComments.length;
  socialCaption.textContent = description;

  comments = photoComments;
  commentsShown = 0;
  renderComments();

  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onEscPress);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
};

const onEscPress = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeBigPicture();
  }
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

pictureCancel.addEventListener('click', closeBigPicture);

export { openBigPicture };
