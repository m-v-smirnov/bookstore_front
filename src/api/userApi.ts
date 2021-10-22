import { instance } from ".";
import {
  UserCreateOptions,
  UserEditOptions,
  UserLoginOptions,
  UserResponseType
} from "../types/userTypes";

export const userLogin = async (options: UserLoginOptions): Promise<UserResponseType> => {
  const response = await instance.post('/auth/login', options);
  return response.data;
};

export const userCreate = async (options: UserCreateOptions): Promise<UserResponseType> => {
  const response = await instance.post('/auth/registration', options);
  return response.data;
};

export const userLoginByToken = async (): Promise<UserResponseType> => {
  const response = await instance.get('/auth/login-token');
  return response.data;
};

export const userDelete = async (): Promise<UserResponseType> => {
  const response = await instance.delete('/users');

  return response.data;
};

export const userEdit = async (options: UserEditOptions): Promise<UserResponseType> => {
  const response = await instance.patch('/users',
    options);
  return response.data;
};

export const getUserById = async (): Promise<UserResponseType> => {
  const response = await instance.get("/users");
  return response.data;
}
