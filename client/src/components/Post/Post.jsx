import React from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import editLogo from '../../assets/icons/edit.svg';
import deleteLogo from '../../assets/icons/delete.svg';

function Post(props) {
  const { post } = props;
  const navigate = useNavigate();

  return (
    <div className="post" style={{ width: "20rem" }}>
      <Card className="shadow">
        <Card.Img variant="top" src={post.imgUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => navigate(`/posts/${post._id}`)}>Batafsil...</Button>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className="ms-auto">
              <img src={editLogo} alt="edit logo" width={24} height={24} />
            </Button>
            <Button variant="danger">
              <img src={deleteLogo} alt="delete logo" width={24} height={24} />
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Post;
