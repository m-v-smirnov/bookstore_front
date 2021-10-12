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
  fullName: string;
  dob: string;
  password?: string;
  avatarRef: string;
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
  const response = await instance.post('/auth/registration', {
    fullName: options.name,
    email: options.email,
    dob: options.dob,
    password: options.password,
  });
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
    {
      fullName: options.fullName,
      dob: options.dob,
      password: options.password,
      avatarRef: options.avatarRef,
    });
  return response.data;
};

export const getUserById = async ():Promise<UserResponseType> => {
  const response = await instance.get("/users");
  return response.data;
}
