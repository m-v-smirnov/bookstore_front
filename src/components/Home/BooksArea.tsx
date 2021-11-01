import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getBooks } from "../../api/bookApi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { BookMini } from "./BookMini";
import { Pagination } from "./Pagination";
import { SortingSelect } from "./SortingSelect";
import { BookType, GetBookOptions } from "../../types/bookTypes";
import {
  setGenreFilter,
  setPriceFilter
} from "../../store/booksSorting/bookSortingActions";
import { toast } from "react-toastify";
import  queryString  from "query-string"

type Props = {};

export const BooksArea: React.FC<Props> = (props) => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [pageState, setPageState] = useState<number>(1);
  const [pageAuxState, setPageAuxState] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalDocs, setTotalDocs] = useState<number>(0);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  let history = useHistory();
  const dispatch = useAppDispatch();
  const {
    genreId,
    priceMax,
    priceMin,
    sortingString,
    initialValues } = useAppSelector((state) => state.sorting);

  const options: GetBookOptions = {
    page: pageState,
    genreId,
    priceMax,
    priceMin,
    sortingString
  };

  useEffect(() => {
    if (!initialValues) setPageState(1)
  },[genreId,
    priceMax,
    priceMin,
    sortingString,
    initialValues,
  ])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = Number(urlParams.get('page'));
    const genreId = urlParams.get('genreId');
    const priceMax = Number(urlParams.get('priceMax'));
    const priceMin = Number(urlParams.get('priceMin'));
   
    const getBookOptions: GetBookOptions = {
      page: (initialValues) ? (page === 0 ? 1 : page) : pageState,
      genreId: ((initialValues) ? genreId : options.genreId) || '',
      priceMax: ((initialValues) ? priceMax : options.priceMax) || Infinity,
      priceMin: (initialValues) ? priceMin : options.priceMin || 0,
      sortingString: options.sortingString || "default",
    };
   
    dispatch(setPriceFilter({ priceMax: getBookOptions.priceMax, priceMin: getBookOptions.priceMin }));
    dispatch(setGenreFilter(getBookOptions.genreId));

    const query = {
      page: getBookOptions.page,
      genreId: getBookOptions.genreId,
      priceMax: getBookOptions.priceMax,
      priceMin: getBookOptions.priceMin,
    }
    const paramsString = queryString.stringifyUrl({ url: "/home",query});
    history.push(paramsString);

    const getBooksData = async () => {
      try {
        const result = await getBooks(getBookOptions);
        setBooks(result.books);
        setPageAuxState(result.pagination.page);
        setTotalPages(result.pagination.totalPages);
        setHasNextPage(result.pagination.hasNextPage);
        setHasPrevPage(result.pagination.hasPrevPage);
        setTotalDocs(result.pagination.totalDocs);

      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    }
    getBooksData();
  }, [pageState, genreId, priceMax, priceMin, sortingString])

  return (
    <StyledDiv>
      <Pagination
        totalPages={totalPages}
        page={pageAuxState}
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
