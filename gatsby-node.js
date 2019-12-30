const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    allContentfulPost(sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          slug
          publishDate
          tags {
            title
          }
          id
          title
          metaDescription {
            metaDescription
          }
        }
      }
    }
  }
  `).then(data => {
    if (data.errors) {
      throw data.errors
    }

    const posts = data.data.allContentfulPost.edges

    // 인덱스 페이지 생성
    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 10, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })


    // 포스트 페이지 생성
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

  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  return graphql(`
  {
    allContentfulAsset {
      edges {
        node {
          id
          file {
            url
          }
        }
      }
    }
  }
  `).then(data => {
    if (data.errors) {
      throw data.errors
    }
    console.log('allContentfulAsset', data)

    const blogTemplate = path.resolve(`./src/templates/post.js`)
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/posts/${edge.node.frontmatter.path}`,
        component: blogTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(`result`, result)

    const blogTemplate = path.resolve(`./src/templates/post.js`)
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/posts/${edge.node.frontmatter.path}`,
        component: blogTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}

/*
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/layouts/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
  })
}

// create the slugs programatically instead of specifying a path in the frontmatter
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
*/