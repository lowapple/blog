import React from 'react'
import Helmet from 'react-helmet'
import Logo from "./Logo"
import { StaticQuery, graphql } from 'gatsby'

const Template = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Logo/>
            <div id="content">
                {children}
            </div>
        </>
    )
}

export default Template