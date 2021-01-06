// files moved to gatsby-dome.esm.js due to gatsby import issues
// see this thread https://github.com/gatsbyjs/gatsby/issues/7810

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const albumRoutes = [
  {
    id: 'zeus',
  },
  {
    id: 'druid-lizard',
  },
  {
    id: 'avenger',
  },
  {
    id: 'hypnosis',
  },
  {
    id: 'spaceship-earth',
  },
  {
    id: 'banana-phantom',
  },
  {
    id: 'interglactic',
  },
  {
    id: 'starchaser',
  },
  {
    id: 'mothership',
  },
  {
    id: 'dinosaur',
  },
  {
    id: 'yowie',
  },
  {
    id: 'sloth',
  },
  {
    id: 'androids',
  },
  {
    id: 'mindbandit',
  },
  {
    id: 'apollo',
  },
  {
    id: 'deserthawk',
  },
  {
    id: 'transdimensional-octagon',
  },
];

exports.createPages = ({ actions: { createPage } }) => {
  albumRoutes.forEach(albumRoute => {
    createPage({
      path: `/stream/${albumRoute.id}/`,
      component: require.resolve('./src/components/StreamList/index.tsx'),
      context: {
        albumRoute,
      },
    });
  });
};
