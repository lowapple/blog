import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ children }) => {
  return (
    <div>
      <Helmet>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'/>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"/>
      </Helmet>
      {children}
    </div>
  )
}

export default Head