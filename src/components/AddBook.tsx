import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import { addBook, BookAddOptions, GenreType, getGenres, uploadFile } from "../api/bookApi";
import styled from "styled-components";
import { useEffect, useState } from "react";




type Props = {

};

export const AddBook: React.FC<Props> = (props) => {
  const [genreArray, setGenre] = useState<GenreType[]>([]);

  const [avatarImgRef, setAvatarImgRef] = useState("defaultcover.png");

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

    const options: BookAddOptions = {
      author: data.author,
      cover: avatarImgRef,
      description: data.description,
      genreId: data.genreId,
      title: data.title,
      amount: data.amount,
      price: data.price,
      sale: data.sale
    };

    try {
      const response = await addBook(options);
      console.log('Create book response', response)
    } catch (e) {
      console.log(e)
    }
  }

  const onChangeFileLoading: React.ChangeEventHandler<HTMLInputElement>
    = async (e) => {
      e.preventDefault();
      if (!e.target.files) { return };
      const formData = new FormData();
      formData.append('cover', e.target.files[0]);
      console.log(formData.values);

      try {
        const response = await uploadFile(formData);
        setAvatarImgRef("" + response);
        console.log(`File uploading response : ${response}`);

      } catch (error) {
        console.log(error)
      }

    };
  return (
    <StyledDiv>
      <div className='bookContainer'>
        <form
          className='form'
          id='book-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='cover'>
            <img
              className='cover__img'
              src={"http://localhost:3010/static/images/" + avatarImgRef}
              alt="avatar image here"
            />
            <input
              className='cover__button'
              onChange={onChangeFileLoading}
              type="file"
              id="cover"
            />
          </div>
          <div className='data'>
            <label
              className='data__label'
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
              className='data__label'
              htmlFor="author"
            >
              author:
            </label>
            <input
              type="text"
              id="author"
              {...register("author")}
            />
            <label
              className='data__label'
              htmlFor="genre"
            >
              genre:
            </label>
            <select
              id="genre"
              {...register("genreId")}
            >
              <option hidden value="">choose genre</option>
              {genreArray.map((item) => {
                return <option value={item._id} key={item._id} >{item.name}</option>
              })}
            </select>
            <label
              className='data__label'
              htmlFor="price"
            >
              price:
            </label>
            <input
              type="number"
              id="price"
              {...register("price")}
            />
            <label
              className='data__label'
              htmlFor="amount"
            >
              amount:
            </label>
            <input
              type="number"
              id="amount"
              {...register("amount")}
            />
            <label
              className='data__label'
              htmlFor="sale"
            >
              sale:
            </label>
            <select
              id="sale"
              {...register("sale")}
            >
              <option hidden value="">choose</option>
              <option value="true">sale</option>
              <option value="false">regular price</option>
            </select>
          </div>
        </form>
        <div className="description">
          <label
            className="description__label"
            htmlFor="description"
            form='book-form'
          >
            description:
          </label>
          <textarea
            className="description__textarea"
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
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .bookContainer {
    background-color: whitesmoke;
    padding: 10px;
    width: 540px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .form {
    display: flex;
    justify-content: space-between;
  }
  .cover {
    
    display: flex;
    flex-direction: column;
    &__img {
      height: 300px;
      width: 220px;
    }
    &__button {
      margin-top: 10px;
    }
  }

  .data {
    margin-left: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    &__label {
      align-self: flex-start;
    }
  }
  .description {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    &__textarea {
      margin-bottom: 20px;
      height: 140px;
    }
    &__label {
      align-self: flex-start;
    }
  }
`;