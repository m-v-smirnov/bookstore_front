import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledButton, StyledInput } from '../StyledComponents';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../hooks';
import { loginUserThunk } from '../../store/users/userActions';
import { UserLoginOptions } from '../../types/userTypes';

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
        <StyledInput
          className={!errors.email ? 'container__input' : 'container__input--error'}
          id="GET-email"
          {...register("email")}
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
          value='sign in'
        >
          Sign in
        </StyledButton>
      </form>
      <p className="container__text">Don't have an account?</p>
      <StyledButton
        className='container__button'
        onClick={activateRegisterPage}
      >
        Create an account
      </StyledButton>
    </div>
  );
}

