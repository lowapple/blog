import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"
import { getPostDate } from '../utils'
import PostTags from "../components/PostTags"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = pageContext

  return (
    <DefaultLayout>
      <SEO title={frontmatter.title} />
      <article>
        <div className="center">
          <h1 className="title">{frontmatter.title}</h1>
          <span className="code">
            <small className="time">{getPostDate(frontmatter)}</small>
          </span>
        </div>
        <div className="divider" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <div className="tags">
        <PostTags tags={frontmatter.tags}/>
      </div>
      <div className="page-navigation code">
        {prev && (
          <Link
            className="prev"
            to={prev.fields.slug}
            title={prev.frontmatter.title}
          >
            &lt;&lt;
          </Link>
        )}
        <span> &middot; </span>
        <Link to="/" className="home" className="home" title="Back Home">
          {" "}
          Home{" "}
        </Link>
        <span> &middot; </span>
        {next && (
          <Link
            className="next"
            to={next.fields.slug}
            title={next.frontmatter.title}
          >
            &gt;&gt;
          </Link>
        )}
      </div>
    </DefaultLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        tags
      }
    }
  }
`
