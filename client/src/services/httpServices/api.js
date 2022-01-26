import axios from 'axios';
import {BASE_URL} from "../../utils/constants";
import loginService from "./loginService";
import tokenService from "../tokenService";

const $api = axios.create({
  baseURL: BASE_URL
});

$api.interceptors.request.use(function (config) {
  const url = config.url;
  const token = tokenService.getToken();
  if (url !== "/registration" && url !== "/login" && token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

$api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    loginService.logout();
  }
  return Promise.reject(error);
});

export default $api;