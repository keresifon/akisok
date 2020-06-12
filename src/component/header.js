import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import styles from "../styles/style.module.scss"
//import  "../styles/main.scss"

const Header = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        bg="light"
        variant="light"
        className="navbar navbar-light navbar-expand-md shadow navigation-clean"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="/">akisok!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto ">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">The Blog</Nav.Link>
            <Nav.Link href="#pricing">All Categories</Nav.Link>
            <Nav.Link href="/category/Technology">Technology</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.logo}>
            <Link to="/">akisok! </Link>
          </div>
        </div>
        <div className={styles.navigation}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">The Blog</Link>
              </li>
              <li>
                <Link to="/">All Categories</Link>
              </li>
              <li>
                <Link to="/category/Technology">Technology</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
