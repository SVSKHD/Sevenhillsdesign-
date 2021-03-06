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
                  <Button outline color="light">
                  <FaBackward size={25}/>
                  </Button>
                  </Link>
                  </Container>
                 </div>
           <Container>
           <Row>
           <Col>
           <div className="Titles">
         
          <Jumbotron className="featurepagetitle">
           <h1>{data.strapiFeatureds.Title}</h1>
           <h5>{data.strapiFeatureds.Subtitle}</h5>
          </Jumbotron>
        
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
              <BlogpageCollpasible
              linkF={"https://www.facebook.com/sharer.php?u=https://www.sevenhillstirupati.com/featured/"+`${data.strapiFeatureds.slug}`}
              linkT={"https://twitter.com/intent/tweet?url=https://www.sevenhillstirupati.com/featured/"+`${data.strapiFeatureds.slug}`}
              />
              </Col>
              <Col>
              </Col>
             </Row>
            </Container>

              <div className="endsection">
               <Container>
               <Jumbotron className="endingnote">
               <h3>bind with us</h3>
               <h2 className="endfont">SEVENHILLS TIRUPATI</h2>
               </Jumbotron>
               </Container>
              </div>

            </Layout>
        </div>
    )
}

export const featurepost=graphql`
query featuredQuery ($id:String!){
    strapiFeatureds (id:{eq: $id}) {
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