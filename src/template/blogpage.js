import React from 'react'
import Layout from '../components/layouts/layout'
import {Container, Row, Col,Jumbotron,Button} from "reactstrap"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Seo from "../components/seo"
import "./pages.css/blogpage.css"
import ReactMarkdown from "react-markdown"
import {FaBackward} from "react-icons/fa"
import {Link} from "gatsby"
import BlogpageCollpasible from "../components/blogpagecollpasible"

export default function Blogpage({data}) {
    return (
        <div>
            <Layout>
                <Seo
                title={data.strapiBlogposts.Title}
                description={data.strapiBlogposts.Content.substring(0,200)}
                keywords={data.strapiBlogposts.Keywords}
                />
                 <div className="titlesection">
                 <div className="return">
                  <Container>
                  <Link to="/">
                  <Button outline color="danger">
                  <FaBackward size={25}/>
                  </Button>
                  </Link>
                  </Container>
                 </div>
                 <Container>
                 <Row xs="1" lg="2" md="2">
                  <Col>
                  <Img width="100%" fluid={data.strapiBlogposts.CoverImage.childImageSharp.fluid} alt={data.strapiBlogposts.SubTitle}/>
                  </Col>
                  <Col>
                  <h1>{data.strapiBlogposts.Title}</h1>
                  <h2>{data.strapiBlogposts.SubTitle}</h2>
                  <hr/>
                  <div>
                  <BlogpageCollpasible/>
                  </div>
                  </Col>
                 </Row>
               </Container>

               <Container>
               <hr/>
               </Container>

               <div className="contentposition">
               <Container>
                <Row>
                <Col>
               <Jumbotron className="blogpagecontent" fluid>
                <ReactMarkdown className="Content">{data.strapiBlogposts.Content}</ReactMarkdown>
               </Jumbotron>
               </Col>
               </Row>
               </Container>
               </div>
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
      Keywords
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

