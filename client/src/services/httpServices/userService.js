import $api from "./api";


class UserService {
  getUsers() {
    return $api.get('/users');
  }

  getUserById(id) {
    return $api.get(`/users/${id}`);
  }
}

export default new UserService();