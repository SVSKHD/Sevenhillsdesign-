import React from 'react'
import { Card, CardTitle, CardText, Button, CardImgOverlay } from 'reactstrap';
import Img from "gatsby-image"
import {FaBlog} from "react-icons/fa"

export default function Featuredcard({title, content, fluid, time }) {
    return (
        <div>
        <Card inverse>
        <Img width="100%" fluid={fluid} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle><h2 className="display-3">{title}</h2></CardTitle>
        <CardText><h5>{content}</h5></CardText>
        <CardText>
        <small><h7>{time}</h7></small><br/>
         <Button outline color ="light"><FaBlog size={28}/></Button>
        </CardText>
        </CardImgOverlay>
        </Card>
        </div>
    )
}
