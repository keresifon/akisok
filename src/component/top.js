import React from "react"
import styles from "../styles/top.module.scss"
//import hstyles from "../styles/style.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slide from "../component/slider"
import { Card, Container, Row, Col } from 'react-bootstrap';

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
            id
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
    <>
    <div>
    &nbsp;
    </div>
    
    <Container>  
      <Row>
        <Col md={8}>
      <Slide />
        
        </Col>
        <Col >
        
              {data.allContentfulABlogPost.edges.map(edge => {
                return (
                  <Card className="bg-dark text-black">
  <Card.Img src={edge.node.featuredImage.fluid.src} alt={edge.node.featuredImage.title} />
  <Card.ImgOverlay>
    <Card.Title><Link  to={`/${edge.node.slug}`}>{edge.node.title}</Link></Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Card.Text>{edge.node.date}</Card.Text>
  </Card.ImgOverlay>
</Card>

                  
                  
                )
              })}
            
        </Col>
        
      </Row>
      </Container>
      <div>
    &nbsp;
    </div>
    </>
  )
}

export default Top
