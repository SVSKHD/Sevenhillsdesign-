import React from 'react'
import { Card, CardTitle, CardText, Button, CardImgOverlay } from 'reactstrap';
import {Link} from "gatsby"
import Img from "gatsby-image"
import {FaBlog} from "react-icons/fa"
import "./css/card.css"

export default function Featuredcard({title, content, fluid, time, link,linkt }) {
    return (
        <Link to={link}>
        <div className="featuredcard">
        <Card inverse>
        <Img width="100%" fluid={fluid} alt="Card image cap" />
        <CardImgOverlay>
        <CardText>
        <small><h7 className="featuredtext">{time}</h7></small><br/>
        <Link to={link}>
         <Button className="featuredbutton" outline color ="dark"><FaBlog size={28}/></Button>
        </Link>
        </CardText>
        </CardImgOverlay>
        </Card>
        </div>
        </Link>
    )
}
