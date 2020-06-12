import React  from "react"
import catStyles from "../styles/cat.module.scss"
import Layout from "../component/layout"
import { Link, graphql } from "gatsby"
import '../utils/fontawesome'
import { Container, Row, Col } from "react-bootstrap"






const Category = (props , {pageContext}) => {


  return (
    <Layout >
       <>
     <div> 
     <div>&nbsp;</div>
       <div className="container  "><h1>{props.pageContext.category}</h1></div>
   
   
    
    {props.data.allContentfulABlogPost.edges.map(edge => {
      return (
        
        <Container>
          <Row>
            <Col md={3}><div><Link  to={`/${edge.node.slug}`}>
            <img  src={edge.node.featuredImage.fluid.src} alt={edge.node.featuredImage.title}
            /> </Link>
            </div>
            <div>&nbsp;</div>
            </Col>
            <Col>
            <div className={catStyles.title}>
            <Link   className={catStyles.mtitle} to={`/${edge.node.slug}`}><h2 >{edge.node.title} </h2></Link>
            <p className={catStyles.date}>{edge.node.date}</p>
            <p >{edge.node.excerpt}</p>
            
            </div></Col>
          </Row>
        </Container>
        
      
          
         
      )
    })}
 




</div>
</> 
</Layout>
  )
}

export default Category

export const query = graphql`
    query  ($cat: String!) {
      allContentfulABlogPost(
        filter: { category: { eq: $cat } }
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
            id
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