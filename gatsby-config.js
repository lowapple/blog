require('dotenv').config()

const SITE_TITLE = `Lowapple Thch Blog`
const SITE_DESCRIPTION = `기타등등 이것저것 기술 블로그`
const SITE_URL = `https://lowapple.io`
const SITE_RSS = `/rss.xml`
const SITE_AUTHOR = `@lowapple`
const SITE_COPY_RIGHT = `Copyright © lowapple All rights reserved`

module.exports = {
  siteMetadata: {
    title: `${SITE_TITLE}`,
    pages: [
      {
        title: '전체',
        href: '/'
      },
      {
        title: 'RESUME',
        href: '/resume'
      }
    ],
    description: `${SITE_DESCRIPTION}`,
    author: `${SITE_AUTHOR}`,
    avatar: `https://avatars2.githubusercontent.com/u/26740046?s=460&v=4`,
    siteUrl: `${SITE_URL}`  ,
    rssMetadata: {
      site_url: `${SITE_URL}`,
      feed_url: `${SITE_URL}${SITE_RSS}`,
      title: `${SITE_TITLE}`,
      description: `${SITE_DESCRIPTION}`,
      author: `${SITE_AUTHOR}`,
      copyright: `${SITE_COPY_RIGHT}`,
    },
    index: {
      title: '로우애플 기술 블로그',
      description: '기타등등 이것저것 기술 블로그'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Spoqa Han Sans', 'Droid Sans', 'Droid Serif']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist"
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          },
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'shortnameToUnicode',
              ascii: false,
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: 'lowappleblog'
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                author
                copyright
              }
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => ({
                title: edge.node.title,
                description: edge.node.description.description,
                date: edge.node.publishDate,
                author: site.siteMetadata.rssMetadata.author,
                url: `${site.siteMetadata.rssMetadata.site_url}/posts/${
                  edge.node.slug
                }`,
                guid: `${site.siteMetadata.rssMetadata.site_url}/posts/${
                  edge.node.slug
                }`,
                custom_elements: [{ 'content:encoded': edge.node.body.childMarkdownRemark.html }],
              }))
            },
            query: `
            {
              allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}) {
                edges {
                  node {
                    slug
                    publishDate
                    id
                    title
                    description {
                      description
                    }
                    body {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                }
              }
            }
            `,
            output: `${SITE_RSS}`
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${SITE_TITLE}`,
        short_name: `${SITE_TITLE}`,
        lang: `kr`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
