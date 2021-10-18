
export type PriceRange = {
  priceMin: number,
  priceMax: number
};

type SetGenreAction = { type: 'SET_GENRE_FILTER', payload: string }
type SetPriceFilterAction = { type: 'SET_PRICE_FILTER', payload: PriceRange }
type SetSortingAction = { type: 'SET_SORTING', payload: string}

export type BookSortActions =
  | SetGenreAction
  | SetPriceFilterAction
  | SetSortingAction