import { UserActions, UserState } from "./userTypes";

const initialState: UserState = {
  user: null,
  loading: false,
  isLoaded: false
}

export const userReducer = (
  state = initialState,
  actions: UserActions
): UserState => {

  switch (actions.type) {
    case 'SET_START_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'SET_FINISH_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'SET_USER':
      return {
        ...state,
        user: {
          name: actions.payload.name,
          dob: actions.payload.dob,
          email: actions.payload.email,
          id: actions.payload.id
        }
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: true
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: actions.payload
      }
    case 'SET_CLEAR_STATE':
      return (
        state = initialState
      )
    default:
      return state
  }
}