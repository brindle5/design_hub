// Code based on CI Moments Project

// jshint esversion: 11, jquery: true

import React, { useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function ArtPiecePage(props) {
  const { id, owner } = props;
  const [piece, setPiece] = useState({ results: [] });
  const idBackup = useParams();
  console.log(id);
  console.log(idBackup);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/artwork/${id||idBackup.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/artwork/${id||idBackup.id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: piece }] = await Promise.all([
          axiosReq.get(`/artwork/${id||idBackup.id}`),
        ]);
        setPiece({ results: [piece] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
        <Row className="h-25">
        <div className="d-flex align-items-start">
            <span>{piece.edited_date}</span>
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
                <h1>{piece.title} {piece.owner}</h1>   
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