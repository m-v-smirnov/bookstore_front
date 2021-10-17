import { string } from "yup/lib/locale";
import { BookSortActions } from "./bookSortingTypes";

export const setGenre = (genreId: string): BookSortActions => {
  return {
    type: 'SET_GENRE',
    payload: genreId
  }
}