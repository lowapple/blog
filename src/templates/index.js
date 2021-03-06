import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SEO from "../components/SEO"
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
  const PostsContent = posts => posts.map(post => (
    <PostElement post={post} key={post.node.id}/>
  ))

  return (
    <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              index {
                title
                description
              }
            }
          }
        }
        `}
        render={sitemap => {
          // Index Page 처리
          return (
          <Layout>
            <SEO title="Home"/>
            <article>
              <div>
                <ul className="posts">
                  {PostsContent(posts)}
                </ul>
              </div>
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
            </article>
          </Layout>
          )
        }}/>
  )
}

export default IndexPage