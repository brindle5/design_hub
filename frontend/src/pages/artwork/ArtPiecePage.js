import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


function ArtPiecePage() {
  const { id } = useParams();
  const [piece, setPiece] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: piece }] = await Promise.all([
          axiosReq.get(`/artwork/${id}`),
        ]);
        setPiece({ results: [piece] });
        console.log(piece);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>

        <p> Individual Art piece goes here</p>
        <Container>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">

      </Col>
    </Row>
  );
}

export default ArtPiecePage;