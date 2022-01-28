import $api from "./api";

class PostService {
  getPosts() {
    return $api.get('/posts');
  }

  getPostById(id) {
    return $api.get(`/posts/${id}`);
  }
}

export default new PostService();