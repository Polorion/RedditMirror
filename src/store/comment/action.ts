import { ActionCreator } from 'redux'

type UpdateCommentAction = {
  type: string
  text: string
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({ type: UPDATE_COMMENT, text })
