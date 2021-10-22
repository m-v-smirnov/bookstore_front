import { AppDispatch } from "../index";
import {
  userCreate,
  userEdit,
  userLogin,
  userLoginByToken,
} from "../../api/userApi";
import { UserActions, User } from "./userTypes";
import {
  UserCreateOptions,
  UserEditOptions,
  UserLoginOptions
} from "../../types/userTypes";

export const setStartLoading = (): UserActions => {
  return {
    type: 'SET_START_LOADING'
  }
}

export const setFinishLoading = (): UserActions => {
  return {
    type: 'SET_FINISH_LOADING'
  }
}

export const setClearUser = (): UserActions => {
  return {
    type: "SET_CLEAR_USER"
  }
}

export const setUser = (options: User): UserActions => {
  return {
    type: 'SET_USER',
    payload: options
  }
}

export const setError = (options: string): UserActions => {
  return {
    type: 'SET_ERROR',
    payload: options
  }
}

export const editUser = (options: UserEditOptions): UserActions => {
  return {
    type: 'EDIT_USER',
    payload: options
  }
}

export const loginUserThunk =
  (options: UserLoginOptions) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setStartLoading())
      const response = await userLogin(options);
      dispatch(setUser(response.user));
      return true
    } catch (e: any) {
      dispatch(setError(e.response.data.message))
      return false
    } finally {
      dispatch(setFinishLoading())
    }
  }

export const loginByTokenThunk =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setStartLoading())
      const response = await userLoginByToken();
      dispatch(setUser(response.user))
      return true
    } catch (e: any) {
      dispatch(setError(e.response.data.message))
      return false
    } finally {
      dispatch(setFinishLoading())
    }
  }

export const createUserThunk =
  (options: UserCreateOptions) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setStartLoading())
      const response = await userCreate(options);
      dispatch(setUser(response.user))
      return true
    } catch (e: any) {
      dispatch(setError(e.response.data.message))
      return false
    } finally {
      dispatch(setFinishLoading())
    }
  }

export const editUserThunk =
  (options: UserEditOptions) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setStartLoading())
      const response = await userEdit(options);
      dispatch(setUser(response.user))
      return true
    } catch (e: any) {
      dispatch(setError(e.response.data.message))
      return false
    } finally {
      dispatch(setFinishLoading())
    }
  }
