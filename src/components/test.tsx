import React from 'react';
const axios = require('axios');

export default function Test() {
  const [state, setState] = React.useState([]);

  React.useEffect (() => {
    axios.post('http://localhost:3010/auth/reg', {
      fullName: 'Fred',
      email: 'fromFront@bk.ru',
      dob: '1999-05-29',
      password: 'Qwerty1234'
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error : any) {
      console.log(error);
    });
  }, []);

  return (
    <div>
      1112222mlkmvcldkmv
    </div>
  );
}