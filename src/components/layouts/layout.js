import React from 'react'
import Headnav from './headnav'
import Footer from './footer'

export default function Layout(props) {
    return (
        <div>
            <Headnav/>
            {props.children}
            <Footer/>
        </div>
    )
}
