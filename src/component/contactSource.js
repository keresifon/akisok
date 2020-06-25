import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col, Container , Row} from "react-bootstrap"
import Layout from '../component/layout';
import {Helmet} from "react-helmet"

const ContactSource = (props) => {


  
    return (
        <div>
       
            <Container>
         
<Form name="akisokcontact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" />
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


        </div>
    );
}

export default ContactSource;