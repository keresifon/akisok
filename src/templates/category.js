import React  from "react"
import catStyles from "../styles/cat.module.scss"
import Layout from "../component/layout"
import { Link, graphql } from "gatsby"
import '../utils/fontawesome'
import {Location} from '@reach/router'






const Category = (props , {pageContext}) => {


  return (
    <Layout >
      
     <div> 
   <h1>Title-{pageContext}</h1>
    <>
    
    {props.data.allContentfulABlogPost.edges.map(edge => {
      return (
        
        <div  className={catStyles.catgrid} >
          <div className={catStyles.catimage}>
        <Link  to={`/${edge.node.slug}`}>
            <img className={catStyles.img} src={edge.node.featuredImage.fluid.src} alt={edge.node.featuredImage.title}
            /> </Link>
            </div>
            <div className={catStyles.title}>
            <Link  className={catStyles.mtitle} to={`/${edge.node.slug}`}><h2 >{edge.node.title} </h2></Link>
            <p className={catStyles.date}>{edge.node.date}</p>
            <p >{edge.node.excerpt}</p>
            
            </div>
        
      <div>&nbsp;</div>
          </div>
         
      )
    })}
 </> 




</div>
</Layout>
  )
}

export default Category

export const query = graphql`
    query  ($category: String!) {
      allContentfulABlogPost(
        filter: { category: { eq: $category } }
        sort: { fields: date, order: DESC }) 
      { group(field:category)

     {
       fieldValue
       edges {
         node {
           category
         }
       }

     }
       edges {
          node {
            slug
            title
            date(formatString: "YYYY-MM-DD")
            category
            excerpt
            featuredImage {
              title
              fluid(maxWidth: 245, maxHeight: 105) {
                src
              }
            }
          }
        }
      }
    }
    
  `