import React  from "react"

import Layout from "../component/layout"
import { Link, graphql } from "gatsby"
import '../utils/fontawesome'
import { Container, Row, Col, Card , CardDeck} from "react-bootstrap"







const Category = (props , {pageContext}) => {


  return (
    <Layout >
       <>
     <div> 
     <div>&nbsp;</div>
       
       <Container className="py-5">
          <Row>
            <Col><div ><h1>{props.pageContext.category}</h1></div></Col>
            </Row>
            </Container>
   
       <Container>
          <Row>
    {props.data.allContentfulABlogPost.edges.map(edge => {
      return (
        
        
          <Col md={4} key={edge.node.id}>
                  <CardDeck className=" h-100">
                    <Card className=" mb-4" >
                      <Card.Img
                        variant="top"
                        src={edge.node.featuredImage.fluid.src}
                      />
                      <Card.Body>
                        <Card.Title>
                          <Link to={`/${edge.node.slug}`}>
                            {edge.node.title}
                          </Link>
                        </Card.Title>
                        <Card.Text>{edge.node.excerpt}</Card.Text>
                        
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{edge.node.date}</small>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                </Col>
          
        
      
          
         
      )
    })}
 
 </Row>
        </Container>



</div>
</> 
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