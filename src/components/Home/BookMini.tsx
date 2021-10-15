import styled from "styled-components";
import { BookType } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";
import { StyledButton } from "../StyledComponents";

type Props = {
  book: BookType
};

export const BookMini: React.FC<Props> = (props) => {
  const cover = IMAGES_URL
    + (props.book.coverRefId
      ? props.book.coverRefId.fileRef
      : "defaultcover.png");
  return (
    <StyledDiv>
      <div className="book-mini">
        <div >
          <img
            className="book-mini__cover"
            src={cover}
            alt="cover"
          />
        </div>
        <div className="book-mini__text">
          <p className="book-mini__author">{props.book.author}</p>
          <p className="book-mini__title">{props.book.title}</p>
        </div>
        <div className="book-mini__div">
          <p className="book-mini__price">{props.book.price} rub </p>
          {props.book.sale
          ? <p className="book-mini__sale">SALE</p>
          : <p></p>
        }
          
        </div>
        <StyledButton className="book-mini__button">
          Add
        </StyledButton>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .book-mini {
    padding: 10px;
    background-color: #d3d3d387;
    border-radius: 5px;
    margin: 20px auto;
    height: 450px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
      &__cover {
        width: 180px;
        height: 280px;
        margin: 0 auto;
        object-fit: contain;
        
      }
    
      &__text {
        align-self: flex-start;
      }
      &__author {
        color: grey;
        font-size: 18px;
        padding: 0;
        margin: 0;
        
      }

      &__title {
        font-size: 24px;
        padding: 0;
        margin: 0;
      }
      &__div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      &__price {
        font-size: 22px;
        font-weight: 500;
      }
      
      &__sale {
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 24px;
        font-weight: 400;
        background-color: red;
        color: yellow;
      }

      &__button {
        width: 75%;
      }
  }
`;