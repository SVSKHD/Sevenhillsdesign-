import React from 'react'
import { Card, Button, CardTitle, CardText,Container } from 'reactstrap'
import {FaSkullCrossbones} from "react-icons/fa"
import "./css/card.css"
import ReactMarkdown from 'react-markdown'

const Coronacard=({Title,Content})=> {
    return (
        <div className="hover">
        <Card body inverse color="danger">
        <CardTitle>{Title}</CardTitle>
        <CardText><ReactMarkdown>{Content}</ReactMarkdown></CardText>
        <Container>
        <Button outline color="light"><FaSkullCrossbones size={28}/></Button>
        </Container>   
        </Card>
        </div>
     
    )
}

export default Coronacard

