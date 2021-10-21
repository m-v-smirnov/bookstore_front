import styled from "styled-components";

import { Icon } from 'react-icons-kit';
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';

import { addToFavorites, BookType } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";
import { StyledButton } from "../StyledComponents";
import { useAppSelector } from "../../hooks";
import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

type Props = {
  book: BookType
};

export const BookMini: React.FC<Props> = (props) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  
  const cover = IMAGES_URL
    + (props.book.coverRefId
      ? props.book.coverRefId.fileRef
      : "defaultcover.png");

  const onFavoritesClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (!user) {
      return setRedirectToLogin(true);
    }
    try {
      const result = await addToFavorites({ bookId: props.book._id });
    } catch (error) {
      console.log(error);

    }
  };

 
  return (
    <StyledDiv>
      {redirectToLogin ? <Redirect to="/login" />
        :
        <div className="book-mini">
          <button
            className="book-mini__favorites"
            onClick={onFavoritesClick}
          >
            <Icon size={'100%'} icon={ic_favorite_border} />
          </button>
          <div
            className="book-mini__cover"
          >
            <Link to={`/book/${props.book._id}`}>
              <img
                className="book-mini__img"
                src={cover}
                alt="cover"
              />
            </Link>
          </div>
          <div className="book-mini__description">
            <div className="book-mini__text">
              <p className="book-mini__author">{props.book.author}</p>
              <p className="book-mini__title">{props.book.title}</p>
            </div>
            <div className="book-mini__div">
              <p className="book-mini__price">{props.book.price} ₽ </p>
              {props.book.sale
                ? <p className="book-mini__sale">SALE</p>
                : <p></p>
              }

            </div>
            <StyledButton className="book-mini__button">
              Add
            </StyledButton>
          </div>
        </div>
      }
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .book-mini {
    padding: 10px;
    background-color: #d3d3d387;
    border-radius: 5px;
    margin: 20px 10px;
    //height: 450px;
    width: 200px;
    position: relative;
      &__favorites{
        padding: 0;
        position: absolute;
        top: 20px;
        right: 10px;
        width: 35px;
        height: 35px;
        background-color: lightgray;
        opacity: 50%;
        border: 0;
        border-radius: 100%;
        cursor: pointer;
        &:hover {
          color: #b80000;
          opacity: 100%;
        }
      }
      &__description {
        margin-top: 10px;
        height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      &__cover {
        width: auto;
        height: 240px;
      }
      &__img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        object-fit: contain;
      } 
      &__text {
        height: 50px;
        align-self: flex-start;
      }
      &__author {
        color: grey;
        font-size: 12px;
        padding: 0;
        margin: 0;
        
      }

      &__title {
        font-size: 14px;
        padding: 0;
        margin: 0;
      }
      &__div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__price {
        font-size: 18px;
        font-weight: 500;
      }
      
      &__sale {
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 400;
        background-color: red;
        color: yellow;
      }

      &__button {
        width: 75%;
      }
  }
`;