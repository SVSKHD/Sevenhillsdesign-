import React from 'react'
import {
    Card, Button, CardText, CardBody,CardTitle, CardSubtitle
  } from 'reactstrap';
import Img from "gatsby-image"
import {Link} from "gatsby"
import {FaStream, FaBullhorn} from "react-icons/fa"

export default function Regularcard({title,subtitle ,content, fluid,link }) {
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
        <Link to={link}>
        <Button className="BS" outline color="info"><FaStream size={25}/></Button>
        </Link>
        <Button className="BS" outline color="info"><FaBullhorn size={25}/></Button>
        </CardBody>
        </Card>
        </div>
    )
}
