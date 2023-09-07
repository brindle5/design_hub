import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

// Main layout of form taken from Code Institute's Moments Project

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  })

  const { username, password1, password2 } = signUpData;

  const handleChange = (event) => {
    setSignUpData({
      ...setSignUpData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className= "p-4" >
          <h3>Sign up for an account!</h3>

          <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="username" 
            name="username" 
            value={username}
            onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="password" 
            name="password1"
            value={password1}
            onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="confirm password" 
            name="password2"
            value={password2}
            onChange={handleChange}
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