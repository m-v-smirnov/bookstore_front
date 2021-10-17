import { BookSortActions } from "./bookSortingTypes";

export type BookSortState = {
  genreId: string,
};

const initialState: BookSortState = {
  genreId: ''
};

export const bookSortReducer = (
  state = initialState,
  actions: BookSortActions
): BookSortState => {

  switch (actions.type) {
    case 'SET_GENRE':
      return {
        ...state,
        genreId: actions.payload,
      }
    default:
      return state
  }

};