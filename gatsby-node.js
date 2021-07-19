/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


 const path = require('path');
 const _ = require('lodash');

 // https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
    if (stage === 'build-html' || stage === 'develop-html') {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /scrollreveal/,
              use: loaders.null(),
            },
            // {
            //   test: /animejs/,
            //   use: loaders.null(),
            // },
          ],
        },
      });
    }
  
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@utils': path.resolve(__dirname, 'src/Utils'),
        },
      },
    });
  };
  