import React from 'react';
import {Button, Card} from 'react-bootstrap';

function Post(props) {
  const {post} = props;

  return (
    <div className="post shadow">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={post.imgUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Button variant="primary">Подробнее...</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;