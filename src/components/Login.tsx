import React, { useEffect, useState } from 'react';
import { UserLoginOptions, UserCreateOptions, userLogin, userCreate } from '../api/userApi';
import styled from 'styled-components';
import {LoginPage} from './LoginPage';
import {RegisterPage} from './RegisterPage';

type Props = {
};

export const Login: React.FC<Props> = (props) => {
  const [registerPage, setRegisterPage] = useState(false);

  return (
    <StyledDiv>
      {!registerPage
        ? <LoginPage setRegisterPage={setRegisterPage}/>
        : <RegisterPage setRegisterPage={setRegisterPage}/>
      }
    </StyledDiv>
  );
}


const StyledDiv = styled.div`
.container {
  background-color: white;
  padding: 20px 20px;
  margin: 20px auto;
  width: 380px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  &__form {
  display: flex;
  flex-direction: column;
  }
  &__input {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    width: auto;
    border: 1px solid black;
  }
  &__label {
    align-self: flex-start;
  }
  &__button--blue {
    padding: 5px;
    font-size: 24px;
    font-weight: 600;
    background-color: blueviolet;
    border-radius: 18px;
    border-width: 2px;
    border: 1px solid black;
    color: white;
  }
  &__button--white {
    padding: 5px;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    border-radius: 18px;
    border-width: 2px;
    border: 1px solid black;
    color: black;
  }
}

`;