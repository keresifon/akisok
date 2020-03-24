import React from "react"
import styles from "../styles/mid.module.scss"
import hstyles from "../styles/style.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import Img from "gatsby-image"

const Mid = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(sort: { fields: date, order: DESC }, limit: 3) {
        edges {
          node {
            slug
            title
            date(formatString: "YYYY-MM-DD")
            category
            excerpt
            featuredImage {
              title
              fluid (maxWidth: 345, maxHeight:205){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={styles.midContainer}>
      <ul>
        <li>1</li>
        {data.allContentfulABlogPost.edges.map(edge => {
          return (
            <li className={hstyles.section}>
              
              <Link to={`/${edge.node.slug}`}>
                <img src={edge.node.featuredImage.fluid.src} alt={edge.node.featuredImage.title}/>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.date}</p>
              <p>{edge.node.excerpt}</p>
              <h3>
              <FontAwesomeIcon
                         icon={"folder-open"}
                          style={{ color: "#ffffff" }}
                        />{" "}{edge.node.category}
                        </h3>
              <Link to={`/${edge.node.slug}`} >
                <h4 >Read More &#8594;</h4>
                </Link>
            </li>
          )
        })}
        <li>5</li>
      </ul>
    </div>
  )
}

export default Mid
