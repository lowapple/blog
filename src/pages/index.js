import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"
import PostElement from '../components/organisms/PostElement'
import { groupBy, getDateYear, getArchivePostDate } from "../utils"
import PageHeader from '../components/organisms/PageHeader';

const IndexPage = ({ data }) => {
    // all posts without dates are assumed to be drafts or pages
    // not to be added to postsList
    const posts = data.allMarkdownRemark.edges.filter(
      p => p.node.frontmatter.date !== null
    )
    // PostElement 리스트 생성 
    const postsList = posts =>
      posts.map(post => (
        <PostElement post={post} key={post.node.id} />
      ))

    // PostElement 리스트 생성 with 연도 그룹
    const postsListContainer = groupBy(posts, getDateYear)
      .map(({ year, posts }, i) => (
        <div key={i}>
          <h4 className="code">{year}</h4>
          {postsList(posts)}
        </div>
      )).reverse()

    // 렌터링
    return (
      <DefaultLayout>
        <SEO title="Home" />
        <PageHeader title={"홈"} description={"asdf"}/>
        <section>
          <ul>{postsListContainer}</ul>
        </section>
      </DefaultLayout>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
            tags
            description
          }
        }
      }
    }
  }
`
