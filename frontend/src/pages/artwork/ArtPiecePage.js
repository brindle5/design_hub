// Code based on CI Moments Project

import React, { useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";


function ArtPiecePage(props) {
  const { id } = props();
  const [piece, setPiece] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/artwork/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/artwork/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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

        <div className="d-flex align-items-center">
            <span>{edited_date}</span>
                {is_owner && ArtPiecePage && (
              <EditDeleteDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}/>
            )}
        </div>

      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {piece.results.map((piece) => (
          <Container key={piece.id}>
            <Row>
              <Col>
                <h1>{piece.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={piece.art_image}
                  alt={piece.title}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        ))}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
  );
}

export default ArtPiecePage;