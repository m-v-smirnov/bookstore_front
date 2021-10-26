import { instance } from ".";
import { BookType } from "../types/bookTypes";

export type BooksCartType = {
  _id: string,
  bookId: BookType,
  userId: string,
  amount: number,
}
export type BooksCartResponseType = {
  bookCart: BooksCartType[],
}

export const addBookToCart = async (option: { bookId: string }) => {
  const response = await instance.patch("/shopcart",option)
  return response.data
}

export const deleteOneBookFromCart = async (option: { bookId: string }) => {
  const response = await instance.delete("/shopcart",{params : option})
  return response.data
}

export const deleteBooksFromCart = async (option: { bookId: string }) => {
  const response = await instance.delete("/shopcart/books",{params : option})
  return response.data
}

export const emptyCart = async () => {
  const response =await instance.delete("/shopcart/epty-cart")
  return response.data
}

export const getBooksFromCart = async (): Promise<BooksCartResponseType> => {
  const response = await instance.get("/shopcart")
  return response.data
}