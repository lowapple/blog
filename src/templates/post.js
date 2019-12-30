import React, { Component } from 'react'
import Layout from '../components/Layout'

class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title = {}, tags = {}, body = {}} = this.props.data.contentfulPost
    const { childMarkdownRemark = {} } = body

    return (
      <Layout title={title}>
        <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
query($slug: String!) {
  contentfulPost(slug: { eq: $slug }) {
    title
    slug
    metaDescription {
      internal {
        content
      }
    }
    publishDate(formatString: "MMMM DD, YYYY")
    publishDateISO: publishDate(formatString: "YYYY-MM-DD")
    tags {
      title
      id
      slug
    }
    heroImage {
      title
      fluid(maxWidth: 1800) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
      ogimg: resize(width: 1800) {
        src
        width
        height
      }
    }
    body {
      childMarkdownRemark {
        timeToRead
        html
        excerpt(pruneLength: 320)
      }
    }
  }
}
`