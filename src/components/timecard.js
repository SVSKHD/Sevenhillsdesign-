import React from 'react'
import {Col,Row,Container,Jumbotron,Card,CardBody,CardTitle,CardText,Button} from "reactstrap"
import {FaClock,FaCalendar} from "react-icons/fa"
import "./css/card.css"


export default function Timecard(Hours, Minutes) {
    const date=new Date().getDate()
    const month=new Date().getMonth()
    const year=new Date().getFullYear()
    const hours=new Date().getHours()
    const minutes=new Date().getMinutes()
    return (
        <div>
        <div className="timecard" >
        <Card>
        <CardBody>
        <Row>
        <Col>
        <FaCalendar size={50}/>
        </Col>
        <Col>
        <FaClock size={50}/>
        </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <CardText><h2>{date}/{month}/{year}</h2></CardText>
          </Col>
          <Col>
          <CardText><h2>{hours}:{minutes}</h2></CardText>
          </Col>
        </Row>
        </CardBody>
        </Card>
        </div>
        </div>
    )
}
