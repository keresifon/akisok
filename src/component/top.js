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
                <Card className=" text-black my-2" key={edge.node.id}>
                  <Card.Img
                    src={edge.node.featuredImage.fluid.src}
                    alt={edge.node.featuredImage.title}
                  />
                  <Card.ImgOverlay>
                    <Card.Title>
                    <FontAwesomeIcon
                        icon={"folder-open"}
                        style={{ color: "#ffffff" }}
                      />{" "}
                      <Link to={`/category/${edge.node.category}`}>
                        {edge.node.category}
                      </Link>
                    </Card.Title>
                    <Card.Text>
                    
                    <FontAwesomeIcon icon={"calendar"} />
                      {edge.node.date}
                   
                      
                    </Card.Text>
                    <Card.Text>
                      
                      <Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
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
