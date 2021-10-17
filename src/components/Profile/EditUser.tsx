import styled from 'styled-components';
import { uploadFile } from '../../api/bookApi';
import { UserEditOptions } from '../../api/userApi';
import React, {useEffect} from 'react';
import { useForm, SubmitHandler} from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { editUser, editUserThunk } from '../../store/users/userActions';
import { DEFAULT_AVATAR, IMAGES_URL } from '../../constants/constants';
import { StyledButton, StyledInput } from '../StyledComponents';
import {Icon} from 'react-icons-kit'
import {upload} from 'react-icons-kit/icomoon/upload'



type Props = {
};

export const EditUser: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm<UserEditOptions>();

  const avatarRef = user ? user.avatarRef : DEFAULT_AVATAR;
  const fullName = user ? user.fullName : "USER BY DEFAULT";
  const dob = user ? user.dob : "1900-01-01";
  
  useEffect(() => {

    setValue('fullName', fullName);
    setValue('dob', dob.slice(0, 10))

  }, []);


  const onSubmit: SubmitHandler<UserEditOptions> = async (data) => {

    const options: UserEditOptions = {
      dob: data.dob,
      fullName: data.fullName,
      password: data.password,
      avatarRef: avatarRef
    };

    try {
      dispatch(editUserThunk(options));
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
        dispatch(editUser({
          fullName,
          dob,
          avatarRef: response.toString(),
        }));
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
              src={IMAGES_URL + avatarRef}
              alt="avatar image here"
            />
            <label 
            htmlFor="avatar" 
            className="custom-file-upload"
            title="upload avatar"
            >
              <Icon size='35%' icon={upload} />
            </label>
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
            <StyledInput
              className='data__input'
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
            <StyledInput
              className='data__input'
              type="date"
              id="dob"
              {...register("dob")}
            />
            <label
              className='data__label'
              htmlFor="password"
            >
              Password:
            </label>
            <StyledInput
              className='data__input'
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
        </form>
        <StyledButton
          className='data__button'
          form='user-form'
          type="submit"
        >
          Edit user
        </StyledButton>
      </div>
    </StyledDiv >
  )
}

const StyledDiv = styled.div`
  .user_container {
    background-color: white;
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
    position: relative;
    &__img {
      border-radius: 100%;
      height: 220px;
      width: 220px;
      margin-bottom: 20px;
      object-fit: cover;
    }
    &__button {
      position: absolute;
      top: 50px;

    }
  }

  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    color: #053a9c;
    cursor: pointer;
    align-self: center; 
    position: absolute;
    top: 80px;
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
      margin-bottom: 15px;
    }
    &__button {
    margin-top: 20px;
    align-self: flex-end;
    width: 40%;
    }
    
  }
  `;