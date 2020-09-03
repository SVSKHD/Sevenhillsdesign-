import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Button} from "reactstrap"
import "./styles.css"
import "../components/css/card.css"
import Layout from "../components/layouts/layout";
import Featuredcard from "../components/featuredcard";
import Regularcard from "../components/regularcard";
import SocialCollapsible from "../components/socialcollapsible";
import Event from "../components/jumbotroncard"
import EventCard from "../components/eventcard";
import { Featuredslugtourl } from "../utils/featuredslugtourl";
import { Blogslugtourl } from "../utils/Blogslugurl";
import Seo from "../components/seo";
import LandingpageSchema from "../components/schema/landingpageSchema";
import Slider from "../components/Slider";
import Coronacard from "../components/coronacard";
import {FaVoteYea} from "react-icons/fa"
import {Link} from "gatsby"
import Darshancount from "../components/Darshancount";
import Newstabcard from "../components/newstabcard";



const IndexPage = ({data}) => {
  const seoImage="https://www.sevenhillstirupati.com//static/b25722194dcdf923e7445c11e4407922/8384ed188b98bc023a3befbf1472d760.jpg"  
  return(
    <div> 
      <Layout>
        <Seo
        title="SevenhillsTirupati | Frontpage of Tirupati & Tirumala"
        description="Best combination of Social and devotional community, we have best Moral stories from our History"
        keywords="SevenhillsTirupati, Tirupati ,tirumala, Tirupati balaji, TTD, Tirumala tirupati Devasthanam"
        image={seoImage}
        />
        <LandingpageSchema/>
        {/* news section */}
        <Container>
          
          <hr/> 
         <Newstabcard/>
          <hr/>
        </Container>
        
{/* Headsection */}
        <div className="head">
         <Row xs="1" md="5" lg="4">
         <Col lg="4" md="3">
         <h2>SpotLight</h2>
         <hr/>
         {data.allStrapiFeatureds.nodes.map(featured=>(
         <Featuredcard 
         fluid={featured.Cover.childImageSharp.fluid}
         time={featured.createdAt}
         link={Featuredslugtourl(featured.slug)}
         />
         ))}
         </Col>
         <Col lg="4" md="3">
         <h1>Events</h1>
         <hr/>
         <EventCard className="hover"/>
         <hr/>
         <h1>Share to your feed</h1>
         <SocialCollapsible/>
         <hr/>
         <Event className="hover"/>
         </Col>
         <Col lg="4" md="3">
         <h1>Corona live cases</h1>
         <hr/>
         <Link to="/corona">
          <Coronacard
          Title={<h3>Live corona casses record</h3>}
          />
         </Link>

         <h1>Darshan live Count</h1>
         <hr/>
         <Darshancount/>
         <h1>Rules to get featured</h1>
         <hr/>
         <Link to="/rules">
         <Button outline color="light"><FaVoteYea size={30}/></Button>
         </Link>

         </Col>
        </Row>
        </div>
        <div>
        <hr className="divider"/>




        {/* slider */}
        <Container>
        <Slider
        img1="https://res.cloudinary.com/sevenhills/image/upload/v1597211526/Untitled_design_1_eff8cc4010.jpg"
        alt1="Sevenhills tirupati"
        img2="https://res.cloudinary.com/sevenhills/image/upload/v1597211526/Untitled_design_293d510cee.jpg"
        alt2="Sevenhills tirupati"
        />
        </Container>
        </div>
        <hr className="divider"/>

        {/* regular feed */}
        <div className="blogfeed">
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
         </div>
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
