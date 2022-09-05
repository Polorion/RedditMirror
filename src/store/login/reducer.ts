import { AnyAction, Reducer } from 'redux'
import { LOGIN_REQUEST, LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS, UserData } from './actions'

export type MeState = {
  loading: boolean
  error: string
  data: UserData
}

export const meReducer: Reducer = (state: MeState, action: AnyAction) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true }
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, loading: false, data: action.data }  
    case LOGIN_REQUEST_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state  
  }
}