import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import ArtPiecePage from "./ArtPiecePage";
import ArtworkAsset from "../../components/ArtworkAsset";

function ArtworkListPage({ message, filter = "" }) {
    const [pieces, setPieces] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchPieces = async () => {
          try {
            const { data } = await axiosReq.get(`/artwork/?${filter}search=${query}`);
            setPieces(data);
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchPieces();
        }, 750);
    
        return () => {
          clearTimeout(timer);
        };
      }, [filter, query, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Form
          className="artItemSearch"          
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            name="search"
            placeholder="Search for: Gothic artists in NYC..."
          />
        </Form>

      {hasLoaded ? (
          <>
            {pieces.results.length ? (
              pieces.results.map((piece) => (
                <ArtPiecePage key={piece.id} {...piece} />
              ))
            ) : (
              <Container >
                <ArtworkAsset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container >
            <ArtworkAsset spinner />
          </Container>
        )}

        <p>List of pieces here</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">

      </Col>
    </Row>
  );
}

export default ArtworkListPage;
