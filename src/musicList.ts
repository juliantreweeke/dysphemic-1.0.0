// import DruidImage from '../src/images/covers/druid.jpeg';
// import ZeusImage from '../src/images/covers/zeus.jpg';

const druidImage = require('../src/images/covers/druid.jpeg');
const zeusImage = require('../src/images/covers/zeus.jpg');

export const musicList = [
  {
    id: 'zeus',
    title: 'Zeus',
    year: 2017,
    downloadLink: 'http://www.google.com',
    image: zeusImage,
    type: 'album',
  },
  {
    id: 'druid-lizard',
    title: 'Druid Lizard',
    year: 2015,
    downloadLink: 'http://www.google.com',
    image: druidImage,
    type: 'single',
  },
];

// export const musicListWithoutImages = musicList.map( (album) => {
//   return { ...album, image:undefined}
// })
