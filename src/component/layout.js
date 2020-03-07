import React from "react"
import Header from "../component/header"
import headerStyles from "./layout.module.scss"

const Layout = (props) => {
    
  return (
    <div>
     <Header/>
<div>
     {props.children}
     </div>
    </div>
  )
}

export default Layout