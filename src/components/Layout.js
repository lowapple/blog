import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'
import Head from './Head'

const Template = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    pages {
                        title
                        href
                    }
                }
            }
        }
        `}
        render={sitemap => (
        <>
            <Head>
                <Header metadata={sitemap.site.siteMetadata}/>
                <div className="page-content">
                    <div className="wrapper">
                        <br/>
                        {children}
                    </div>
                </div>
            </Head>
        </>
        )}/>
    )
}

export default Template