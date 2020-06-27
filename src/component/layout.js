import React from "react"
import Header from "../component/header"
//import styles from "../styles/style.module.scss"
import Footer from "../component/footer"
//import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from "react-bootstrap"
const Layout = props => {
  return (
    <>
    <div  className="vh-100">
      <Header />
      <div >
      <div>&nbsp;</div>
      <div>{props.children}</div>
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Layout
