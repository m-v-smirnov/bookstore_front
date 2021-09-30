import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { UserLoginOptions, userLogin } from '../api/userApi';
//import styled from 'styled-components';

type Props = {
  setRegisterPage: any;
};

export const LoginPage: React.FC<Props> = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserLoginOptions>();
  const onSubmit: SubmitHandler<UserLoginOptions> = (data) => {
    console.log(data);
    const options: UserLoginOptions = {
      email: data.email,
      password: data.password,
    };
    const res: any = userLogin(options);
    console.log(res);
  };
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
            onClick={(e) => {
              e.preventDefault();
              props.setRegisterPage(true);
            }}
          >
            Create an account
          </button>
      </div>
  );
}