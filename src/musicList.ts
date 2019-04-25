const druidImage = require('../src/images/covers/druid.jpeg');
const zeusImage = require('../src/images/covers/zeus.jpg');
const avengerImage = require('../src/images/covers/avenger.jpg');
const hypnosisImage = require('../src/images/covers/hypnosis.jpg');

export const musicList = [
  {
    id: 'zeus',
    title: 'Zeus',
    year: 2017,
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
    year: 2016,
    image: druidImage,
    type: 'Single',
    links: {
      soundcloud:
        'https://soundcloud.com/dysphemic0/druid-lizard-feat-yiani-treweeke-free-dl',
    },
  },
  {
    id: 'avenger',
    title: 'Avenger',
    year: 2016,
    image: avengerImage,
    type: 'EP',
    links: {
      soundcloud: 'https://soundcloud.com/dysphemic0/sets/avenger-ep',
      bandcamp: 'https://futurefunkmusic.bandcamp.com/album/ffdnb052',
    },
  },
  {
    id: 'hypnosis',
    title: 'Hypnosis',
    year: 2011,
    image: hypnosisImage,
    type: 'Album',
    links: {
      bandcamp: 'https://dysphemic.bandcamp.com/album/hypnosis',
      spotify: 'https://open.spotify.com/album/3CRNc2fnJmSHj502yTCOZW',
      beatport: 'https://www.beatport.com/release/hypnosis/307112',
    },
  },
];
