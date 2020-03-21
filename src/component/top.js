import React from "react"
import styles from "../styles/top.module.scss"
//import hstyles from "../styles/style.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
//import

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
        <li>1</li>
        <li>2</li>
        <li>
          <div className={styles.embeddContainer}>
            <ul >
              {data.allContentfulABlogPost.edges.map(edge => {
                return (
                  <li className={styles.overlay}>
                    
                    <Link  className={styles.overlay} to={`/${edge.node.slug}`}>
                      <img
                        src={edge.node.featuredImage.fluid.src}
                        alt={edge.node.featuredImage.title}
                      />
                      <h2 >{edge.node.title}</h2>
                      <p>{edge.node.date}</p>
                      <h3>{edge.node.category}</h3>
                    </Link>
                    
                  </li>
                )
              })}
            </ul>
          </div>
        </li>
        <li>4</li>
      </ul>
    </div>
  )
}


export default Top
