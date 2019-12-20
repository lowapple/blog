import React, { Component } from 'react'

class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { markdownRemark } = this.props.data
    console.log(`this.props.data`, this.props.data)

    return <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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