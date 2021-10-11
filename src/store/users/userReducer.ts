import { UserActions, UserState } from "./userTypes";

const initialState: UserState = {
  user: null,
  loading: false,
  error: ''
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
          fullName: actions.payload.fullName,
          dob: actions.payload.dob,
          email: actions.payload.email,
          _id: actions.payload._id
        },
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: actions.payload,
      }
    case 'SET_CLEAR_USER':
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}