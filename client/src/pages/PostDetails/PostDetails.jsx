import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import postService from "../../services/httpServices/postService";

function PostDetails() {

  const [post, setPost] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    postService.getPostById(id)
      .then(res => {
        setPost(res.data);
      })
      .catch(e => console.log(e))
  }, []);

  return post && (
    <section className="bg-white rounded-3 py-3 px-4">
      <div className="row mx-0 mb-4 d-flex flex-column flex-sm-row justify-content-sm-between justify-content-start">
        <img src={post.imgUrl} alt="post logo" className="col-sm-5 col-12 p-0" />
        <div className="col-sm-6 col-12 pt-3 pt-sm-0 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center fs-3 fw-bold">{post.title}</h3>
          <p className="align-self-end fw-bold py-3">{post.authorName}</p>
          <p>{post.description}</p>
        </div>
      </div>
      <div>
          <div className="lh-lg" dangerouslySetInnerHTML={{__html: post.content}}/>
      </div>
    </section>
  );
}

export default PostDetails;