import React, {useEffect, useState} from 'react';
import postService from "../../services/httpServices/postService";
import Post from "../../components/Post/Post";

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
    <div className="posts rounded-3 p-3 bg-white shadow">
      <h3>Посты</h3>
      <div className="d-flex flex-wrap justify-content-between">
        {posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
}

export default Posts;