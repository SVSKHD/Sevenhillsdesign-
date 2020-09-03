import React from 'react';
import { Card, CardText, CardImg, CardImgOverlay,Button } from 'reactstrap';
import {Link} from "gatsby"
import Img from "gatsby-image"
import {FaBlog} from "react-icons/fa"
import "./css/card.css"

export default function Featuredpagecard (props){
  return (
    <div className="featuredcard">
      <Card inverse>
         <Link link={props.link}>
         <Img width="100%" fluid={props.fluid} alt={props.subtitle} />
         <CardImgOverlay>
         <CardText>{props.date}</CardText>
         <Link to={props.link}>
         <Button outline color="dark"><FaBlog size={28}/></Button>
         </Link>
        </CardImgOverlay>
        </Link>
      </Card>
    </div>
  )
}

