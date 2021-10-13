import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {  BookType, GetBookOptions, getBooks } from '../../api/bookApi';


type Props = {

};

export const BookList: React.FC<Props> = (props) => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const options: GetBookOptions = { getMyBooks: true };
    const getBooksData = async () => {
      try {
        const result = await getBooks(options);
        setBooks(result.books)
      } catch (error) {
        console.log(error);
      }
    }
    getBooksData();
  }, [])

  return (
    <StyledDiv>
      <div className='booklist'>
        <div>User's books :</div>
        <ol>
          {books.map((item) => {
            return (
              <li
                key={item._id}
              >
                {item.title}
              </li>
            )
          })}
        </ol>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .bookList {
    background-color: whitesmoke;
    margin: 20px auto;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
 
`;