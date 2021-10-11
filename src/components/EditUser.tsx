import styled from 'styled-components';
import { uploadFile } from '../api/bookApi';
import { getUserById, UserEditOptions, UserResponseType } from '../api/userApi';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import { User } from '../store/users/userTypes';




type Props = {
};

export const EditUser: React.FC<Props> = (props) => {
  const [user, setUser] = useState<User>();

  const [avatarImgRef, setAvatarImgRef]
    = useState("defaultavatar.png");

  const { register, handleSubmit,
    formState: { errors }
  } = useForm<UserEditOptions>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const result = await getUserById();
        setUser(result.user);

      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  const onSubmit: SubmitHandler<UserEditOptions> = async (data) => {

    const options: UserEditOptions = {
      dob: data.dob,
      fullName: data.fullName,
      password: data.password,
      avatarRef: avatarImgRef
    };

    try {

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
      <div className='user_container'>
        <form
          className='form'
          id='user-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='avatar'>
            <img
              className='avatar__img'
              src={"http://localhost:3010/static/images/" + avatarImgRef}
              alt="avatar image here"
            />
            <input
              className='avatar__button'
              onChange={onChangeFileLoading}
              type="file"
              id="avatar"
            />
          </div>
          <div className='data'>
            <label
              className='data__label'
              htmlFor="name"
            >
              Full Name:
            </label>
            <input
              value={user?.fullName}
              type="text"
              id="name"
              {...register("fullName")}
            />
            <label
              className='data__label'
              htmlFor="dob"
            >
              Date of birth:
            </label>
            <input
              value={user?.dob}
              type="text"
              id="dob"
              {...register("dob")}
            />
            <label
              className='data__label'
              htmlFor="password"
            >
              password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
        </form>
        <button
          form='user-form'
          type="submit"
        >
          Edit user
        </button>
      </div>
    </StyledDiv >
  )
}

const StyledDiv = styled.div`
  .user_container {
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
  .avatar {
    
    display: flex;
    flex-direction: column;
    &__img {
      border-radius: 100%;
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
  `;