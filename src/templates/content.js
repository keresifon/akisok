import React from "react"
import Layout from "../component/layout"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SideBar from "./sidebar"
import {Helmet} from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"

export const query = graphql`
  query($slug: String!) {
    contentfulABlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "YYYY-MM-DD")
      category
      featuredImage {
        fluid {
          src
        }
      }
      body {
        json
      }
    }
  }
`
const Content = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Helmet title={props.data.contentfulABlogPost.title}/>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <div>&nbsp;</div>
            
            <div>
              <img
                className="img-fluid"
                src={props.data.contentfulABlogPost.featuredImage.fluid.src}
                alt={props.data.contentfulABlogPost.featuredImage.title}
              />
            </div>
            <div>&nbsp;</div>
            <div>
              <h1>{props.data.contentfulABlogPost.title}</h1>
              <p>
                {props.data.contentfulABlogPost.date}&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={"folder-open"}
                  style={{ color: "#e74c3c" }}
                />{" "}
                <Link
                  to={`/category/${props.data.contentfulABlogPost.category}`}
                >
                  {props.data.contentfulABlogPost.category}
                </Link>
              </p>
              {documentToReactComponents(
                props.data.contentfulABlogPost.body.json,
                options
              )}
            </div>
          </Col>
          <Col>
            <div>
              <div>&nbsp;</div>
              <SideBar {...props}/>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Content
