import React from 'react'
import Layout from '../components/layouts/layout'
import {Container,Row, Col} from "reactstrap"
import featured from "../images/featured.png"
import blogpost from "../images/blogpost.png"
import Seo from "../components/seo"
import "./styles.css"

export default function rules() {
    return (
        <div>
            <Layout>
            <Seo
            title="Rules to follow | SevenhillsTirupati"
            description="There are certain guidelines to folow in our page to follow and post the data in our blog, follow us in every platform of social profile get featured."
            keywords="SevenhillsTirupati, Sevenhills, Tirupati, Balaji, TTD, Om Namo Venkatesaya"
            />
            <Container>
            <Row xs="1">
             <Col lg="6" md="4">
             <h1>Rules for featured post</h1>
             <hr/>
             <ul>
             <li>Image resolution-1080*1080 <a href="https://www.canva.com/">Canva recommended</a></li>
             <li>DM us for logo</li>
             <li>1000-1500 words (can be more), <a href="https://app.grammarly.com/">Grammarly</a> recommended</li>
             <li>Send us your Social Profile link.</li>
             </ul>
             </Col>
            <Col lg="6">
            <h1>Featured image resolution</h1>
            <hr/>
            <img className="featured" src={featured}/> 
            </Col>
            </Row>
            <Row>
            <Col lg="6" md="4">
            <h1>Blog post image resolution</h1>
            <hr/>
            <img className="featured" src={blogpost}/> 
             </Col>
            <Col lg="6">
            <h1>Rules for Blog post</h1>
             <hr/>
             <ul>
             <li>Image resolution-1080*1080 <a href="https://www.canva.com/">Canva recommended</a></li>
             <li>DM us for logo</li>
             <li>1000-1500 words (can be more), <a href="https://app.grammarly.com/">Grammarly</a> recommended</li>
             <li>Send us your Social Profile link.</li>
             </ul>
            </Col>
            </Row>
            </Container> 
            </Layout>
        </div>
    )
}