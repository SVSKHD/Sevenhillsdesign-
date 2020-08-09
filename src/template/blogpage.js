import React from 'react'
import Layout from '../components/layouts/layout'
import {Container, Row, Col} from "reactstrap"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Seo from "../components/seo"

export default function Blogpage({data}) {
    return (
        <div>
            <Layout>
                <Seo/>
                 <div className="titlesection">
                 <Container>
                 <Row>
                  <Col>
                  <Img width="100%" fluid={data.strapiBlogposts.CoverImage.childImageSharp.fluid} />
                  </Col>
                  <Col>
                  <h1>{data.strapiBlogposts.Title}</h1>
                  <h2>{data.strapiBlogposts.SubTitle}</h2>
                  </Col>
                 </Row>
               </Container>
               </div>
            </Layout>
        </div>
    )
}

export const blogpagequery=graphql`
query BlogpageQuery($id:String!) {
    strapiBlogposts(id:{eq: $id}) {
      Title
      SubTitle
      Content
      createdAt(fromNow: true)
      slug
      id
      CoverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

