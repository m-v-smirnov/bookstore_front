import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookType, GetBookOptions, getBooks } from "../../api/bookApi";
import { BookMini } from "./BookMini";

type Props = {

};

export const BooksArea: React.FC<Props> = (props) => {

  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const options: GetBookOptions = {};
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
      <div className="books-container" >
        {books.map((item) => {
          return <BookMini
            key={item._id}
            book={item}
          />
        })}
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
    .books-container {
      margin: 0 10px;
      width: 680px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

`;