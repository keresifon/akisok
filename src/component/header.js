import React from "react"
import { Link , graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
    query { 
        site {
        siteMetadata {
          title
        }
      }
                  
                }
  `)
  return (
    <div className={headerStyles.header}>
     <nav className= {headerStyles.nav}>
         <ul className= {headerStyles.nav}>
         <li>
             <Link className= {headerStyles.navItem}to="/">Home</Link>
        </li>
        <li>
             <Link className= {headerStyles.navItem} to="/">The Blog</Link>
        </li>
             </ul>
             </nav>
    </div>
  )
}

export default Header