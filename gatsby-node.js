const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          slug
          publishDateISO: publishDate(formatString: "YYYY-MM-DD")
          id
          title
          description {
            description
          }
          tags
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulResume {
      edges {
        node {
          body {
            body
          }
          updatedAt
        }
      }
    }
  }
  `).then(data => {
    if (data.errors) {
      throw data.errors
    }

    /* RESUME */
    const resume = data.data.allContentfulResume.edges[0]
    createPage({
      path: `resume`,
      component:  path.resolve(`./src/templates/resume.js`),
      context: {},
    })

    /* 인덱스 페이지 생성 */
    const posts = data.data.allContentfulBlogPost.edges
    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 10, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    /* 포스트 페이지 생성 */
    posts.forEach((edge, i) => {
      const prev = i === 0 ? null : posts[i - 1].node
      const next = i === posts.length - 1 ? null : posts[i + 1].node
      createPage({
        path: `posts/${edge.node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: edge.node.slug,
          prev,
          next,
        },
      })
    })
  })
}