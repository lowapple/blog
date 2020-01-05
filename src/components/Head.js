import React from 'react'
import Helmet from 'react-helmet'

export default function Head({ children }) {
  return (
    <div>
      <Helmet>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'/>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css'/>
          {children}
      </Helmet>
    </div>
  )
}