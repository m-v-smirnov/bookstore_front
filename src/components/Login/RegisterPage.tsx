import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledButton, StyledInput } from '../StyledComponents';
import { useAppDispatch } from '../../hooks';
import { createUserThunk } from '../../store/users/userActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserCreateOptions } from '../../types/userTypes';
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required(),
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
      fullName: data.fullName,
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
        <StyledInput
          className={!errors.fullName ? 'container__input' : 'container__input--error'}
          id="GET-name"
          type="text"
          {...register("fullName")}
        >
        </StyledInput>
        <label
          className='container__label'
          htmlFor="GET-email"
        >
          Email:
        </label>
        <StyledInput
        className={!errors.email ? 'container__input' : 'container__input--error'}
          id="GET-email"
          type="text"
          {...register("email")}
        >
        </StyledInput>
        <label
          className='container__label'
          htmlFor="GET-dob"
        >
          Date of birth:
        </label>
        <StyledInput
        className={!errors.dob ? 'container__input' : 'container__input--error'}
          id="GET-dob"
          type="date"
          {...register("dob")}
        >
        </StyledInput>
        <label
          className='container__label'
          htmlFor="GET-pass"
        >
          Password:
        </label>
        <StyledInput
        className={!errors.password ? 'container__input' : 'container__input--error'}
          id="GET-pass"
          type="password"
          {...register("password")}
        >
        </StyledInput>
        <StyledButton
          type="submit"
          className='container__button'
        >
          Create
        </StyledButton>

      </form>
      <p className='container__text'>Already have an account?</p>
      <StyledButton
        className='container__button'
        onClick={deactivateRegPage}
      >
        Sign in
      </StyledButton>
    </div>

  );
}