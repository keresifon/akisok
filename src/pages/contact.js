

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col, Container , Row} from "react-bootstrap"
import Layout from '../component/layout';
import {Helmet} from "react-helmet"

const Contact = (props) => {
const removeLeadingSlash = require('remove-leading-slash');
  const url = removeLeadingSlash(props.uri);
    return (
        <div>
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
            <Container>
         {/* <Form>
         <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    <Form.Text className="text-muted">
      Please input your name
    </Form.Text>
  </Form.Group>           
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Enter subject" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="textarea" placeholder="Enter subject" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group> 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>    */}
<Form name="akisokcontact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
<input type="hidden" name="akisokcontact" value="contact" />
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="yourname" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Your Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="email subject" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
</Container>
<div>&nbsp;</div>
</Layout>
        </div>
    );
}

export default Contact;