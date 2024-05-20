// data.js
const Likes = {
  MIN: 15,
  MAX: 200
};

const COUNT = 25;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getComments = () => {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return Array.from({ length: getRandomInt(1, 5) }, () => comments[getRandomInt(0, comments.length - 1)]);
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
