export type User = {
  name : string;
  email: string;
  dob: string;
  id : number;
}

type SetUserAction = {type: 'SET_USER', payload: User}

export type Actions = 
| SetUserAction
| {type: 'SET_START_LOADING'}
| {type: 'SET_ERROR', payload: string}


const setUser = (options: User): Actions => {
  return {
    type: 'SET_USER',
    payload: options
  }
} 

//dispatch(setUser(user));

export type UserState = {
  user: User | null;
  loading: boolean;
  error?: string;
}

const a: UserState = {
  loading: false,
  user: null
}

const initialState : UserState = {
  user: null,
  loading: false
}

export const userReducer = (state = initialState, actions : Actions): UserState => {
  switch(actions.type) {
    case 'SET_START_LOADING': 
      return {
        ...state,
      loading: true
      }
    
    default: 
    return state
  }
}