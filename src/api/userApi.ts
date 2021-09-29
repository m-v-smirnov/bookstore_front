import { User } from "../store/userReducer";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3010',
});


export type UserLoginOptions = {
  email: string;
  password: string;
}
export type UserCreateOptions = {
  name: string;
  email: string;
  dob: string;
  password: string;
}
export type UserEditOptions = {
  name: string;
  dob: string;
  password: string;
}

type UserResposneType = {
  token: string;
  message?: string;
  user: User
}

export const userLogin = async (options: UserLoginOptions):Promise<UserResposneType>  => {
  const response = await instance({
    method: 'POST',
    url: '/auth/login',
    data: {
      email: options.email,
      password: options.password,
    }
  });

  return response.data;
};

export const userCreate = async (options: UserCreateOptions):Promise<UserResposneType>  => {
  const response = await instance({
    method: 'POST',
    url: '/auth/reg',
    data: {
      fullName: options.name,
      email: options.email,
      dob: options.dob,
      password: options.password,
    }
  });

  return response.data;
};

export const userLoginByToken = async (token: string):Promise<UserResposneType>  => {
  const response = await instance({
    method: 'POST',
    url: '/auth/login-token',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}; 

export const userDelete = async (token: string):Promise<UserResposneType>  => {
  const response = await instance({
    method: 'DELETE',
    url: '/users',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}; 

export const userEdit = async (options: UserEditOptions, token: string):Promise<UserResposneType>  => {
  const response = await instance({
    method: 'PATCH',
    url: '/users',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      fullName: options.name,
      dob: options.dob,
      password: options.password,
    }
  });

  return response.data;
};
