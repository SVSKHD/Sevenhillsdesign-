import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import "./css/jumbotron.css"
import {FaYoutube} from "react-icons/fa"

export default function Event(){
  return (
    <div >
      <Jumbotron className="jumbo" fluid>
        <Container fluid>
          <h1 className="heading">Our Youtube Channel</h1>
          <Button outline color="danger"><FaYoutube size={25}/></Button>
        </Container>
      </Jumbotron>
    </div>
  );
};
