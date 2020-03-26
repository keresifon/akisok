import React from "react"
import styles from "../styles/third.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Vidone from "../component/videoone"
import Slide from "../component/slider"

const Third = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(
        filter: { category: { eq: "History" } }
        sort: { fields: date, order: ASC }
        limit: 2
      ) {
        edges {
          node {
            slug
            title
            date(formatString: "YYYY-MM-DD")
            category
            featuredImage {
              title
              fluid(maxWidth: 345, maxHeight: 205) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      
    }
  `)

  return (
    
    <div className={styles.topContainer}>
      <h4>AKWA IBOM ON YOUTUBE</h4>
      <ul>
        <li></li>
        
        <li><Vidone />
        </li>
        
        <li></li>
      </ul>
    </div>
  )
}

export default Third
