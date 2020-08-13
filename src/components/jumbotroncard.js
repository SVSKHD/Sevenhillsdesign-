import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import "./css/jumbotron.css"
import "./css/card.css"
import {FaYoutube} from "react-icons/fa"

export default function Event(){
  return (
    <div className="hover">
      <Jumbotron className="jumbo" fluid>
        <Container fluid>
          <h1 className="heading">Our Youtube Channel</h1>
          <Button href="https://www.youtube.com/channel/UCRFH9IWO1_aep984wT9oN-g" target="_blank" outline color="danger"><FaYoutube size={25}/></Button>
        </Container>
      </Jumbotron>
    </div>
  );
};
