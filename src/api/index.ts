import axios from "axios";
import { config } from "process";

export const instance = axios.create({
  baseURL: 'http://localhost:3010',
});

instance.interceptors.request.use(function (config) {
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