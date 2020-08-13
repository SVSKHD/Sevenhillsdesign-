import React from 'react'
import { Card, Button, CardTitle, CardText,Container } from 'reactstrap'
import {FaSkullCrossbones} from "react-icons/fa"
import "./css/card.css"

export default function Coronacard(props) {
    return (
        <div className="hover">
     <Card body inverse color="danger">
     <CardTitle>{props.title}</CardTitle>
     <CardText>{props.count}</CardText>
        <Container>
        <Button outline color="light"><FaSkullCrossbones size={28}/></Button>
        </Container>
        
      </Card>
        </div>
    )
}
