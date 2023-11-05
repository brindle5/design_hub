// Code based on CI Moments Project

// jshint esversion: 11, jquery: true

import React, { useState, useRef } from "react";
import { useHistory} from "react-router-dom"; 
import { axiosReq } from "../../api/axiosDefaults";

import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Artwork from "../../components/ArtworkAsset";
import Upload from "../../assets/upload.png";


function AddArtworkPage() {
  const [errors, setErrors] = useState({});
  const [artworkData, setArtworkData] = useState({
    title: "",
    art_image: "",
  });
  const history = useHistory();
  const {title, art_image} = artworkData;
  const imageInput = useRef(null);

  const handleAddTitle = (event) => {
    setArtworkData({
      ...artworkData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(art_image);
      setArtworkData({
        ...artworkData,
        art_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // convert image to upload to cloudinary
      const formData = new FormData();
      formData.append("art_image", imageInput.current.files[0]);
      formData.append("title", title);
      const { data } = await axiosReq.post("/artwork/", formData);  
      history.push(`/artwork/${data.id}`);  
      history.push("/");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center artInputField">
    <Form.Group className="mb-3" controlId="title">
        <Form.Label className="d-none">Artwork Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Artwork Title"
          value={title}
          onChange={handleAddTitle}
          name="title" 
          />
        <Form.Text className="text-muted">          
        </Form.Text>
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
          <Button 
            type="submit" 
            variant="success"
            disabled={!art_image || !title}
            >
            Add artwork
          </Button>
          <Button
            variant="danger"
            onClick={() => history.goBack()}>
            Cancel
          </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className='d-flex flex-column justify-content-center'
          >
            <Form.Group className="text-center artInputField">

            {art_image ? (
                <>
                  <figure>
                    <Image src={art_image} rounded />
                  </figure>
                  <div>
                    <Form.Label                      
                      htmlFor="image-upload">
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                   <Artwork 
                    src={Upload} 
                    message='Click to upload a piece of artwork'
                    className="uploadImage"
                     />
                </Form.Label>
              )}
                <Form.File
                className="d-none"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.art_image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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

export default AddArtworkPage
