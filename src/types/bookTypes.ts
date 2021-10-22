export type BookAddOptions = {
  title: string,
  description: string,
  author: string,
  genreId: string,
  cover: string
  price: number,
  amount: number,
  sale: boolean,
  _id?: string,
  userId?: string
};

export type BookType = {
  _id: string,
  title: string,
  description: string,
  author: string,
  genreId: GenreType,
  coverRefId?: CoverType,
  price: number,
  amount: number,
  sale: boolean,
  userId: string
};

export type CoverType = {
  _id: string,
  fileRef: string 
};

export type GetBookOptions = {
  page: number,
  genreId: string,
  priceMax: number,
  priceMin: number,
  sortingString: string
};

export type PaginationType = {
  totalDocs : number,
  totalPages : number,
  page : number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  nextPage: number,
  prevPage: number,
  limit: number,
  pagingCounter: number
};

export type BookResponseType = {
  books: BookType[],
  pagination: PaginationType
};
export type OneBookResponseType = {
  book : BookType,
};

export type GenreType = {
  "_id": string,
  name: string,
  createdAt: string,
  updatedAt: string
};
export type AuthorType = {
  "_id": string,
  name: string,
  createdAt: string,
  updatedAt: string
};

export type GenresResponseType = {
  genres: GenreType[]
};
export type AuthorsResponseType = {
  authors: AuthorType[]
};

export type BookRatingType = {
  rating: number,
  bookId: string
}

export type BookRatingResponseType = {
  rating: number
}

export type UserIdType = {
  _id:string,
  fullName: string,
  avatarRefId: CoverType,
}

export type ReviewType = {
  _id : string,
  review: string,
  bookId: string,
  userId: UserIdType,
  createdAt: Date
}

export type ReviewsResponseType = {
  reviews: ReviewType[]
}

export type UploadFileResponseType = {
  fileName: string
}