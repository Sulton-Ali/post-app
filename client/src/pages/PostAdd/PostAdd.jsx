import React, { useState } from "react";

function PostAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  const create = () => {
    console.log({
      title,
      description,
      category,
      imgUrl,
      content,
    });
  };

  return (
    <div>
      <form className="w-lg-75 mx-auto bg-white p-5 mt-5 rounded-3">
        <h4 className="fs-4 fw-bold text-center">Yangi post yaratish</h4>
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
            rows="3"
            type="text"
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={create}>
          Yaratish
        </button>
      </form>
    </div>
  );
}

export default PostAdd;
