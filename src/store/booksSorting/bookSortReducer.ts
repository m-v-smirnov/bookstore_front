import { BookSortActions } from "./bookSortingTypes";

export type BookSortState = {
  genreId: string,
  priceMin: number,
  priceMax: number,
  sortingString: string
};



const initialState: BookSortState = {
  genreId: '',
  priceMax : 99999999,
  priceMin: 0,
  sortingString: "default"

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
      }
    case 'SET_PRICE_FILTER':
      return {
        ...state,
        priceMax: actions.payload.priceMax,
        priceMin: actions.payload.priceMin
      }
    case 'SET_SORTING':
      return {
        ...state,
        sortingString: actions.payload
      }
    default:
      return state
  }

};