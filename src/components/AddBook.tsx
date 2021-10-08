import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import { addBook, GenreType, getGenres } from "../api/bookApi";
import avatarImgRef from '../images/book.png';
import styled from "styled-components";
import { useEffect, useState } from "react";

type BookAddOptions = {
  title: string,
  description: string,
  authorId: string,
  genreId: string;
  files: FileList
};

type Props = {

};

export const AddBook: React.FC<Props> = (props) => {
  const [genreArray, setGenre] = useState<GenreType[]>([]);

  const { register, handleSubmit,
    formState: { errors }
  } = useForm<BookAddOptions>();

  useEffect(() => {
    const getGenresData = async () => {
      try {
        const result = await getGenres();
        setGenre(result.genres);
      } catch (error) {
        console.log(error);
      }
    }
    getGenresData();
  }, []);

  const onSubmit: SubmitHandler<BookAddOptions> = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('cover', data.files[0]);
    formData.append('author', data.authorId);
    formData.append('description', data.description);
    formData.append('genreId', data.genreId);

    try {
      const response = await addBook(formData);
      console.log('Create book response', response)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <StyledDiv>
      <form
        id='book-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <img src={avatarImgRef} alt="avatar image here" />
          <input type="file" {...register("files")} id="cover" />
        </div>
        <label
          htmlFor="title"
        >
          title:
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
        />
        <label
          htmlFor="author"
        >
          author:
        </label>
        <input
          type="text"
          id="title"
          {...register("authorId")}
        />
        <label
          htmlFor="genre"
        >
          genre:
        </label>
        <select
          {...register("genreId")}
          onClick={() => {
            console.log('>>CLICK')
          }}

          onFocus={() => {
            console.log('>>FOCUS')
          }}
        >
          {genreArray.map((item) => {
            return <option value={item._id} key={item._id} >{item.name}</option>
          })}
        </select>
        <label 
          htmlFor="description"
          form='book-form'
        >
          description:
        </label>
        <textarea
          form='book-form'
          id="description"
          {...register("description")}
        />
        <button
          form='book-form'
          type="submit"
        >
          Add book
        </button>
      </form>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .container {
   
  }
`;