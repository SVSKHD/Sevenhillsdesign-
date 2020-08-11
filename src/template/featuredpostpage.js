import React from 'react'
import Layout from '../components/layouts/layout'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import {Container,Jumbotron, Row, Col, Button} from "reactstrap"
import ReactMarkdown from 'react-markdown'
import "./pages.css/featuredpage.css"
import {Link} from "gatsby"
import {FaBackward} from "react-icons/fa"
import BlogpageCollpasible from '../components/blogpagecollpasible'
import Seo from "../components/seo"

export default function Featuredpostpage({data}) {
  const seoImage="https://www.sevenhillstirupati.com" +data.strapiFeatureds.Cover.publicURL
  return (
        <div>
           <Layout>
             <Seo
             title={data.strapiFeatureds.Title}
             description={data.strapiFeatureds.Content.substring(0,200)}
             keywords={data.strapiFeatureds.keywords}
             image={seoImage}
             />
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
           <Row>
           <Col>
           <div className="Titles">
           <h1>{data.strapiFeatureds.Title}</h1>
           <h2>{data.strapiFeatureds.keywords}</h2>
           </div>
           <Img className="img" width="100%" fluid={data.strapiFeatureds.Cover.childImageSharp.fluid} alt={data.strapiFeatureds.Subtitle}/>
           </Col>
           </Row>
           </Container>
           
           <div className="Content">
             
             <Container>
               <Jumbotron className="contentplacer">
               <ReactMarkdown>{data.strapiFeatureds.Content}</ReactMarkdown>
               </Jumbotron>
            </Container>
           </div>
           {/* Blog end section */}
            <Container>
             <Row>
              <Col>
              <BlogpageCollpasible/>
              </Col>
              <Col>
              </Col>
             </Row>
            </Container>

            </Layout>
        </div>
    )
}

export const featurepost=graphql`
query featuredQuery {
    strapiFeatureds {
      Title
      Subtitle
      Content
      keywords
      createdAt(fromNow: true)
      slug
      Cover {
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