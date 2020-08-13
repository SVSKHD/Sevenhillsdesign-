import React from 'react';
import { Card, Button, CardTitle,Container } from 'reactstrap';
import {FaInfo} from "react-icons/fa"
import "./css/card.css"

export default function EventCard  (props) {
  return (
        <div className="hover">
        <Card body inverse color="success">
          <CardTitle><h4>Our Running Events</h4></CardTitle>
          <Container>
          <Button outline color="light"><FaInfo size={25}/></Button>
          </Container>
        </Card>
        </div>
  )
}


