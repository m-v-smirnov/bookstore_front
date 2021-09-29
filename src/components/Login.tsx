import React, { useEffect, useState } from 'react';
import {UserLoginOptions,userLogin} from '../api/userApi';

type Props = {
};

export const Login: React.FC<Props> = (props) => {
  const [registerPage, setRegisterPage] = useState(false);
  const [sendData, setSendData] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
    if (!sendData) return;
    const options: UserLoginOptions = {
      email: loginEmail,
      password: loginPassword,
    };
    const res: any = userLogin(options);
    console.log(res);
    setSendData(false);
  },
    [sendData]
  );

  return (
    <div>
      <h2>Enter your login:</h2>


      <form>
        <label htmlFor="GET-email">
          Email:
        </label>
        <input
          id="GET-email"
          type="text"
          name="email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }
          }
        >
        </input>
        <label htmlFor="GET-pass">
          Password:
        </label>
        <input
          id="GET-pass"
          type="text"
          name="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }
          }
        >
        </input>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSendData(true);

          }}
        >
          Login
        </button>
      </form>


    </div>

  );
}

