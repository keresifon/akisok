import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome} from "@fortawesome/free-solid-svg-icons"
import { SocialIcon } from "react-social-icons"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap"
import {Helmet} from "react-helmet"

import  "../styles/main.scss"

const Header = () => {
  return (
    <div>
      <Helmet title="Akisok"/>
      <Navbar
        fixed="top"
        bg="light"
        variant="light"
        className="navbar navbar-light navbar-expand-md shadow navigation-clean "
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="/">akisok!</Navbar.Brand>
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
            <Nav.Link href="/"><FontAwesomeIcon
                  icon={faHome}
                  //style={{ color: "#e74c3c" }}
                />Home</Nav.Link>
            <Nav.Link href="#features">The Blog</Nav.Link>
            <NavDropdown title="All Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/category/Technology">Technology</NavDropdown.Item>
        <NavDropdown.Item href="/category/Opinion">Opinion</NavDropdown.Item>
        <NavDropdown.Item href="/category/History">History</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    </div>
  )
}

export default Header
