import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const DEFAULT_KEYWORDS = ['Android', '안드로이드', '개발', '개발자 블로그']

function SEO({ title, description, keywords = [], meta = [], lang }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const blogTitle = data.site.siteMetadata.title

        let metaTags = [
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:site`,
            content: data.site.siteMetadata.author
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            property: `og:site_name`,
            content: blogTitle
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `article`
          }
        ]

        // 키워드 추가
        if (keywords && keywords.length) {
          metaTags.push({
            name: `keywords`,
            content: keywords.concat(DEFAULT_KEYWORDS).join(`, `),
          })
        } else {
          metaTags.push({
            name: 'keywords',
            content: DEFAULT_KEYWORDS.join(', '),
          })
        }

        // SEO 컴포넌트에 직접 전달받은 메타 태그는 중복을 제거하고 추가한다.
        if (meta.length > 0) {
          const metaNamesToAdd = meta.map(m => m.name)

          metaTags = R.concat(
            // metaTags에서 SEO 컴포넌트에 직접 전달된
            R.filter(currentMeta =>
              R.not(R.includes(currentMeta.name, metaNamesToAdd))
            )(metaTags),
            meta
          )
        }

        return (
          <Helmet
            htmlAttributes={{
              lang: 'ko',
            }}
            title={title || blogTitle}
            titleTemplate={title ? `%s | ${blogTitle}` : ''}
            meta={metaTags}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
