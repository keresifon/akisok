import React from "react"
import styles from "../styles/top.module.scss"
//import hstyles from "../styles/style.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slide from "../component/slider"

const Top = () => {
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
      <ul>
        <li></li>
        <li><Slide />
        <h3>
                        
                        Pictures &#8594;
                      </h3></li>
        <li>
          <div className={styles.embeddContainer}>
            <ul>
              {data.allContentfulABlogPost.edges.map(edge => {
                return (
                  <li className={styles.overlay} >
                    <Link  to={`/${edge.node.slug}`}>
                      <img 
                        src={edge.node.featuredImage.fluid.src}
                        alt={edge.node.featuredImage.title}
                      />
                      <h2>{edge.node.title}</h2>
                      <p> 
                        <FontAwesomeIcon
                          icon={"calendar"}
                          
                        />{" "}{edge.node.date}</p>
                      <h3>
                        <FontAwesomeIcon
                          icon={"folder-open"}
                          style={{ color: "#ffffff" }}
                        />{" "}
                        {edge.node.category}
                      </h3>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Top
