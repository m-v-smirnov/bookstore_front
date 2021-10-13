import styled from "styled-components";
import { BookType } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";

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
        <img
          className="book-mini__cover"
          src={cover}
          alt="cover"
        />
        <p>
          {props.book.author}
        </p>
        <p>
          {props.book.title}
        </p>
        <div>
          <p>
            {props.book.price} rub
          </p>
          <p>
            SALE
          </p>
        </div>
        <button>
          Add
        </button>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .book-mini {
    margin: 10px auto;
    height: 400px;
    width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
      &__cover {
        width: 80%;
        height: 100%;
        margin: 0 auto;
      }

      &__author {

      }

      &__title {

      }

      &__price {

      }
      
      &__sale {

      }

      &__button {
        
      }
  }
`;