import $api from "./api";
import eventBus from "../../utils/eventBus";

class LoginService {
  login(body) {
    return $api.post('/auth/login', body);
  }

  logout() {
    eventBus.dispatch("logout", {});
  }
}

export default new LoginService();