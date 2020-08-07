import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FaBullhorn, FaFacebookF,FaInstagram} from "react-icons/fa"
import "./css/card.css"

export default function SocialCollapsible () {
  return(
  <div>
    <Button outline color="info" id="toggler" style={{ marginBottom: '1rem' }}>
        <FaBullhorn size={25}/>
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Button className="card2" outline color="primary"><FaFacebookF size={25}/></Button>
          <Button className="card2" outline color="secondary"><FaInstagram size={25}/></Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  )
  }



