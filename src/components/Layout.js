import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Template = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Header/>
            <div id="content">
                {children}
            </div>
        </>
    )
}

export default Template