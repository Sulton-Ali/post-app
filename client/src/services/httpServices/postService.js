import $api from "./api";

class PostService {
  getPosts() {
    return $api.get('/posts');
  }

  getPostById(id) {
    return $api.get(`/posts/${id}`);
  }

  createPost(data) {
    return $api.post('/posts', data);
  }

  updatePost(id, newPost) {
    return $api.put(`/posts/${id}`, newPost)
  }

  deletePostById(id) {
    return $api.delete(`/posts/${id}`);
  }
}

export default new PostService();