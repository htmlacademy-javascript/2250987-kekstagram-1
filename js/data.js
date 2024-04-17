import { getRandomInt } from './util.js';

const COUNT = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const commentNames = ['Артём', 'Мария', 'Дмитрий', 'Елена', 'Алексей', 'Ирина'];

const getComments = () => {
  const commentsCount = getRandomInt(1, 5);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push({
      id: getRandomInt(100, 999),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: commentMessages[getRandomInt(0, commentMessages.length - 1)],
      name: commentNames[getRandomInt(0, commentNames.length - 1)]
    });
  }

  return comments;
};

const addPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: 'some photo',
  likes: getRandomInt(Likes.MIN, Likes.MAX),
  comments: getComments()
});

export const addPhotos = () => {
  const photos = [];

  for (let i = 0; i < COUNT; i++) {
    photos.push(addPhoto(i));
  }

  return photos;
};
