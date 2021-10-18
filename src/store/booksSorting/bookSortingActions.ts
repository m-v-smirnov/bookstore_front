import { BookSortActions, PriceRange } from "./bookSortingTypes";


export const setGenreFilter = (genreId: string): BookSortActions => {
  return {
    type: 'SET_GENRE_FILTER',
    payload: genreId
  }
}

export const setPriceFilter = (options: PriceRange): BookSortActions => {
  return {
    type: 'SET_PRICE_FILTER',
    payload: options
  }
}

export const setSorting = (sortingString : string): BookSortActions => {
  return {
    type : 'SET_SORTING',
    payload: sortingString
  }
}