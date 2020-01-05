import React, { Component } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PostInfo from '../components/PostInfo'
import PostTags from '../components/PostTags'
import Head from '../components/Head'
import { Disqus } from 'gatsby-plugin-disqus'
import SEO from '../components/SEO'
import { getMainImageFromRemark } from '../utils/getMainImageFromRemark'

class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 포스트 댓글 
  get postCommentConfig() {
    const postId = this.props.data.contentfulBlogPost.id
    const postTitle = this.props.data.contentfulBlogPost.title
    // Disqus Config 설정
    let disqusConfig = {
      url: this.getPostURL(),
      identifier: postId,
      title: postTitle,
    }
    return disqusConfig
  }

  // 포스트 URL
  getPostURL() {
    const baseUrl = this.props.data.site.siteMetadata.siteUrl
    const path = this.props.data.contentfulBlogPost.slug
    return `${baseUrl}/posts/${path}`
  }

  // 스크립트 가져오기
  getScripts() {
    const scripts = []
    const scriptRegex = /<script[^>].*<\/script>/gi
    let match = []

    // get script tags
    while (match) {
      match = scriptRegex.exec(this.props.data.contentfulBlogPost.body.childMarkdownRemark.html)
      if (match) {
        scripts.push(match[0])
      } else {
        break
      }
    }

    // parse src from script tags
    return scripts.map(script => {
      return /(src=)"(.+)"/.exec(script)[2]
    })
  }

  render() {
    const { title = {}, description = {}, publishDateISO = {}, tags = {}, body = {} } = this.props.data.contentfulBlogPost
    const { childMarkdownRemark = {} } = body
    const { siteMetadata = {} } = this.props.data.site
    const mainImage = getMainImageFromRemark(childMarkdownRemark.html)

    return (
      <Layout>
        <SEO
          title={title}
          description={description.description}
          keywords={tags}
          meta={[
            { name: 'author', content: siteMetadata.author },
            { name: 'description', content: description.description },
            { itemProp: 'name', content: title },
            { itemProp: 'description', content: description.description },
            { itemProp: 'image', content: mainImage },
            { property: 'og:type', content: 'article' },
            { property: 'og:url', content: this.getPostURL() },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description.description },
            { property: 'og:image', content: mainImage },
            { name: 'twitter:card', content: 'summary_large_imag' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description.description },
            { name: 'twitter:image', content: mainImage },
          ]}
        />
        <Head>
          <link rel="canonical" href={this.getPostURL()} />
          <script
            type="text/javascript"
            async
            src="https://platform.twitter.com/widgets.js"
          />
          {this.getScripts().map((src, i) => (
            <script async src={src} type="text/javascript" key={i} />
          ))}
        </Head>
        <PageHeader title={title}/>
        <PostInfo date={publishDateISO} timeToRead={childMarkdownRemark.timeToRead}/>
        <PostTags tags={tags}/>
        <article>
          <div id="archive" dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }} />
        </article>
        <Disqus config={this.postCommentConfig} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
  contentfulBlogPost(slug: { eq: $slug }) {
    id
    title
    slug
    description {
      description
    }
    publishDateISO: publishDate(formatString: "YYYY-MM-DD")
    tags
    body {
      childMarkdownRemark {
        timeToRead
        html
      }
    }
  }
}
`