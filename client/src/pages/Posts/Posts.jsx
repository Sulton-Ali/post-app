import React, { useEffect, useState } from "react";
import postService from "../../services/httpServices/postService";
import Post from "../../components/Post/Post";
import { Button } from "react-bootstrap";
import CheckAccess from "../../components/CheckAccess/CheckAccess";
import { ROLES } from "../../utils/constants";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService
      .getPosts()
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-100 posts rounded-3 p-3">
      <div className="w-100 bg-white shadow rounded-3 p-3 mb-2 d-flex justify-content-between align-items-center">
        <h3 className="fs-3 fw-bold text-black-50">Postlar</h3>
        <div>
          <CheckAccess roles={[ROLES.ADMIN, ROLES.USER]}>
            <Link to="/posts/add">
              <Button variant="primary">Post yaratish</Button>
            </Link>
          </CheckAccess>
        </div>
      </div>
      <div className="row flex-wrap justify-content-start rounded-3 bg-white shadow-lg p-5 m-0 g-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
