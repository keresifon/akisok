import React from "react"
import ContactSource from "../component/contactSource"
import { Col, Container , Row } from "react-bootstrap"
import Layout from '../component/layout';
import {Helmet} from "react-helmet"

const Contact = (props) => {
const removeLeadingSlash = require('remove-leading-slash');
  const url = removeLeadingSlash(props.uri);
  return (
    <Layout>
    <Helmet title={url}/>
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
      <ContactSource />
     
      </Layout>
      )
}

export default Contact
