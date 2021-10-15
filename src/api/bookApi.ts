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


export const addBook = async (options: BookAddOptions)
  : Promise<BookResponseType> => {
  const response = await instance.post("/books", options);
  return response.data;
};

export const uploadFile = async (options: any): Promise<String> => {
  const response = await instance.post("books/cover", options, {
    //headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
      
    }
  } )
  return response.data;
};

export const getMyBooks = async (): Promise<BookResponseType> => {
  const response = await instance.get("/books/my-books")
  return response.data;
};
