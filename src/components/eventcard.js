import React from 'react';
import { Card, Button, CardTitle,Container } from 'reactstrap';
import {FaInfo} from "react-icons/fa"
import "./css/card.css"

export default function EventCard  (props) {
  return (
        <Card body inverse color="danger">
          <CardTitle><h4>Our Running Events</h4></CardTitle>
          <Container>
          <Button outline color="light"><FaInfo size={25}/></Button>
          </Container>
        </Card>
  )
}


