import React, { useState} from "react";
// import styles from '../styles/SignInUpForm.module.css';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInPage() {
  const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
      })
    
    const { username, password } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const {data} = await axios.post('/dj-rest-auth/login/', signInData);
          setCurrentUser(data.user);
          history.push('/')
        } catch (err) {
          setErrors(err.response?.data)
         }
      };


  return (
    <Row>
      <Col className="my-auto p-0 p-md-2">
        <Container className="p-4">
          <h3>Already got an account? Sign In</h3>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
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

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={handleChange}
            name="password"
        />
      </Form.Group>
      {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
      <Button variant="success" type="submit">
        Sign In
      </Button>
      {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
    </Form>

        </Container>
        <Container className="mt-3">
          <Link  to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className="my-auto d-none d-md-block p-2">

      </Col>
    </Row>
  );
};

export default SignInPage;