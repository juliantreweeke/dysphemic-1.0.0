const druidImage = require('../src/images/covers/druid.jpeg');
const zeusImage = require('../src/images/covers/zeus.jpg');

export const musicList = [
  {
    id: 'zeus',
    title: 'Zeus',
    year: 2017,
    downloadLink: 'http://www.google.com',
    image: zeusImage,
    type: 'Album',
    links: {
      bandcamp: 'https://music.gravitasrecordings.com/album/zeus',
      spotify: 'https://open.spotify.com/album/3LT5NB6EnkoanZltALVCMB',
      soundcloud: 'https://soundcloud.com/dysphemic0/sets/zeus-1',
      iTunes:
        'https://itunes.apple.com/au/album/zeus/1268176740?app=itunes&ign-mpt=uo%3D4',
      youtube: 'https://www.youtube.com/watch?v=75EdfeKrPNU',
      appleMusic:
        'https://itunes.apple.com/us/album/zeus/id1268176740?app=music&ign-mpt=uo%3D4',
    },
  },
  {
    id: 'druid-lizard',
    title: 'Druid Lizard',
    year: 2015,
    downloadLink: 'http://www.google.com',
    image: druidImage,
    type: 'Single',
    links: {
      soundcloud:
        'https://soundcloud.com/dysphemic0/druid-lizard-feat-yiani-treweeke-free-dl',
    },
  },
];
