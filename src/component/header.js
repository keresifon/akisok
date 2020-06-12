import React from "react"

import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap"

//import  "../styles/main.scss"

const Header = () => {
  return (
    <div>
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
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
            <Nav.Link href="/">Home</Nav.Link>
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
