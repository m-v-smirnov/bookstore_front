import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookType, GetBookOptions, getBooks } from "../../api/bookApi";
import { BookMini } from "./BookMini";
import { Pagination } from "./Pagination";

type Props = {

};

export const BooksArea: React.FC<Props> = (props) => {

  const [books, setBooks] = useState<BookType[]>([]);
  const [pageState, setPageState] = useState<number>(1);
  const [prevPageState, setPrevPageState] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const options: GetBookOptions = {
      page : pageState
    };
    const getBooksData = async () => {
      if (pageState === prevPageState) return;
      try {
        const result = await getBooks(options);
        setBooks(result.books);
        setPageState(result.pagination.page);
        setPrevPageState(result.pagination.page);
        setTotalPages(result.pagination.totalPages);
        setHasNextPage(result.pagination.hasNextPage);
        setHasPrevPage(result.pagination.hasPrevPage);
      } catch (error) {
        console.log(error);
      }
    }
    getBooksData();
  }, [pageState])

  return (
    <StyledDiv>
      <Pagination 
      totalPages={totalPages}
      page={pageState}
      setPage={setPageState}
      hasNextPage={hasNextPage}
      hasPrevPage={hasPrevPage}
      />
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
      width: 720px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

`;