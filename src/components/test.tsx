import {UserEditOptions, userLogin, userDelete, userEdit} from '../api/userApi';
import React from 'react';



export default function Test() {
//  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    console.log('before axios');
    const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0LnVzZXIuMkBiay5ydSIsImlhdCI6MTYzMjg2MTEzOSwiZXhwIjoxNjMyODYyMTM5fQ.4Yh1FAJDeJdnl1vz6ZZ8nDtwocc3RUVtv980t0nRcTs";
    const options : UserEditOptions = {
      name: 'edit user 2',
      dob: '2019-03-03',
      password: 'Qwerty1234',

    };
    const res: any = userEdit(options, token);
    console.log(res);
  }, []);

  return (
    <div>
      1112222mlkmvcldkmv
    </div>
  );
}