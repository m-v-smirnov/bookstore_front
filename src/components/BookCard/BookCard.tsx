import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { getBookById } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";
import { BookType } from "../../types/bookTypes";
import { StyledButton } from "../StyledComponents";
import { BookDescription } from "./BookDescription";
import { BookRating } from "./BookRating";
import { BookSpecification } from "./BookSpecification";
import { BooksReviews } from "./BooksReviews";
import { RatingStars } from "./RatingStars";

type Props = {
  bookId: string,
};

export const BookCard: React.FC<Props> = (props) => {
  const [book, setBook] = useState<BookType>();
  const [tabSelect, setTabSelect] = useState(1);
  const tabsList = ["Description", "Specifications", "Reviews"];
  const cover = IMAGES_URL
    + (book?.coverRefId ? book.coverRefId.fileRef
      : "defaultcover.png");

  useEffect(() => {
    const getBookData = async () => {
      try {
        const result = await getBookById({ bookId: props.bookId });
        setBook(result.book);
      }
      catch (error: any) {
        toast.error(String(error.response.data.message));
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
              <BookRating bookId={props.bookId} />
              <RatingStars bookId={props.bookId} />
            </div>
            <div className="book-card__div">
              <div className="book-card__price">{book?.price} ₽</div>
              {book?.sale
                ? <div className="book-card__sale">SALE</div>
                : <div></div>}
            </div>
            <StyledButton>
              Add
            </StyledButton>
          </div>

        </div>
      </div>
      <div className="texts">
        <div>
          <ul className="tabs">
            {tabsList.map((item, index) => {
              return (
                <li key={`tabs_${index}`}>
                  <button 
                  className={
                    (tabSelect === (index+1)
                    ? "texts__button--selected" : "texts__button")}
                  onClick={() => {setTabSelect(index+1)}} 
                  >{item}</button>
                </li>
              )
            })}
          </ul>
        </div>
        {(tabSelect === 1)
        ? <BookDescription description={book? book.description :""} />
        : (tabSelect === 2) ? <BookSpecification />
        : <BooksReviews bookId={props.bookId} />
      }
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .book-card {
    width: 700px;
    margin: 20px auto;
    padding-bottom: 20px;
    border-bottom: 2px solid lightgrey;
    &__author {
      padding: 0;
      margin: 0;
      color: grey;
      font-size: 18px;
    }
    &__title {
      margin: 10px 0;
      font-size: 24px;
    }
    &__container {
      display: flex;
      justify-content: space-between;
    }
    &__img {
      height: 400px;
      width: 260px;
      object-fit: contain;
    }
    &__data {
      margin-top: 30px;
      width: 300px;
      display: flex;
      flex-direction: column;
    }
    &__div{
      margin: 40px auto;
      width: 100%;
      display: flex;
      align-items: center;
    }
    &__price {
      font-size: 24px;
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
  .texts {
    width: 800px;
    margin: 40px auto;
    &__button {
      border: 0;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      &--selected {
        border: 0;
        font-size: 18px;
        font-weight: 600;
        border-bottom: 2px solid grey;
      }
      &:hover {
        border-bottom: 2px solid grey;
      }
    }
  }
  ul.tabs {
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 0;
    height: 15px;
  }
  ul.tabs li {
    display: inline;
    margin-right: 5px;
    padding: 5px;
  }
`;