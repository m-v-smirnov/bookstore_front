type SetUserAction = { type: 'SET_USER', payload: User }
type SetStartLoadingAction = { type: 'SET_START_LOADING' }
type SetErrorAction = { type: 'SET_ERROR', payload: string }
type SetFinishLoadingAction = { type: 'SET_FINISH_LOADING' }

export type UserActions =
  | SetUserAction
  | SetStartLoadingAction
  | SetErrorAction
  | SetFinishLoadingAction

export type User = {
  name: string;
  email: string;
  dob: string;
  id: number;
}

export type UserState = {
  user: User | null;
  loading: boolean;
  error?: string;
}