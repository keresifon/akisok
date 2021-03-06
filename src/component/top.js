import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slide from "../component/slider"
import { Card, Container, Row, Col } from "react-bootstrap"

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
      <div>&nbsp;</div>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Slide />
          </Col>
          <Col >
            {data.allContentfulABlogPost.edges.map(edge => {
              return (
                <Card className=" text-black my-2 border-0" key={edge.node.id}>
                  <Card.Img
                    src={edge.node.featuredImage.fluid.src}
                    alt={edge.node.featuredImage.title}
                  />
                  <Card.ImgOverlay>
                    <Card.Title className = "history">
                    <FontAwesomeIcon
                        icon={"folder-open"}
                        style={{ color: "#ffffff" }}
                      />{" "}
                      <Link to={`/category/${edge.node.category}`}></Link>
                        {edge.node.category}
                      
                    </Card.Title>
                    <Card.Text>
                    
                  
                   
                      
                    </Card.Text>
                    <Card.Text>
                      
                      <Link to={`/${edge.node.slug}`} className="small" >{edge.node.title}</Link>
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              )
            })}
          </Col>
        </Row>
      </Container>
      <div>&nbsp;</div>
    </>
  )
}

export default Top
