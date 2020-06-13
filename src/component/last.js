import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap"

//import Img from "gatsby-image"

const Last = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(
        sort: { fields: date, order: DESC }
        limit: 3
        filter: { category: { eq: "Technology" } }
      ) {
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
      {console.log("Last",props)}
      <div>
        <Container>
          <Row>
            {data.allContentfulABlogPost.edges.map(edge => {
              return (
                <Col md={4} key={edge.node.id}>
                  <CardDeck className=" h-100">
                    <Card className=" mb-4">
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
                        <Card.Text>
                          <Link to={`/${edge.node.slug}`}>
                            Read More &#8594;
                            <br />
                            <br />
                          </Link>
                          <FontAwesomeIcon
                            icon={"folder-open"}
                            style={{ color: "#e74c3c" }}
                          />{" "}
                          <Link to={`/category/${edge.node.category}`}>
                            {edge.node.category}
                          </Link>
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

export default Last
