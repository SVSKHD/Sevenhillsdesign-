import React from 'react'
import Layout from "../components/layouts/layout"
import Timecard from '../components/timecard'
import {Container,Row,Col} from "reactstrap"
import Featuredpagecard from '../components/faeaturepagecard'
import { graphql } from 'gatsby'
import { Featuredslugtourl } from '../utils/featuredslugtourl'
import Seo from "../components/seo"

export default function Featurepage({data}) {
 
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

                <h1>Spotlight feed</h1>
                <hr/>
                <Row>
                 {data.allStrapiFeatureds.nodes.map(featured=>(
                <Col>
                <Featuredpagecard
                fluid={featured.Cover.childImageSharp.fluid}
                link={featured.slug}
                />
                </Col>
                 ))}
               
                </Row>
                </Container>
            </Layout>
        </div>
    )
}

export const featuredQuery=graphql`
query featuredpageQuery {
    allStrapiFeatureds (sort: {fields: id, order: DESC}) {
      nodes {
        Title
        Subtitle
        Content
        slug
        id
        Cover {
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
