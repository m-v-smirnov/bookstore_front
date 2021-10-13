import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { UserCreateOptions } from '../../api/userApi';
import { useAppDispatch } from '../../hooks';
import { createUserThunk } from '../../store/users/userActions';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  dob: yup.string().required(),
  password: yup.string().min(5).required(),
}).required();

type Props = {
  setRegisterPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterPage: React.FC<Props> = (props) => {
  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateOptions>({ resolver: yupResolver(schema) });

  const dispatch: any = useAppDispatch();
  const onSubmit: SubmitHandler<UserCreateOptions> = (data) => {
    console.log(data);
    const options: UserCreateOptions = {
      name: data.name,
      email: data.email,
      dob: data.dob,
      password: data.password,
    };
    dispatch(createUserThunk(options));
  };

  const deactivateRegPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.setRegisterPage(false);
  }
  return (
    <div className='container'>
      <h3>Create your Bookstore account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='container__form'
      >
        <label
          className='container__label'
          htmlFor="GET-name"
        >
          Name:
        </label>
        <input
          className='container__input'
          id="GET-name"
          type="text"
          {...register("name")}
        >
        </input>
        <p className='container__input--error'>
          {errors.name?.message}
        </p>
        <label
          className='container__label'
          htmlFor="GET-email"
        >
          Email:
        </label>
        <input
          className='container__input'
          id="GET-email"
          type="text"
          {...register("email")}
        >
        </input>
        <p className='container__input--error'>
          {errors.email?.message}
        </p>
        <label
          className='container__label'
          htmlFor="GET-dob"
        >
          Date of birth:
        </label>
        <input
          className='container__input'
          id="GET-dob"
          type="date"
          {...register("dob")}
        >
        </input>
        <p className='container__input--error'>
          {errors.dob?.message}
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
          {errors.password?.message}
        </p>
        <input
          type="submit"
          className='container__button--blue'
        >
        </input>

      </form>
      <h3>Already have an account?</h3>
      <button
        className='container__button--white'
        onClick={deactivateRegPage}
      >
        Sign in
      </button>
    </div>

  );
}