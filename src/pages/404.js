import React from "react"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <h1>이런</h1>
    <p>잘못된 페이지를 클릭하신 것 같습니다.</p>
  </DefaultLayout>
)

export default NotFoundPage
