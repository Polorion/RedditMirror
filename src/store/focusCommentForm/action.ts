import { ActionCreator } from 'redux'

type UpdateFocusCommentFormUserNameAction = {
  type: string
  userName: string
}

export const UPDATE_COMMENT_FORM_USER_NAME = 'UPDATE_COMMENT_FORM_USER_NAME'

export const updateFocusCommentFormUserName: ActionCreator<UpdateFocusCommentFormUserNameAction> = (userName) => ({ 
  type: UPDATE_COMMENT_FORM_USER_NAME, 
  userName 
})
