

const COUNT = 25;
const Likes = { // Enum
    MIN: 15,
    MAX: 200
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); // 0.454654654654689

const addPhoto = (index) => ({
    id: index,
    url: `photos/${index + 1}.jpg`,
    description: 'some photo',
    likes: getRandomInt(Likes.MIN, Likes.MAX),
    comments: getComments()
});

const commentMessages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];
const commentNames = ["Артём", "Мария", "Дмитрий", "Елена", "Алексей", "Ирина"];

const getComments = () => {
  const commentsCount = getRandomInt(1, 5); // предположим, что у каждой фотографии будет от 1 до 5 комментариев
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
      comments.push({
          id: getRandomInt(100, 999), // генерируем случайный ID для комментария
          avatar: `img/avatar-${getRandomInt(1, 6)}.svg`, // случайно выбираем аватар
          message: commentMessages[getRandomInt(0, commentMessages.length - 1)], // случайно выбираем сообщение для комментария
          name: commentNames[getRandomInt(0, commentNames.length - 1)] // случайно выбираем имя автора комментария
      });
  }

  return comments;
};

// функция addPhotos для создания массива фотографий с комментариями
const photos = addPhotos();
console.log(photos);



// const addPhotos = () => Array.from({length: COUNT}, (_, index) => addPhoto(index));

const addPhotos = () => {
    const photos = [];

    for (let i = 0; i < COUNT; i++) {
        photos.push(addPhoto(i));
    }

    return photos;
};

const photos = addPhotos();

console.log(photos);

export {photos};



/* Map
[1,2,3].map((item, index, arr) => {
    return item + 1;
}); //[2,3,4]

const a = [1,2,3,4,5];

a[getRandomInt(0, (a.length - 1))]

*/
