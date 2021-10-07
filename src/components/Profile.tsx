import React from 'react';
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import { BookAddOptions } from '../api/bookApi';
import { useAppDispatch } from "../hooks";
import { setClearUser } from "../store/users/userActions";


type Props = {
};

export const Profile: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const { register, handleSubmit,
    formState: { errors }
  } = useForm<BookAddOptions>();

  const onSubmit: SubmitHandler<BookAddOptions> = (data) => {

  };

  const onClickLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (localStorage.length > 0) {
      localStorage.removeItem('token');
    }
    dispatch(setClearUser());
  };
  return (
    <div>
      <h2>Profile from components</h2>
      <button
        onClick={onClickLogout}
      >
        Logout
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          {...register("title")}
        /> <br />
        <label htmlFor="author">author:</label>
        <select
          id="author"
          {...register("authorId")}
        >
          <option value="615e9162fdf87379055ea314">Author 1</option>
          <option value="615e91f60ec96822b31fc07f">Author 2</option>
          <option value="615e922ae9fcae8adb7cca9b">Author 3</option>
          <option value="615e923bd26c35d2f8f30394">Author 4</option>
          <option value="615ed5a3df8f659bebd92a4b">Author 5</option>
        </select> <br />
        <label htmlFor="genre">genre:</label>
        <select
          id="genre"
          {...register("genreId")}
        >
          <option value="615e926478c671f88b5e4325">Genre 1</option>
          <option value="615e9272bb2d3e933206ed55">Genre 2</option>
          <option value="615e928a00e4d3bec9f7f6aa">Genre 3</option>
          <option value="615e928c834199b42777b106">Genre 4</option>
          <option value="615e92905246e81d7bc26718">Genre 5</option>
          <option value="615e92968a9275290e5e3727">Genre 6</option>
        </select> <br />
        <label htmlFor="description">title:</label>
        <input 
        type="text"
        id="description"
        {...register("description")}
        /> <br />
        <input
          type="submit"
          value='Add book'
        >
        </input>
      </form>
    </div>
  );
};