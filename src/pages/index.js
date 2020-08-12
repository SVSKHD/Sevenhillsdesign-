import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Button} from "reactstrap"
import "./styles.css"
import "../components/css/card.css"
import Layout from "../components/layouts/layout";
import Featuredcard from "../components/featuredcard";
import Regularcard from "../components/regularcard";
import SocialCollapsible from "../components/socialcollapsible";
import Event from "../components/jumbotron";
import EventCard from "../components/eventcard";
import { Featuredslugtourl } from "../utils/featuredslugtourl";
import { Blogslugtourl } from "../utils/Blogslugurl";
import Seo from "../components/seo";
import LandingpageSchema from "../components/schema/landingpageSchema";
import Slider from "../components/Slider";



const IndexPage = ({data}) => {
  const seoImage="https://www.sevenhillstirupati.com//static/b25722194dcdf923e7445c11e4407922/8384ed188b98bc023a3befbf1472d760.jpg"  
  return(
    <div> 
      <Layout>
        <Seo
        title="Sevenhills | Frontpage of Tirupati & Tirumala"
        description="Best combination of Social and devotional community, we have best Moral stories from our History"
        keywords="SevenhillsTirupati, Tirupati ,tirumala, Tirupati balaji, TTD, Tirumala tirupati Devasthanam"
        image={seoImage}
        />
        <LandingpageSchema/>
        <Slider
        img1="https://res.cloudinary.com/sevenhills/image/upload/v1597211526/Untitled_design_1_eff8cc4010.jpg"
        alt1="Sevenhills tirupati"
        img2="https://res.cloudinary.com/sevenhills/image/upload/v1597211526/Untitled_design_293d510cee.jpg"
        alt2="Sevenhills tirupati"
        />
        <div className="headsection">
        <Container>
        <Row xs="1" md="2" lg="4">
         <Col lg="7" md="6">
         <h2>SpotLight</h2>
         <hr/>
         {data.allStrapiFeatureds.nodes.map(featured=>(
         <Featuredcard 
         title={featured.Title}
         content={featured.Content}
         fluid={featured.Cover.childImageSharp.fluid}
         time={featured.createdAt}
         link={Featuredslugtourl(featured.slug)}
         />
         ))}
         </Col>
         <Col lg="5" md="6">
         <h1>Events</h1>
         <hr/>
         <EventCard className="hover"/>
         <hr/>
         <h1>Share to your feed</h1>
         <SocialCollapsible/>
         <hr/>
         <Event className="hover"/>
         </Col>
        </Row>
        </Container>
        </div>
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
         link={Blogslugtourl(post.slug)}
         />
         <hr/>
         </Col>
         
          ))}

        </Row>
        </Container>
      </Layout>
    </div>
)
}

export default IndexPage

export const pageQuery=graphql`
 query landingpageQuery {
   allStrapiBlogposts (limit: 12, sort: {order: DESC, fields: id}){
     nodes {
       Title
       SubTitle
       Content
       Keywords
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
   allStrapiFeatureds (limit: 1, sort: {order: DESC, fields: id}) {     nodes {
      Title
      Subtitle
      Content
      slug
      keywords
      Cover{
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      createdAt(fromNow: true)
    }
  }
  allStrapiTitleimages {
    nodes {
      titleimage {
        publicURL
      }
    }
  }
}

`
