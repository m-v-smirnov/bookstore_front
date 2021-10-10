import { instance } from ".";


export type BookResponseType = {
  "_id" : string,
  title : string,
  description : string,
  authorId : string | [],
  genreId : string | [],
  userId : string
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


export const addBook = async (options: FormData)
: Promise<BookResponseType> => {
  // console.log(`options@@@: ${options.authorId}`);
    
  const response = await instance.post("/books", options, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const uploadFile = async (options: any): Promise<String> => {
  const response = await instance.post("books/cover",options, {
    headers: { "Content-Type": "multipart/form-data" },
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
