import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FaBullhorn, FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"
import "./css/card.css"

export default function SocialCollapsible () {
  return(
  <div>
    <Button outline color="light" id="toggler" style={{ marginBottom: '1rem' }}>
        <FaBullhorn size={25}/>
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Button href="https://www.facebook.com/sharer/sharer.php?u=https://www.sevenhillstirupati.com/" target="_blank" className="card2" outline color="primary"><FaFacebookF size={25}/></Button>
          <Button href="https://www.instagram.com/sevenhills_tirupati/" target="_blank" className="card2" outline color="secondary"><FaInstagram size={25}/></Button>
          <Button href="https://twitter.com/intent/tweet?text=https://www.sevenhillstirupati.com/" target="_blank" className="card2" outline color="dark"><FaTwitter size={25}/></Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  )
  }



