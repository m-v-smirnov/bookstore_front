import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../StyledComponents';
import { AddBook } from './AddBook';
import { BookList } from './BookList';
import { EditUser } from './EditUser';

type Props = {};

export const Profile: React.FC<Props> = (props) => {
  const [editUser, setEditUser] = useState(false);
  return (
    <StyledDiv>
      <div className="container">
        <h1>Profile</h1>
        <div className='tabs'>
          <StyledButton
            className={!editUser? 'tabs__button--inactive':'tabs__button'}
            onClick={() => { setEditUser(true) }}
          >Edit user</StyledButton>
          <StyledButton
            className={editUser? 'tabs__button--inactive':'tabs__button'}
            onClick={() => { setEditUser(false) }}
          >Add book</StyledButton>
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .tabs {
    align-self: center;
    display: flex;
    margin-bottom: 15px;
    &__button {
      width: 100px;
      cursor: pointer;
      margin: 0 40px;
      font-size: 18px;
    }
    &__button--inactive {
      width: 100px;
      background-color: #bebebe;
      cursor: pointer;
      margin: 0 40px;
      font-size: 18px;
      &:hover {
        background-color: grey;
      }
    }
  }
`;