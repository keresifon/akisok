import React from "react"
import Header from "../component/header"
import styles from "../styles/style.module.scss"
import Footer from "../component/footer"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from "react-bootstrap"
const Layout = props => {
  return (
    <div >
      
      <Header />
      <div>&nbsp;</div>
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
