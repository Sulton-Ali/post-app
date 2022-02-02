import React, { useState } from "react";
import postService from "../../services/httpServices/postService";
import {useNavigate} from "react-router-dom";

function PostAdd({ post, onPostUpdated }) {
  const [title, setTitle] = useState(post ? post.title : "");
  const [description, setDescription] = useState(post ? post.description : "");
  const [category, setCategory] = useState(post ? post.category : "");
  const [imgUrl, setImgUrl] = useState(post ? post.imgUrl : "");
  const [content, setContent] = useState(post ? post.content : "");

  const navigate = useNavigate();

  const create = () => {
    postService.createPost({
      title,
      description,
      category,
      imgUrl,
      content,
    })
        .then(() => navigate('/posts'))
        .catch(e => console.log(e))
  };

  const updatePost = () => {
    postService.updatePost(post._id, {
      title,
      description,
      category,
      imgUrl,
      content,
    })
        .then(() => {
          console.log("Post updated");
          onPostUpdated();
        })
        .catch(e => console.log(e.message))
  }

  return (
    <div className="w-100" style={{ maxWidth: '48em' }}>
      <form className="bg-white py-4 px-3 rounded-3">
        <h4 className="fs-4 fw-bold text-center">Yangi post yaratish yoki tahrirlash</h4>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">
            Sarlavha
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Tavsifi
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="category">
            Toifa
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="imgUrl">
            Rasm URLi
          </label>
          <input
            type="text"
            className="form-control"
            id="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="content">
            Mazmuni
          </label>
          <textarea
            rows="6"
            type="text"
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={post ? updatePost : create}>
          {post ? "Tahrirlash" : "Yaratish"}
        </button>
      </form>
    </div>
  );
}

export default PostAdd;
