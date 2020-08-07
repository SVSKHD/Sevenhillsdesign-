import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Button} from "reactstrap"
import "./styles.css"
import Layout from "../components/layouts/layout";
import Featuredcard from "../components/featuredcard";
import Regularcard from "../components/regularcard";
import SocialCollapsible from "../components/socialcollapsible";
import Event from "../components/jumbotron";
import EventCard from "../components/eventcard";



const IndexPage = ({data}) => (
 
    <div> 
      <Layout>
        <Container>
       <Row xs="1" md="2" lg="4">
         <Col lg="7" md="6">
         <h2>SpotLight</h2>
         <hr/>
         {data.allStrapiFeaturedContents.nodes.map(featured=>(
          <Featuredcard className="featurepost"
         title={featured.Title}
         content={featured.Content}
         fluid={featured.CoverImage.childImageSharp.fluid}
         time={featured.createdAt}
         />
         ))}
         </Col>
         <Col lg="5" md="6">
         <h1>Events</h1>
         <hr/>
         <EventCard/>
         <hr/>
         <h1>Share to your feed</h1>
         <SocialCollapsible/>
         <hr/>
         <Event/>
         </Col>
        </Row>
        </Container>
        <hr className="divider"/>

        {/* regular feed */}
        <Container className="regularfeed">
         <div className="feed">
        <Button outline color="success" ><h2>Intresting feed</h2></Button>
        </div>
        <Row xs="1" lg="3" md="4" >
        
        {data.allStrapiBlogposts.nodes.map(post=>(
         <Col className="regularcard">
         <Regularcard
         title={post.Title}
         subtitle={post.SubTitle}
         content={post.Content}
         fluid={post.CoverImage.childImageSharp.fluid}
         />
         <hr/>
         </Col>
         
          ))}

        </Row>
        </Container>
      </Layout>
    </div>
)

export default IndexPage

export const pageQuery=graphql`
query landingpageQuery {
  allStrapiBlogposts (limit: 12, sort: {order: DESC, fields: id}){
    nodes {
      Title
      SubTitle
      Content
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
  allStrapiFeaturedContents (limit: 1, sort: {order: DESC, fields: id}) {
    nodes {
      Title
      Content
      slug
      CoverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      createdAt(fromNow: true)
    }
  }
}

`
