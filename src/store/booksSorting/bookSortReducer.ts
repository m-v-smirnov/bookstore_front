import { BookSortActions } from "./bookSortingTypes";

type BookSortState = {
  genreId: string,
  priceMin: number,
  priceMax: number,
  sortingString: string,
  initialValues: boolean
};
const initialState: BookSortState = {
  genreId: '',
  priceMax : Infinity,
  priceMin: 0,
  sortingString: "default",
  initialValues : true
};

export const bookSortReducer = (
  state = initialState,
  actions: BookSortActions
): BookSortState => {
  switch (actions.type) {
    case 'SET_GENRE_FILTER':
      return {
        ...state,
        genreId: actions.payload,
        initialValues: false,
      }
    case 'SET_PRICE_FILTER':
      return {
        ...state,
        priceMax: actions.payload.priceMax,
        priceMin: actions.payload.priceMin,
        initialValues: false,
      }
    case 'SET_SORTING':
      return {
        ...state,
        sortingString: actions.payload,
        initialValues: false,
      }
    default:
      return state
  }
};