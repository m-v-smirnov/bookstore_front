import { User } from "../store/users/userTypes"

export type UserLoginOptions = {
  password: string;
  email: string;
}

export type UserCreateOptions = {
  fullName: string;
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