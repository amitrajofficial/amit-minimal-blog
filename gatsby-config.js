require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Amit Yadav`,
    siteHeadline: `Amit Yadav | Software Developer | Digital Media Marketing Expert`,
    siteTitleAlt: `Amit Yadav | Software Developer | Digital Media Marketing Expert`,
    siteUrl: `https://amitonline.netlify.app/`,
    siteDescription: `Amit Yadav is a ReactJS and NodeJS developer. He writes about Coding and Travelling.`,
    siteLanguage: `en-US`,
    siteImage: `android-chrome-192x192.png`,
    author: `Amit Yadav`,

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/amitrajofficial`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/amitrajofficial/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amit Yadav - Software Developer`,
        short_name: `amitonline.netlify.app`,
        description: `ReactJS and NodeJS Developer.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
