const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
              wrapperStyle:
                'margin-left: 0!important; margin-right: 0!important;',
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto mono']
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        name: 'www',
        path: path.join(__dirname, '../../www/')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'www',
        path: path.join(__dirname, '../../www/')
      }
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-mdx']
      }
    }
  ]
}
