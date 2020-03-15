import React from "react"
import Header from "../component/header"


import styles from "../styles/style.module.scss"

const Layout = (props) => {
    
  return (
    <div className={styles.container}>
     <Header/>

<div>
     {props.children}
     </div>
    </div>
  )
}

export default Layout