type SetUserAction = { type: 'SET_USER', payload: User }
type SetStartLoadingAction = { type: 'SET_START_LOADING' }
type SetErrorAction = { type: 'SET_ERROR', payload: string }
type SetFinishLoadingAction = { type: 'SET_FINISH_LOADING' }
type SetClearUser = { type: 'SET_CLEAR_USER' }



export type UserActions =
  | SetUserAction
  | SetStartLoadingAction
  | SetErrorAction
  | SetFinishLoadingAction
  | SetClearUser

export type User = {
  fullName: string;
  email: string;
  dob: string;
  _id: string;
  avatarRefId ?: {};
}

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string;
}