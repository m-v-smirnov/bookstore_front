import React, { useEffect, useState } from 'react';
import { UserLoginOptions, UserCreateOptions, userLogin, userCreate } from '../api/userApi';
import styled from 'styled-components';

type Props = {
};

export const Login: React.FC<Props> = (props) => {
  const [registerPage, setRegisterPage] = useState(false);
  const [sendData, setSendData] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    if (registerPage) return;
    if (!sendData) return;
    const options: UserLoginOptions = {
      email,
      password,
    };
    const res: any = userLogin(options);
    console.log(res);
    setSendData(false);
  },
    [sendData]
  );
  useEffect(() => {
    if (!registerPage) return;
    if (!sendData) return;
    const options: UserCreateOptions = {
      name,
      email,
      dob,
      password,
    };
    const res: any = userCreate(options);
    console.log(res);
    setSendData(false);
  },
    [sendData]
  );

  return (
    <StyledDiv>
      {!registerPage
        ? <> {/* Login form*/}
          <div className='container'>
            <h3>Sign into your Bookstore account</h3>
            <form className='container__form'>
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
                name="email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
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
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
              </input>
              <button
                className='container__button--blue'
                onClick={(e) => {
                  e.preventDefault();
                  setSendData(true);
                }}
              >
                Sign in
              </button>

            </form>
            <h3>Don't have an account?</h3>
            <button
              className='container__button--white'
              onClick={(e) => {
                e.preventDefault();
                setRegisterPage(true);

              }}
            >
              Create an account
            </button>
          </div>
        </>
        : <> {/* Register form*/}
          <div className='container'>
            <h3>Create your Bookstore account</h3>
            <form className='container__form'>
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
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                name="dob"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
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
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
              </input>
              <button
                className='container__button--blue'
                onClick={(e) => {
                  e.preventDefault();
                  setSendData(true);

                }}
              >
                Create an account
              </button>

            </form>
            <h3>Already have an account?</h3>
            <button
              className='container__button--white'
              onClick={(e) => {
                e.preventDefault();
                setRegisterPage(false);

              }}
            >
              Sign in
            </button>
          </div>
        </>
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
