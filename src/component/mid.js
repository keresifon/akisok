import React from "react"
import styles from "../styles/mid.module.scss"
import hstyles from "../styles/style.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            featuredImage {
          fluid {
            srcSetWebp
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
                <h2 >{edge.node.title}</h2>
              </Link>
              <p>{edge.node.date}</p>
            </li>
          )
        })}
        <li>5</li>
      </ul>
    </div>
  )
}

export default Mid
