import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ children }) {
  return (
    <div>
      <Helmet>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'/>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/images/icon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/images/icon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/images/icon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/images/icon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/images/icon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/images/icon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/images/icon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/icon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/images/icon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icon/favicon-16x16.png"/>
          <link rel="manifest" href="/images/icon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/images/icon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          {children}
      </Helmet>
    </div>
  )
}