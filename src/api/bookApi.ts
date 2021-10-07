import { instance } from ".";

export type BookAddOptions = {
  title : string,
  description : string,
  authorId : string,
  genreId : string
};
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
  genres: [GenreType]
};
export type AuthorsResponseType = {
  genres: [AuthorType]
};



export const addBook = async (options: BookAddOptions)
: Promise<BookResponseType> => {
  const response = await instance.post("/", {
    title : options.title,
    description: options.description,
    authorId : options.authorId,
    genreId: options.genreId
  });
  return response.data;
};

export const getGenres = async (): Promise<GenresResponseType> => {
  const response = await instance.get("/genres")
  return response.data;
}; 

export const getAuthors = async (): Promise<AuthorsResponseType> => {
  const response = await instance.get("/authors")
  return response.data;
};
