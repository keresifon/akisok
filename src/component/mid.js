import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Card, CardDeck, Container, Row, Col} from "react-bootstrap"
//import Img from "gatsby-image"

const Mid = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(sort: { fields: date, order: DESC }, limit: 3, filter: { category :{eq :"Opinion"} }) {
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
    <>
    <div >
      
    <Container>  
      <Row>
        {data.allContentfulABlogPost.edges.map(edge => {
          return (
 <Col>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src={edge.node.featuredImage.fluid.src} />
    <Card.Body>
      <Card.Title><Link to={`/${edge.node.slug}`}>{edge.node.title}</Link></Card.Title>
      <Card.Text>
      {edge.node.excerpt}
      <Link to={`/${edge.node.slug}`} >
                <h4 >Read More &#8594;</h4>
                </Link><FontAwesomeIcon
                  icon={"folder-open"}
                  style={{ color: "#e74c3c" }}
                />{" "}
      <Link to={`/category/${edge.node.category}`}>{edge.node.category}</Link>
      </Card.Text>
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
  )
}

export default Mid
