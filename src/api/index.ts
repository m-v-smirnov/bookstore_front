import axios from "axios";
import { API_URL } from "../constants/constants";
import { store } from "../store";
import { setError } from "../store/users/userActions";

export const instance = axios.create({
  baseURL: API_URL,
});



instance.interceptors.request.use(function (config) {
  store.dispatch(setError(''));
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
  if (response.data.token) {
    localStorage.setItem('token',response.data.token);
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});