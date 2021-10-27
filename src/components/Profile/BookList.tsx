import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMyBooks } from '../../api/bookApi';
import { DEFAULT_COVER, IMAGES_URL } from '../../constants/constants';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { BookType } from '../../types/bookTypes';
import { Link } from 'react-router-dom';

type Props = {};

export const BookList: React.FC<Props> = (props) => {
  const [books, setBooks] = useState<BookType[]>([]);
  
  useEffect(() => {
    const getBooksData = async () => {
      try {
        const result = await getMyBooks();
        setBooks(result.books)
      } catch (error) {
        console.log(error);
      }
    }
    getBooksData();
  }, [])

  const onClickUp: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const booksArr = [...books];
    booksArr.push(booksArr[0]);
    booksArr.shift();
    setBooks(booksArr);
  };

  const onClickDown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const booksArr = [...books];
    booksArr.unshift(booksArr[booksArr.length - 1]);
    booksArr.pop();
    setBooks(booksArr);
  };

  return (
    <StyledDiv>
      <div>Booklist</div>
      <div className='book-list__text'>{books.length} user's books</div>
      <div className='book-list'>
        <button
          className="book-list__button"
          onClick={onClickUp}
        >
          <Icon size={'100%'} icon={ic_keyboard_arrow_left} />
        </button>
        {books.map((item, index) => {
          return (
            (index < 5) ?
            <Link key={item._id} to={`/book/${item._id}`}>
              <img
                
                className="book-list__img"
                src={IMAGES_URL + (item.coverRefId ? item.coverRefId.fileRef : DEFAULT_COVER)} alt=""
              />
            </Link>
              : null
          )
        })}
        <button
          className="book-list__button--right"
          onClick={onClickDown}
        >
          <Icon size={'100%'} icon={ic_keyboard_arrow_left} />
        </button>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  margin: 60px auto;
  width: 800px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .book-list {
    background-color: white;
    margin: 0 auto;
    width: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__text {
      font-size: 24px;
      font-weight: 500;
    }
    &__img {
      margin: 10px;
      height: 150px;
      width: 100px;
      object-fit: contain;
    }
    &__button {
      background-color: white;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 0;
      cursor: pointer;
      color: #0059ff;
      &--right {
        background-color: white;
        transform: rotate(180deg);
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 0;
        cursor: pointer;
        color: #0059ff;
      }
    }
  }
`;