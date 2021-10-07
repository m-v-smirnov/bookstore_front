import React from 'react';
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { UserLoginOptions } from '../api/userApi';
import { useAppDispatch } from '../hooks';
import { loginUserThunk } from '../store/users/userActions';



const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

type Props = {
  setRegisterPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginPage: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const { register, handleSubmit,
    formState: { errors }
  } = useForm<UserLoginOptions>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<UserLoginOptions> = (data) => {
    const options: UserLoginOptions = {
      email: data.email,
      password: data.password,
    };


    dispatch(loginUserThunk(options));
  };
  const activateRegisterPage =
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      props.setRegisterPage(true);
    }

  return (
    <div className='container'>
      <h3>Sign into your Bookstore account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='container__form'
      >
        <label
          className='container__label'
          htmlFor="GET-email"
        >
          Email:
        </label>
        <input
          className='container__input'
          id="GET-email"
          {...register("email")}
        >
        </input>
        <p className='container__input--error'>
          {errors.email?.message}
        </p>
        <label
          className='container__label'
          htmlFor="GET-pass"
        >
          Password:
        </label>
        <input
          className='container__input'
          id="GET-pass"
          type="password"
          {...register("password")}
        >
        </input>
        <p className='container__input--error'>
          {errors.password?.message}</p>
        <input
          type="submit"
          className='container__button--blue'
          value='sign in'
        >
        </input>

      </form>
      <h3>Don't have an account?</h3>
      <button
        className='container__button--white'
        onClick={activateRegisterPage}
      >
        Create an account
      </button>
    </div>
  );
}

