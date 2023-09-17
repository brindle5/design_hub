import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { axiosRes } from "../../api/axiosDefaults";


function AddCommentForm(props) {
  const { piece, setPiece, setComments, artist_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        piece,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPiece((prevPiece) => ({
        results: [
          {
            ...prevPiece.results[0],
            comments_count: prevPiece.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/artists/${artist_id}`}>
          </Link>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className="btn d-block ml-auto"
        disabled={!content.trim()}
        type="submit"
      >
        piece
      </button>
    </Form>
  );
}

export default AddCommentForm;
