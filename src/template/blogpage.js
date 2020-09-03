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
  const seoImage="https://www.sevenhillstirupati.com" +data.strapiBlogposts.CoverImage.publicURL
    return (
        <div>
            <Layout>
                <Seo
                title={data.strapiBlogposts.Title}
                description={data.strapiBlogposts.Content.substring(0,200)}
                keywords={data.strapiBlogposts.Keywords}
                image={seoImage}
                />
                 <div className="titlesection">
                 <div className="return">
                  <Container>
                  <Link to="/">
                  <Button outline color="light">
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
                  <h3>{data.strapiBlogposts.SubTitle}</h3>
                  <hr/>
                  <div>
                  <h3>Share to your freinds</h3>
                  
                  <BlogpageCollpasible
                  linkF={"https://www.facebook.com/sharer.php?u=https://www.sevenhillstirupati.com/blog/"+`${data.strapiBlogposts.slug}`}
                  linkT={"https://twitter.com/intent/tweet?url=https://www.sevenhillstirupati.com/blog/"+`${data.strapiBlogposts.slug}`}
                  />
                  <hr/>
                  </div>
                  </Col>
                 </Row>
               </Container>

               <Container>
               <hr/>
               </Container>

               <div>
               <Container>
                <Row>
                <Col>
               <Jumbotron className="blogpagecontent" fluid>
                 <Container>
                <ReactMarkdown className="Content">{data.strapiBlogposts.Content}</ReactMarkdown>
                 </Container>
               </Jumbotron>
               </Col>
               </Row>
               </Container>
               </div>

              <div className="endsection">
               <Container>
               <Jumbotron className="endingnote">
               <h3>bind with us</h3>
               <h2 className="endfont">SEVENHILLS TIRUPATI</h2>
               </Jumbotron>
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
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

