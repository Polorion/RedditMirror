import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducer'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export type loginRequestAction = {
  type: string
}
export const loginRequest: ActionCreator<loginRequestAction> = () => ({
  type: LOGIN_REQUEST
})

export interface UserData {
  name?: string
  iconImg?: string
}
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export type loginRequestSuccessAction = {
  type: string
  data: UserData
}
export const loginRequestSuccess: ActionCreator<loginRequestSuccessAction> = (data) => ({
  type: LOGIN_REQUEST_SUCCESS,
  data
})

export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR'
export type loginRequestErrorAction = {
  type: string
  error: string
}
export const loginRequestError: ActionCreator<loginRequestErrorAction> = (error) => ({
  type: LOGIN_REQUEST_ERROR,
  error
})

export const loginRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(loginRequest())
  axios.get('https://oauth.reddit.com/api/v1/me', {
    headers: { Authorization: `bearer ${getState().token}` }
  })
  .then(({ data }) => {
    dispatch(loginRequestSuccess({ name: data.name, iconImg: data.snoovatar_img }))
  })
  .catch((error) => {
    console.log(error)
    dispatch(loginRequestError(String(error)))
  })
} 