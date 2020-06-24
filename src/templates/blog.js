import React from 'react';
import { graphql, Link } from 'gatsby';
import {Helmet} from "react-helmet"
import Layout from "../component/layout"
import { Container, Row, Col, Card , CardDeck} from "react-bootstrap"
import Pager from "../component/pager"

const Blog = ({data, pageContext, uri}) => {

   
    return (
        <Layout >
        <>
        
         <div> 
         <div>&nbsp;</div>
         
          <Container className="py-5">
            <Row>
              <Col>
                <div className="section-title">
                <h1>Blog</h1>
                  <span className="sep main-color-bg"></span>
                </div>
              </Col>
            </Row>
          </Container>
    
          <Container>
            <Row>
              {data.allContentfulABlogPost.edges.map(edge => {
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
         <Pager pageContext={pageContext} />
        </>
        </Layout>
    );
}

export default Blog;

export const pageQuery = graphql `
query ($skip: Int!, $limit: Int!){
      allContentfulABlogPost(
        sort: { fields: date, order: DESC }, 
        filter:{category : {nin:"History"}},
        skip:$skip
        limit:$limit
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
    }`