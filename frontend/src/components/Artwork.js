import React from "react";
import { Spinner } from "react-bootstrap";


const Artwork = ({ spinner, src, message }) => {
  return (
    <div className="p-4">
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Artwork;