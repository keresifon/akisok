import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome} from "@fortawesome/free-solid-svg-icons"
import { SocialIcon } from "react-social-icons"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import {Helmet} from "react-helmet"
import { Link } from 'gatsby';

import  "../styles/main.scss"


const Header = () => {
  return (
    <div>
      <Helmet title="Akisok"/>
      <Navbar
        fixed="top"
        bg="light"
        variant="light"
        className="navbar navbar-light navbar-expand-md  navigation-clean bg-akisok "
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand as={Link} to="/">akisok!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto ">
          <SocialIcon url="https://twitter.com/akadook" style={{ height: 30, width: 30 }}/> &nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/akisvok" style={{ height: 30, width: 30 }}/> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
            <Nav.Link as={Link} to="/"><FontAwesomeIcon
                  icon={faHome}
                  //style={{ color: "#e74c3c" }}
                />Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">The Blog</Nav.Link>
            <NavDropdown title="All Categories" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/category/Technology">Technology</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/Opinion">Opinion</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/History">History</NavDropdown.Item>
        
      </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    </div>
  )
}

export default Header
