import React from 'react'
import { Card, CardTitle, CardText, Button, CardImgOverlay } from 'reactstrap';
import {Link} from "gatsby"
import Img from "gatsby-image"
import {FaBlog} from "react-icons/fa"
import "./css/card.css"

export default function Featuredcard({title, content, fluid, time, link }) {
    return (
        <Link to={link}>
        <div className="featuredcard">
        <Card inverse>
        <Img width="100%" fluid={fluid} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle><h2 className="featuredtitle">{title}</h2></CardTitle>
        <CardText><h5>{content.substring(0,20)}</h5></CardText>
        <CardText>
        <small><h7 className="featuredtext">{time}</h7></small><br/>
        <Link to={link}>
         <Button className="featuredbutton" outline color ="light"><FaBlog size={28}/></Button>
        </Link>
        </CardText>
        </CardImgOverlay>
        </Card>
        </div>
        </Link>
    )
}
