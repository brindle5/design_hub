import React from "react";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";

const ArtPiece = (props) => {
  const {
    id,
    owner,
    title,
    art_image,
    edited_date,
    ArtPiecePage,
  } = props;

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

  return (
    <Card >
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/artists/${id}`}>
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{edited_date}</span>
            {is_owner && ArtPiecePage && (
              <EditDeleteDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/artwork/${id}`}>
        <Card.Img src={art_image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
      </Card.Body>
    </Card>
  );
};

export default ArtPiece;