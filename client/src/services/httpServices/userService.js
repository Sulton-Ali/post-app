import $api from "./api";


class UserService {
  getUsers() {
    return $api.get('/users');
  }
}

export default new UserService();