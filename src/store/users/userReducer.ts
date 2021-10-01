import { UserActions, UserState } from "./userTypes";

const initialState: UserState = {
  user: null,
  loading: false
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
    case 'SET_ERROR':
      return {
        ...state,
        error: actions.payload
      }
    default:
      return state
  }
}