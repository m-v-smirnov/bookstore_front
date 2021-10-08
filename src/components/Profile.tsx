import React, { useEffect } from 'react';

import styled from 'styled-components';

import { Logout } from './Logout';
import { AddBook } from './AddBook';
import { GenresResponseType, getGenres } from '../api/bookApi';


type Props = {
};

export const Profile: React.FC<Props> = (props) => {

  return (
    <StyledDiv>
      <div className="container">
        <h1>Profile</h1>
        <div className="header__button">
          <Logout />
        </div>
        <AddBook />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .container {
    background-color: white;
    margin: 20px auto;
    width: 540px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .header {
    &__button {
      align-self: flex-end;
    }
  }
`;