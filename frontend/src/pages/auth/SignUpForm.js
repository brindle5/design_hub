import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

// Main layout of form taken from Code Institute's Moments Project

const SignUpForm = () => {
  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className= "p-4" >
          <h3>Sign up for an account</h3>

          <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="username" 
            name="username" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="password" 
            name="password1"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="confirm password" 
            name="password2"
        />
      </Form.Group>


      <Button variant="success" type="submit">
        Sign me up!
      </Button>
    </Form>







           

        </Container>
        <Container className="mt-3">
          <Link  to="/signin">
            Already have an account? <span>Sign In</span>
          </Link>
        </Container>
      </Col>
      <Col md={6}>
      </Col>
    </Row>
  );
};

export default SignUpForm;