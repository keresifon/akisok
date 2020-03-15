import React from "react"
import { Link , graphql, useStaticQuery } from "gatsby"

import styles from "../styles/style.module.scss"

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
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <div classname={styles.logo}>
        <Link to="/">akisok! </Link>
        </div>
      </div>
      <div className={styles.navigation}>
     <nav className= {styles.nav}>
         <ul >
         <li>
             <Link to="/">Home</Link>
        </li>
        <li>
             <Link  to="/">The Blog</Link>
        </li>
        <li>
             <Link  to="/">All Categories</Link>
        </li>
        <li>
             <Link  to="/">Events</Link>
        </li>
        <li>
             <Link  to="/">Contact</Link>
        </li>
             </ul>
             </nav>
             </div>
    </div>
  )
}

export default Header