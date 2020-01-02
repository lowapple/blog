import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Template = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `}
        render={sitemap => (
        <>
            <Header title={sitemap.site.siteMetadata.title}/>
            <div id="content">
                {children}
            </div>
        </>
        )}/>
    )
}

export default Template