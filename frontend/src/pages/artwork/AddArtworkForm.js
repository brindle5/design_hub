import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import Upload from "../../assets/upload.png";

// import styles from "../../styles/AddArtworkForm.module.css";
// import appStyles from "../../App.module.css";
// import btnStyles from "../../styles/Button.module.css";

function AddArtworkForm() {

//   const [errors, setErrors] = useState({});

  const [artworkData, setArtworkData] = useState({
    title: "",
    altText: "",
    image: "",
  });

  const {title, altText, image} = artworkData;

  const handleChange = (event) => {
    setArtworkData({
      ...artworkData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setArtworkData({
        ...artworkData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      {/* Add your form fields here */}



    Form group + errors

    <Form.Group className="mb-3" controlId="title">
        <Form.Label className="d-none">Artwork Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Artwork Title"
          value={title}
          onChange={handleChange} 
          />
        <Form.Text className="text-muted">          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="altText">
        <Form.Label className="d-none">Alt text</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Describe your piece for artists with accessibility needs"
          value={altText} 
          onChange={handleChange}
        />
        <Form.Text className="text-muted">          
        </Form.Text>
      </Form.Group>

      <Button type="submit">
        Add artwork
      </Button>
      <Button
        onClick={() => {}}
      >
        Cancel
      </Button>

    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className='d-flex flex-column justify-content-center'
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  UPLOAD ARTWORK

                  {/* <Asset src={Upload} message='Click to upload a piece of artwork' /> */}
                </Form.Label>
                <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                // ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default AddArtworkForm
