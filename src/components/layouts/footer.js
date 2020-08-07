import React from 'react';
import { Jumbotron, Container,Button } from 'reactstrap';
import {FaInstagram, FaFacebookF, FaFacebookMessenger} from "react-icons/fa"

export default function Footer (props) {
  const date=new Date().getFullYear();
    return (
    <div>
      <Jumbotron className="footer" fluid>
        <Container fluid>
         <h5>Copyrights {date}</h5>
         <hr className="hr"/>
         <Button href="https://www.instagram.com/sevenhills_tirupati/" target="_blank" className="FSH" outline color="light"><FaInstagram size={25}/></Button>
         <Button className="FSH"outline color="light"><FaFacebookF size={25}/></Button>
         <Button className="FSH"outline color="light"><FaFacebookMessenger size={25}/></Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

