import React from 'react'
import {Card, CardBody, Button, CardTitle, CardText, CardImg,Container} from "reactstrap"
import {FaPoll} from "react-icons/fa"
export default function Darshancount(props) {
    return (
        <div className="hover">
        <Card body outline color="success">
        <CardTitle><h3>{props.title}</h3></CardTitle>
        <CardText>{props.description}</CardText>
         <Container>  
        <Button outline color="dark"><FaPoll size={28}/></Button>
        </Container>
      </Card> 
        </div>
    )
}
