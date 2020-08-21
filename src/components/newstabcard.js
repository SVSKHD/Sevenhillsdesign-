import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle} from 'reactstrap'
  import logo from "../images/logo.jpg"
  import Typed from "react-typed"
  import "./css/card.css"

export default function Newstabcard(props) {
    return (
        <div>
        <Card className="newstab">
        
        <CardBody>
        <CardTitle><h3>{props.title}</h3></CardTitle>
        <img className="newscardimg" src={logo}/>
        <div className="typed">
        <Typed
            strings={["Everything about Tirupati", "Everything about Tirumala", "Everything about Govinda"]}
            typeSpeed={90}
            backSpeed={50}
            backDelay={1}
            loop
            smartBackspace
            />
        </div>
        </CardBody>
        </Card> 
        </div>
    )
}
