// Code based on CI Moments Project

// jshint esversion: 11, jquery: true

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import React, { useState, useRef, useEffect } from "react";

import { Alert } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// Import statements...

function EditArtworkPage() {
  const [errors, setErrors] = useState({});
  const [artworkData, setArtworkData] = useState({
    title: "",
    art_image: "",
  });
  const [artImageFile, setArtImageFile] = useState(null); // New state variable
  const [hasNewImage, setHasNewImage] = useState(false); // New state variable
  const history = useHistory();
  const { title, art_image } = artworkData;
  const imageInput = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/artwork/${id}`);
        const { title, art_image, is_owner } = data;
        setArtworkData({ title, art_image });

        is_owner ? setArtworkData({ title, art_image }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleAddTitle = (event) => {
    setArtworkData({
      ...artworkData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const selectedFile = event.target.files[0];
      setArtImageFile(selectedFile);
      setHasNewImage(true); // Set to true when a new image is selected
      setArtworkData({
        ...artworkData,
        art_image: URL.createObjectURL(selectedFile),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Check if imageInput.current exists and has files
    if (hasNewImage) {
      formData.append("art_image", artImageFile, artImageFile.name);
    } else {
      formData.append("art_image", art_image); // Use the existing image data
    }

    formData.append("title", title);

    try {
      const { data } = await axiosReq.put(`/artwork/${id}/`, formData); // Use the correct URL
      history.push(`/artwork/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center artInputField">
      {/* Rest of your JSX code... */}
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        {/* Rest of your JSX code... */}
      </Row>
    </Form>
  );
}

export default EditArtworkPage;
