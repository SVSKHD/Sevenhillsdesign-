import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FaFacebookF,FaTwitter,FaInstagram,FaShareAlt} from "react-icons/fa"

export default function BlogpageCollpasible(props) {
    return (
        <div>
    <Button outline color="light" id="toggler" style={{ marginBottom: '1rem' }}>
      <FaShareAlt size={25}/>
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
         <Button className="BS" href={props.linkF} target="_blank"><FaFacebookF size={25}/> </Button>
         <Button className="BS"  href={props.linkT} target="_blank"><FaTwitter size={25}/> </Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
            
        </div>
    )
}
