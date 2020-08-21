import React from 'react'
import Headnav from './headnav'
import Footer from './footer'
import {Container} from "reactstrap"

export default function Layout(props) {
    return (
        <div>
             <div className="headnavalign">
            <Headnav/>
             </div>
            {props.children}
            <div className="align">
            <Footer/>
            </div>
            </div>
    )
}
