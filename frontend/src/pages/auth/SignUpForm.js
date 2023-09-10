import React, {useState} from "react";
// import styles from '../styles/css/SignInUpForm.module.css';
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

// Main layout of form taken from Code Institute's Moments Project

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,      
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/signin');
    } catch (err) {
      console.log(err.response)
      setErrors(err.response?.data);
     }
  };

  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className= "p-4" >
          <h3>Sign up for an account!</h3>

          <Form onSubmit={handleSubmit}>
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
      {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      
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
      {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

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
      {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

      <Button variant="success" type="submit">
        Sign me up!
      </Button>

      {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
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