import React, {useEffect, useState} from 'react';
import postService from "../../services/httpServices/postService";
import Post from "../../components/Post/Post";
import {Button} from "react-bootstrap";
import CheckAccess from "../../components/CheckAccess/CheckAccess";
import {ROLES} from "../../utils/constants";
import {Link} from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService.getPosts()
      .then(res => {
        console.log(res);
        setPosts([...res.data, ...res.data, ...res.data]);
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <div className="posts rounded-3 p-3">
      <div className="w-100 bg-white shadow rounded-3 p-3 mb-2 d-flex justify-content-between align-items-center">
        <h3 className="fs-3 fw-bold text-black-50">
          Посты
        </h3>
        <div>
          <CheckAccess role={ROLES.ADMIN}>
            <Link to="/posts/add"><Button variant="primary">Добавить пост</Button></Link>
          </CheckAccess>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around rounded-3 bg-white shadow-lg p-5">
        {posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
}

export default Posts;