import { instance } from ".";

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

export const addBook = async (options: BookAddOptions)
  : Promise<BookResponseType> => {
  const response = await instance.post("/books", options);
  return response.data;
};

export const uploadFile = async (options: any): Promise<String> => {
  const response = await instance.post("books/cover", options, {
  });
  return response.data.fileName;
};

export const getGenres = async (): Promise<GenresResponseType> => {
  const response = await instance.get("/books/genres")
  return response.data;
};

export const getAuthors = async (): Promise<AuthorsResponseType> => {
  const response = await instance.get("/books/authors")
  return response.data;
};

export const getBooks = async (options: GetBookOptions): Promise<BookResponseType> => {
  const response = await instance.get("/books", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: {
      page : options.page,
      genreId: options.genreId,
      priceMax: options.priceMax,
      priceMin: options.priceMin,
      sortingString: options.sortingString
      
    }
  } )
  return response.data;
};

export const getBookById = async (option:{bookId: string}): Promise<OneBookResponseType> => {
  const response = await instance.get("books/book",{
    params: {
      bookId: option.bookId
    }
  })
  return response.data;
};

export const getMyBooks = async (): Promise<BookResponseType> => {
  const response = await instance.get("/books/my-books")
  return response.data;
};

export const addToFavorites = async (option:{bookId: string}) => {
  const response = await instance.post("/books/add-to-favorites", option)
  return response.data;
};

export const addBookRating = async (options: BookRatingType) => {
  const response = await instance.post("/books/rate-the-book", options)
  return response.data;
};

export const getBookRating = async (option:{bookId: string}): Promise<BookRatingResponseType> => {
  
  const response = await instance.get("/books/get-rating",{
    params: {
      bookId: option.bookId,
    }
  })
  return response.data;
};

export const addBookReview = async (options:{bookId: string,review:string}) => {
  await instance.post("/books/reviews",options);
}

export const getBookReviews = async (option:{bookId: string}): Promise<ReviewsResponseType> => {
  const response = await instance.get("/books/reviews",{
    params: {
      bookId: option.bookId,
    }
  })
  return response.data;
};
