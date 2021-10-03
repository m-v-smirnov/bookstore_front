import { AppDispatch } from "../index";
import { userLogin, userLoginByToken, UserLoginOptions } from "../../api/userApi";
import { UserActions, User } from "./userTypes";

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

export const setClearState = (): UserActions => {
  return {
    type: "SET_CLEAR_STATE"
  }
}

export const setUser = (options: User): UserActions => {
  return {
    type: 'SET_USER',
    payload: options
  }
}
export const setLoaded = (): UserActions => {
  return {
    type: "SET_LOADED"
  }
}

export const setError = (options: string): UserActions => {
  return {
    type: 'SET_ERROR',
    payload: options
  }
}





export const loginUserThunk = (options: UserLoginOptions) => async (dispatch: AppDispatch) => {
 
  try {
    dispatch(setStartLoading())
    const response = await userLogin(options);    
    dispatch(setUser(response.user))
    return true
  } catch (e: any) {
    dispatch(setError(e.message))
    return false
  } finally {
    dispatch(setFinishLoading())
  }
}

export const loginByTokenThunk = () => async (dispatch: AppDispatch) => {
  try {
    console.log("@@@@@@@@@@@@HI from thunk@@@@@@@@@@@@");
    dispatch(setStartLoading())
    const response = await userLoginByToken();    
    dispatch(setUser(response.user))
    return true
  } catch (e: any) {
    dispatch(setError(e.message))
    return false
  } finally {
    dispatch(setFinishLoading())
  }
}

