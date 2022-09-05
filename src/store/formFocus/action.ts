import { ActionCreator } from 'redux'

type UpdateFormFocusAction = {
  type: string
  focus: boolean
}

export const UPDATE_FORM_FOCUS = 'UPDATE_FORM_FOCUS'

export const updateFormFocus: ActionCreator<UpdateFormFocusAction> = (focus) => ({ type: UPDATE_FORM_FOCUS, focus })
