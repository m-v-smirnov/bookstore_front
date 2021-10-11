import { log } from "console";
import { instance } from ".";

export type BookAddOptions = {
  title: string,
  description: string,
  author: string,
  genreId: string;
  cover: string
  price: number,
  amount: number,
  sale: boolean,
  "_id" ?: string,
  userId ?: string
};
export type GetBookOptions = {
  genreId ?: string,
  author ?: string
};

export type BookResponseType = {
  books: BookAddOptions[]
}; 

export type GenreType = {
  "_id" : string,
  name : string,
  createdAt : string,
  updatedAt : string
};
export type AuthorType = {
  "_id" : string,
  name : string,
  createdAt : string,
  updatedAt : string
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
  const response = await instance.post("books/cover",options, {
    //headers: { "Content-Type": "multipart/form-data" },
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
  const response = await instance.get("/books", {data: options}) 
  return response.data;
};
