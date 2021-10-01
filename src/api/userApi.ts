import { User } from "../store/users/userTypes";
import { instance } from ".";


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

export type UserResponseType = {
  token: string;
  message?: string;
  user: User
}

export const userLogin = async (options: UserLoginOptions): Promise<UserResponseType> => {
  const response = await instance.post('/auth/login', {
    email: options.email,
    password: options.password,
  });
  return response.data;
};

export const userCreate = async (options: UserCreateOptions): Promise<UserResponseType> => {
  const response = await instance.post('/auth/reg', {
    fullName: options.name,
    email: options.email,
    dob: options.dob,
    password: options.password,
  });
  return response.data;
};

export const userLoginByToken = async (): Promise<UserResponseType> => {
  const response = await instance.post('/auth/login-token');
  return response.data;
};

export const userDelete = async (): Promise<UserResponseType> => {
  const response = await instance.delete('/users');

  return response.data;
};

export const userEdit = async (options: UserEditOptions): Promise<UserResponseType> => {
  const response = await instance.patch('/users',
    {
      fullName: options.name,
      dob: options.dob,
      password: options.password,
    });
  return response.data;
};
