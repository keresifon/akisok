import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';


const Footer = () => {
    return (

     <Navbar bg="dark" variant="dark" className=" h-100" >
    <Nav className="mr-auto">
    <Nav.Link>Copyright 2020 Akisok.com</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      
    </Nav>
    
  </Navbar>
        
    )
}

export default Footer