import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookType, GetBookOptions, getBooks } from "../../api/bookApi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { BookMini } from "./BookMini";
import { Pagination } from "./Pagination";
import { SortingSelect } from "./SortingSelect";
import { useHistory } from "react-router-dom";
import { setGenreFilter, setPriceFilter } from "../../store/booksSorting/bookSortingActions"

type Props = {
};

export const BooksArea: React.FC<Props> = (props) => {

  const [books, setBooks] = useState<BookType[]>([]);
  const [pageState, setPageState] = useState<number>(1);
  const [prevPageState, setPrevPageState] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalDocs, setTotalDocs] = useState<number>(0);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);

  let history = useHistory();

  const dispatch = useAppDispatch();
  const { genreId, priceMax, priceMin, sortingString } = useAppSelector((state) => state.sorting);


  useEffect(() => {
    
  const urlParams = new URLSearchParams(window.location.search);
  const page = Number(urlParams.get('page'));
  const genreId = urlParams.get('genreId');
  const priceMax = Number(urlParams.get('priceMax'));
  const priceMin = Number(urlParams.get('priceMin'));
  setPageState(page);
  dispatch(setPriceFilter({priceMax, priceMin}));
  dispatch(setGenreFilter(genreId as string));
  

    
  },[]);

  useEffect(() => {
    setPageState(1);
    setChangeStatus(!changeStatus);
  }, [genreId, priceMax, priceMin, sortingString]);

  useEffect(() => {
    const options: GetBookOptions = {
      page: pageState,
      genreId,
      priceMax,
      priceMin,
      sortingString
    };
    const paramsString = `Home?page=${options.page}&genreId=${options.genreId}&priceMax=${priceMax}&priceMin=${priceMin}`;
    history.push(paramsString);
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
        setTotalDocs(result.pagination.totalDocs);

      } catch (error) {
        console.log(error);
      }
    }
    getBooksData();
  }, [pageState, changeStatus])

  return (
    <StyledDiv>
      <Pagination
        totalPages={totalPages}
        page={pageState}
        setPage={setPageState}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
      <div 
      className="sorting-line"
      >
        <div>{totalDocs} {(totalDocs > 1) ? "books" : "book"}</div>
        <SortingSelect />
      </div>
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
      justify-content: flex-start;
    }
    .sorting-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

`;