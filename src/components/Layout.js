import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Template = ({ children }) => {
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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Header title={sitemap.site.siteMetadata.title}/>
            <div id="content">
                {children}
            </div>
        </>
        )}/>
    )
}

export default Template