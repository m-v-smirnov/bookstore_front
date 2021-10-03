type SetUserAction = { type: 'SET_USER', payload: User }
type SetStartLoadingAction = { type: 'SET_START_LOADING' }
type SetErrorAction = { type: 'SET_ERROR', payload: string }
type SetFinishLoadingAction = { type: 'SET_FINISH_LOADING' }
type SetClearState = { type: 'SET_CLEAR_STATE' }
type SetLoaded = { type: 'SET_LOADED' }


export type UserActions =
  | SetUserAction
  | SetStartLoadingAction
  | SetErrorAction
  | SetFinishLoadingAction
  | SetClearState
  | SetLoaded

export type User = {
  name: string;
  email: string;
  dob: string;
  id: number;
}

export type UserState = {
  user: User | null;
  isLoaded: boolean;
  loading: boolean;
  error?: string;
}