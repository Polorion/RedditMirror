import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk/es/types'
import { RootState } from '../reducer'

type SetTokenAction = {
  type: string
  token: any
}

export const SET_TOKEN = 'SET_TOKEN'

export const setToken: ActionCreator<SetTokenAction> = (token) =>({ type: SET_TOKEN, token })

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = localStorage.getItem('token') || window.__token__
  if(token.length > 15) {
    dispatch(setToken(token))
    localStorage.setItem('token', token)
  }
}