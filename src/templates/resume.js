import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SEO from "../components/SEO"
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout' 
import ReactPaginate from 'react-paginate'
import { navigateTo } from 'gatsby-link'
import Pagenation from '../components/Pagenation'
import PostElement from '../components/PostElement'

// 인덱스 페이지 렌더링
const ResumePage = ({ pageContext }) => {
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
              </div>
            </article>
          </Layout>
          )
        }}/>
  )
}

export default ResumePage