// files moved to gatsby-dome.esm.js due to gatsby import issues
// see this thread https://github.com/gatsbyjs/gatsby/issues/7810

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
];

exports.createPages = async ({ actions: { createPage } }) => {
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
