import React, { useState } from 'react';
import styled from 'styled-components';


import { AddBook } from './AddBook';
import { BookList } from './BookList';
import { EditUser } from './EditUser';


type Props = {
};

export const Profile: React.FC<Props> = (props) => {
  const [editUser, setEditUser] = useState(false);
  return (
    <StyledDiv>
      <div className="container">
        <h1>Profile</h1>
        <div className='tabs'>
          <button
            className='tabs__button'
            onClick={() => { setEditUser(false) }}
          >Add book</button>
          <button
            className='tabs__button'
            onClick={() => { setEditUser(true) }}
          >Edit user</button>
        </div>
        <div className='profile-page'>
          {editUser
            ? <EditUser />
            : <AddBook />}
          <BookList />
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .container {
    background-color: white;
    margin: 20px auto;
    width: 800px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .profile-page {
    display: flex;
    justify-content: space-between;
  }
  
  .tabs {
    align-self: flex-start;
    margin-bottom: 15px;
    &__button {
      background-color: white;
      cursor: pointer;
      border-width: 0;
      font-size: 18px;
      font-weight: 600;
    }
  }
`;