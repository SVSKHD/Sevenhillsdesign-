import React from 'react'
import {
    Card, Button, CardText, CardBody,CardTitle, CardSubtitle
  } from 'reactstrap';
import Img from "gatsby-image"
import {FaStream, FaBullhorn} from "react-icons/fa"

export default function Regularcard({title,subtitle ,content, fluid }) {
    return (
        <div>
        <Card>
        <CardBody>
        <CardTitle><h3>{title}</h3></CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        </CardBody>
        <Img width="100%" fluid={fluid} alt={subtitle} />
        <CardBody>
        <CardText>{content.substring(0,50)}</CardText>
        <Button className="BS" outline color="info"><FaStream size={25}/></Button>
        <Button className="BS" outline color="info"><FaBullhorn size={25}/></Button>
        </CardBody>
        </Card>
        </div>
    )
}
