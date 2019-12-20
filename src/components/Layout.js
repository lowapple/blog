import React from 'react'
import Helmet from 'react-helmet'
import Header from ".././components/organisms/Header"
import { StaticQuery, graphql } from 'gatsby'

const Template = ({ children }) => {
    return <StaticQuery
        query={graphql`
            query Header {
                site {
                siteMetadata {
                  title
                  description
                }
              }
            }
            `
        }
        render={data=> (
            <>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>

                <Header data={data}/>
                <div id="content">
                    {children}
                </div>

            </>
        )}/>
}

export default Template