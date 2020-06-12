import React from "react"
import Styles from "../styles/style.module.scss"

import { Navbar, Nav } from 'react-bootstrap';


const Footer = () => {
    return (

     <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link>Copyright 2020 Akisok.com</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      
    </Nav>
    
  </Navbar>
        
    )
}

export default Footer