import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/layout'
import Coronacard from '../components/coronacard'
import { Container } from 'reactstrap'
import ReactMarkdown from 'react-markdown'

export default function Corona({data}) {
    return (
        <div>
            <Layout>
              <Container>
                  <h1>Cases record</h1>
                  <hr/> 
              <Coronacard 
              Title=<h1>{data.strapiCoronaCases.Title}</h1>
              Content={data.strapiCoronaCases.Content}
              />
              <hr/>
              </Container>
            </Layout>
        </div>
    )
}

export const coronaQuery=graphql`
query coronaQuery {
    strapiCoronaCases {
      Title
      Content
    }
  }
 ` 