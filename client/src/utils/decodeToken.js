import tokenService from "../services/tokenService";
import jwtDecode from "jwt-decode";

export default function getTokenBody() {
  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }
  return payload;
}