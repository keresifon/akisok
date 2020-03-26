import React from "react"
import Header from "../component/header"
import styles from "../styles/style.module.scss"
import Footer from "../component/footer"

const Layout = props => {
  return (
    <div className={styles.container}>
      <Header />

      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
