import React, { useState } from 'react';
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
    align-items: center;

      &__form {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      &__input {
        margin-bottom: 20px;
        width: auto;
      }
      &__input--error{
        padding: 0;
        margin: 0;
        color: red;
      }
      &__label {
        align-self: flex-start;
      }
      &__button {
        margin: 10px 0;
      }
      &__text {
        font-size: 18px;
        padding: 0;
        margin: 0;
      }
  }

`;