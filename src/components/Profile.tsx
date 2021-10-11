import React, { useState } from 'react';
import styled from 'styled-components';

import { Logout } from './Logout';
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
        <div className="header__button">
          <Logout />
        </div>
        <div className='tabs'>
          <button
            onClick = {() => {
              setEditUser(false);
            }}
          >Add book</button>
          <button
          onClick = {() => {
            setEditUser(true);
          }}
          >Edit user</button>
        </div>
        <div className='bookPage'>
          {editUser? <EditUser /> : <AddBook />}
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
  .bookPage {
    display: flex;
    justify-content: space-between;
  }
  .header {
    &__button {
      align-self: flex-end;
    }
  }
  .tabs {
    align-self: flex-start;
    margin-bottom: 5px;
  }
`;