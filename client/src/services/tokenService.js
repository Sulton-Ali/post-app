
const setToken = (token) => {
  removeToken();
  localStorage.setItem("token", token);
}

const getToken = () => {
  return localStorage.getItem("token");
}

const removeToken = () => {
  localStorage.removeItem("token");
}

const tokenService = {
  setToken,
  getToken,
  removeToken
}

export default tokenService;