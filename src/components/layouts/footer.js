import React from 'react';
import { Jumbotron, Container,Row,Col,Button } from 'reactstrap';
import {FaInstagram, FaFacebookF, FaFacebookMessenger,FaNewspaper } from "react-icons/fa"

export default function Footer (props) {
  const date=new Date().getFullYear();
    return (
    <div className="footeralign">
      <Jumbotron className="footer" fluid>
        <Container fluid>
         <Row>
         <Col>
         
         </Col>
         <hr className="hr"/>
         <Col>
         <h4>Copyrights {date}</h4>
         <Button href="https://www.instagram.com/sevenhillstirupati/" target="_blank" className="FSH" outline color="dark"><FaInstagram size={25}/></Button>
         <Button className="FSH"outline color="dark"><FaFacebookF size={25}/></Button>
         <Button className="FSH"outline color="dark"><FaFacebookMessenger size={25}/></Button>
         </Col>
         </Row>
         <hr/>
         <Row>
         <Col>
         <h4>Links</h4>
         </Col>
         <Col>
         <Button outline color="dark"><FaNewspaper size={28}/></Button>
         </Col>
         </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

