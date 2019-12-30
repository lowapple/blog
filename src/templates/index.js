import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout' 
import ReactPaginate from 'react-paginate'
import { navigateTo } from 'gatsby-link'
import Pagenation from '../components/Pagenation'
import PostElement from '../components/PostElement'

// 페이지 이동
const handlePageClick = data => {
  let { selected } = data
  selected = selected === 0 ? '' : selected + 1
  navigateTo(`/${selected}`)
}

// 인덱스 페이지 렌더링
const IndexPage = ({ pageContext }) => {
  console.log(pageContext)
  // 포스트 리스트
  const posts = pageContext.group
  const postsContent = posts => posts.map(post => (
    <PostElement post={post} key={post.node.id} />
  ))

  return (
    <StaticQuery
        query={graphql`
        query Header {
            site {
            siteMetadata {
              title
              description
            }
          }
        }
        `}
        render={sitemap => (
        <Layout title={sitemap.site.siteMetadata.title}>
          <SEO title="Home"/>
          <PageHeader 
            title={sitemap.site.siteMetadata.title} 
            description={sitemap.site.siteMetadata.description}/>
          <section>
            <ul>
              {postsContent(posts)}
            </ul>
          </section>
          <Pagenation>
            <ReactPaginate
              previousLabel={<i className="fas fa-angle-left" />}
              nextLabel={<i className="fas fa-angle-right" />}
              breakLabel={<i className="fa fa-ellipsis-h" />}
              forcePage={pageContext.index - 1}
              breakClassName={'break-me'}
              pageCount={pageContext.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </Pagenation>
        </Layout>
        )}
    />
  )

  return (
  <Layout>
    <SEO title="Home"/>
    <PageHeader title={"로우애플 기술 블로그"} description={"기타등등 이것저것 여러가지"}/>
    <Pagenation>
      <ReactPaginate
        previousLabel={<i className="fas fa-angle-left" />}
        nextLabel={<i className="fas fa-angle-right" />}
        breakLabel={<i className="fa fa-ellipsis-h" />}
        forcePage={pageContext.index - 1}
        breakClassName={'break-me'}
        pageCount={pageContext.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </Pagenation>
  </Layout>
  )
}

export default IndexPage

/*
const IndexPage = ({ data }) => {
    // 포스트 리스트 필터
    const posts = data.allMarkdownRemark.edges.filter(
      p => p.node.frontmatter.date !== null && p.node.frontmatter.type === "archive"
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
          <p><b>{year}</b> 년 포스트</p>
          {postsList(posts)}
        </div>
      )).reverse()

    // 렌터링
    return (
      <DefaultLayout>
        <SEO title="Home" />
        <PageHeader title={"로우애플 기술 블로그"} description={"기타등등 이것저것 여러가지"}/>
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
            type
          }
        }
      }
    }
  }
`
*/