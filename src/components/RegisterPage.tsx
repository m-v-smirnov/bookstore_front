import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { UserCreateOptions, userCreate } from '../api/userApi';

type Props = {
  setRegisterPage: any;
};

export const RegisterPage: React.FC<Props> = (props) => {
  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserCreateOptions>();
  
  const onSubmit: SubmitHandler<UserCreateOptions> = (data) => {
    console.log(data);
    const options: UserCreateOptions = {
      name: data.name,
      email: data.email,
      dob: data.dob,
      password: data.password,
    };
    userCreate(options).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err.message);
      
    })
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