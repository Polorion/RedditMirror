import { Reducer } from 'redux'
import { UPDATE_COMMENT } from './comment/action'
import { UPDATE_COMMENT_FORM_USER_NAME } from './focusCommentForm/action'
import { UPDATE_FORM_FOCUS } from './formFocus/action'
import { LOGIN_REQUEST, LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS } from './login/actions'
import { meReducer, MeState } from './login/reducer'
import { SET_TOKEN } from './token/action'

export type RootState = {
  token: any
  commentText: string
  isFormFocus: boolean
  focusCommentFormUserName: string
  me: MeState
}

const initialState: RootState = {
  token: '',
  commentText: '',
  isFormFocus: false,
  focusCommentFormUserName: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token }
    case UPDATE_COMMENT:
      return { ...state, commentText: action.text }
    case UPDATE_FORM_FOCUS:
      return { ...state, isFormFocus: action.focus }  
    case UPDATE_COMMENT_FORM_USER_NAME:
      return { ...state, focusCommentFormUserName: action.userName }  
    case LOGIN_REQUEST:
    case LOGIN_REQUEST_SUCCESS:
    case LOGIN_REQUEST_ERROR:
      return { ...state, me: meReducer(state.me, action) }    
    default:
      return state
  }
}