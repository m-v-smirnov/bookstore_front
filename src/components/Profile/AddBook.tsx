import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import { upload } from 'react-icons-kit/icomoon/upload'
import { addBook, getGenres, uploadFile } from "../../api/bookApi";
import { useEffect, useState } from "react";
import { DEFAULT_COVER, IMAGES_URL } from "../../constants/constants";
import { BookAddOptions, GenreType } from "../../types/bookTypes";
import { StyledButton, StyledInput, StyledSelect } from "../StyledComponents";

type Props = {};

export const AddBook: React.FC<Props> = (props) => {
  const [genreArray, setGenre] = useState<GenreType[]>([]);

  const [avatarImgRef, setAvatarImgRef] = useState(DEFAULT_COVER);

  const { register, handleSubmit,
    // formState: { errors }
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
      console.log('Create book response', response);
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
        setAvatarImgRef("" + response.fileName);

      } catch (error) {
        console.log(error)
      }
    };

  return (
    <StyledDiv>
      <div className='book_container'>
        <form
          className='form'
          id='book-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='cover'>
            <img
              className='cover__img'
              src={IMAGES_URL + avatarImgRef}
              alt="avatar here"
            />
            <label 
            htmlFor="cover" 
            className="custom-file-upload"
            title="upload cover"
            >
              <Icon size='35%' icon={upload} />
            </label>
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
              Title:
            </label>
            <StyledInput
              className='data__input'
              type="text"
              id="title"
              {...register("title")}
            />
            <label
              className='data__label'
              htmlFor="author"
            >
              Author:
            </label>
            <StyledInput
              className='data__input'
              type="text"
              id="author"
              {...register("author")}
            />
            <label
              className='data__label'
              htmlFor="genre"
            >
              Genre:
            </label>
            <StyledSelect
              className='data__input'
              id="genre"
              {...register("genreId")}
            >
              <option hidden disabled value="">choose genre</option>
              {genreArray.map((item) => {
                return <option value={item._id} key={item._id} >{item.name}</option>
              })}
            </StyledSelect>
            <label
              className='data__label'
              htmlFor="price"
            >
              Price:
            </label>
            <StyledInput
              className='data__input'
              type="number"
              id="price"
              {...register("price")}
            />
            <label
              className='data__label'
              htmlFor="amount"
            >
              Amount:
            </label>
            <StyledInput
              className='data__input'
              type="number"
              id="amount"
              {...register("amount")}
            />
            <label
              className='data__label'
              htmlFor="sale"
            >
              Sale:
            </label>
            <StyledSelect
              className='data__input'
              id="sale"
              {...register("sale")}
            >
              <option hidden disabled value="">choose</option>
              <option value="false">regular price</option>
              <option value="true">sale</option>
            </StyledSelect>
          </div>
        </form>
        <div className="description">
          <label
            className="description__label"
            htmlFor="description"
            form='book-form'
          >
            Description:
          </label>
          <textarea
            className="description__textarea"
            form='book-form'
            id="description"
            {...register("description")}
          />
          <StyledButton
            className='data__button'
            form='book-form'
            type="submit"
          >
            Add book
          </StyledButton>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .book_container {
    background-color: white;
    padding: 10px;
    width: 580px;
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
    position: relative;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &__img {
      height: 300px;
      width: 220px;
      margin-bottom: 20px;
      object-fit: contain;
    }
    &__button {
      margin-top: 10px;
    }
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    color: #0059ff;
    cursor: pointer;
    align-self: center; 
    position: absolute;
    top: 120px;
    left: 0px;
    opacity: 0;
    &:hover {
      opacity: 0.7;
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
    &__input {
      margin-bottom: 10px;
    }
    &__button {
      align-self: flex-end;
      width: 40%;
    }
  }
  .description {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    &__textarea {
      margin-bottom: 20px;
      height: 140px;
      padding: 10px 15px;
      border-radius: 5px;
      border: 2px solid #5d97ff;
      outline: none;
      resize: none;
      &:focus {
        border-color: #0059ff;
      }
    }
    &__label {
      align-self: flex-start;
    }
  }
`;