import React from 'react'
import Layout from '../components/layouts/layout'
import Timecard from '../components/timecard'
import { graphql } from 'gatsby'
import {Container,Row,Col} from "reactstrap"
import {} from "react-icons/fa"
import Featuredpagecard from '../components/faeaturepagecard'
import { Blogslugtourl } from '../utils/Blogslugurl'
import Seo from "../components/seo"


export default function Blog({data}) {
  return (
     <div>
       <Seo
        title="SevenhillsTirupati Blog | Ancient Stories of Tirupati and Tirumala "
        description="Best combination of Social and devotional community, we have best Moral stories from our History"
        keywords="SevenhillsTirupati, Tirupati ,tirumala, Tirupati balaji, TTD, Tirumala tirupati Devasthanam, UnitedTirupati, BeautifullTirupati"
       />
        <Layout>
        <Container>
           <hr/>
           <Timecard/>
           <hr/>
        </Container>
        <Container>
           <h1>Spotlight</h1>
           <hr/>
           <Row xs="1" lg="2" md="2">
          
           {data.allStrapiBlogposts.nodes.map(blog=>(
            <Col>
             <Featuredpagecard
             fluid={blog.CoverImage.childImageSharp.fluid}
             link={Blogslugtourl(blog.slug)}
             />
            </Col>
           ))}
             
           </Row>
        </Container>
        </Layout>
    </div>
    )
}

export const blogpageQuery=graphql`
query blogpageQuery {
    allStrapiBlogposts (sort: {fields: id, order: DESC}) {
      nodes {
        Title
        SubTitle
        Content
        Keywords
        slug
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
  }
  
`