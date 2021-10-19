import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookType, getBookById } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";
import { StyledButton } from "../StyledComponents";
import { RatingStars } from "./RatingStars";

type Props = {
  bookId: string,
};



export const BookCard: React.FC<Props> = (props) => {

  const [book, setBook] = useState<BookType>();
  const cover = IMAGES_URL
    + (book?.coverRefId ? book.coverRefId.fileRef
      : "defaultcover.png");

  useEffect(() => {
    const getBookData = async () => {
      try {
        const result = await getBookById({ bookId: props.bookId });
        setBook(result.book);
      }
      catch (error) {
        console.log(error);

      }
    }
    getBookData();

  }, []);

  return (
    <StyledDiv>
      <div className="book-card">
        <p className="book-card__author">{book?.author}</p>
        <p className="book-card__title">{book?.title}</p>
        <div className="book-card__container">
          <img className="book-card__img" src={cover} alt="" />
          <div className="book-card__data">
            <div className="book-card__ratings">
              Ratings
              <RatingStars />
            </div>
            <div className="book-card__div">
              <div className="book-card__price">{book?.price} rub</div>
              {book?.sale
                ? <div className="book-card__sale">SALE</div>
                : <div></div>}
            </div>
            <StyledButton>Add</StyledButton>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .book-card {
    width: 800px;
    margin: 20px auto;
    
    &__author {
      padding: 0;
      margin: 0;
      color: grey;
      font-size: 16px;
    }
    &__title {
      margin: 10px 0;
      font-size: 18px;
    }
    &__container {
      display: flex;
      justify-content: space-between;
    }
    &__img {
      height: 460px;
      width: 300px;
      object-fit: contain;
    }
    &__data {
      width: 300px;
      display: flex;
      flex-direction: column;
    }
    &__div{
      margin: 40px auto;
      width: 100%;
      display: flex;
      align-items: center;
      //justify-content: space-around;
    }
    &__price {
      font-size: 18px;
      font-weight: 500;
    }
      
    &__sale {
       padding: 5px 10px;
       margin-left: 40px;
       border-radius: 4px;
       font-size: 20px;
       font-weight: 400;
       background-color: red;
       color: yellow;
      }
    &__ratings {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
  }
  

`;