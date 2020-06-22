import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import Layout from '../component/layout';
import {Helmet} from "react-helmet"


const Blog = props => {
    console.log(props)
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(sort: { fields: date, order: DESC }) {
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
  //const { edges } = props.data.allContentfulABlogPost.edges
  const removeLeadingSlash = require('remove-leading-slash');
  const url = removeLeadingSlash(props.uri);
  console.log(url)
  return (
    <Layout >
    <>
    <Helmet title={url}/>
     <div> 
     <div>&nbsp;</div>
      <Container className="py-5">
        <Row>
          <Col>
            <div className="section-title">
              <h1>{url}</h1>
              <span className="sep main-color-bg"></span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {props.data.allContentfulABlogPost.edges.map(edge => {
            return (
              <Col md={5} key={edge.node.id}>
                <CardDeck className=" h-100">
                  <Card className=" mb-4 border-0">
                    <Card.Img
                      variant="top"
                      src={edge.node.featuredImage.fluid.src}
                    />
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/${edge.node.slug}`}>
                          &#8594; {edge.node.title}
                        </Link>
                      </Card.Title>
                      <Card.Text>{edge.node.excerpt}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0">
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

export default Blog
