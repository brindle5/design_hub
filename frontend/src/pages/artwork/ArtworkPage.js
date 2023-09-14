import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
import { useParams } from "react-router";


function ArtworkPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: artwork }] = await Promise.all([
          axiosReq.get(`/artwork/${id}`),
        ]);
        setArtwork({ results: [artwork] });
        console.log(artwork);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>

        <p>Artwork component goes here</p>
        <Container>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
 
      </Col>
    </Row>
  );
}

export default ArtworkPage;