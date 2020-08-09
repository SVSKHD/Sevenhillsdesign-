import React from "react"
import {Helmet} from "react-helmet"
import {graphql, StaticQuery} from "gatsby"

export default function Seo ({title,description,image,keywords,url,author}) {
  return(
    <StaticQuery
    query={detailsQuery}
    render={data=>{
      const metatitle= title || data.site.siteMetadata.title
      const metaDescription=description || data.site.siteMetadata.description
      const metaAuthor=author || data.site.siteMetadata.author
      const metaImage=image || data.site.siteMetadata.image
      const metaUrl=url || data.site.siteMetadata.url
      const metaKeywords=keywords || [","]
      return(
        <Helmet
        title={title}
        meta={[
          {
          name:`yandex-verification`,
          content:"7f3625bf938da52c"
          },
          {
            name:`robots`,
            content:"index , follow"
          },
          {
          name:`googlebot`,
          content:"index, follow"
          },
          {
            name:`title`,
            content:metatitle
          },
          {
            name:`description`,
            content:metaDescription
          },
          {
            name:`author`,
            content:metaAuthor
          },
          {
            name:`image`,
            content:metaImage
          },
          {
            name:`url`,
            content:metaUrl
          },
          {
            property:'og:locale',
            content:'en_EU'
          },
          { 
            property: 'og:title', 
            content: metatitle
          },
       
          { 
            property: 'og:type', 
            content: "Tech-Blog" 
          },
          { 
          property: 'og:url', 
          content: metaUrl
        },
          { 
            property: 'og:description', 
            content: metaDescription 
          },
          { 
            property: 'og:image', 
            content: metaImage 
          },
          { 
            property: 'og:site_name', 
            content: "SVSKHD-Tech inside" 
          },
          {
           name:`twitter:site`,
           content:"@hitesh_svsk",
          },
          {
            name:`twitter:card`,
            content:`summary_large_image`,
          },
          {
            name:`twitter:creator`,
            content:metaAuthor,
          },
          {
            name:`twitter:title`,
            content:metatitle,
          },
          {
            name:`twitter:description`,
            content:metaDescription,
          },
          {
            name:`twitter:image`,
            content:metaImage,
          },
        ].concat(
          metaKeywords && metaKeywords.length>0?{
            name:`keywords`,
            content:metaKeywords
          }:[]
        )
      }
    />   
    )
    }}
    />
  )
}

const detailsQuery=graphql`
query MyQuery {
    site {
      siteMetadata {
        title
        url
        siteUrl
        keywords
        image
        description
        author
      }
    }
  }
`