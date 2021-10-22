import { instance } from ".";
import {
  AuthorsResponseType,
  BookAddOptions,
  BookRatingResponseType,
  BookRatingType,
  BookResponseType,
  GenresResponseType,
  GetBookOptions,
  OneBookResponseType,
  ReviewsResponseType,
  UploadFileResponseType
} from "../types/bookTypes";

export const addBook = async (options: BookAddOptions)
  : Promise<BookResponseType> => {
  const response = await instance.post("/books", options);
  return response.data;
};

export const uploadFile = async (options: any): Promise<UploadFileResponseType> => {
  const response = await instance.post("books/cover", options, {
  });
  return response.data;
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
  const response = await instance.get("/books", { params: options })
  return response.data;
};

export const getBookById = async (option: { bookId: string }): Promise<OneBookResponseType> => {
  const response = await instance.get("books/book", { params: option })
  return response.data;
};

export const getMyBooks = async (): Promise<BookResponseType> => {
  const response = await instance.get("/books/my-books")
  return response.data;
};

export const addToFavorites = async (option: { bookId: string }) => {
  const response = await instance.post("/books/add-to-favorites", option)
  return response.data;
};

export const addBookRating = async (options: BookRatingType) => {
  const response = await instance.post("/books/rate-the-book", options)
  return response.data;
};

export const getBookRating = async (option: { bookId: string }): Promise<BookRatingResponseType> => {

  const response = await instance.get("/books/get-rating", { params: option })
  return response.data;
};

export const addBookReview = async (options: { bookId: string, review: string }) => {
  await instance.post("/books/reviews", options);
}

export const getBookReviews = async (option: { bookId: string }): Promise<ReviewsResponseType> => {
  const response = await instance.get("/books/reviews", { params: option })
  return response.data;
};
