import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ children }) {
  return (
    <div>
      <Helmet>
          <link rel="stylesheet" href="/fonts/fonts.css"/>
          {children}
      </Helmet>
    </div>
  )
}