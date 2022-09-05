import React from 'react'
import { useDispatch } from 'react-redux'
import { updateFocusCommentFormUserName } from '../../../../../../../store/focusCommentForm/action'
import { updateFormFocus } from '../../../../../../../store/formFocus/action'
import { currentDate } from '../../../../../../../utils/js/currentDate'
import CommentBlock from '../CommentBlock/CommentBlock'

interface GenarateCommentList {
  author: string
  created: number
  subreddit: string
  body: string
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replies: any
}

export const genareteCommentList = (commentList: []) => {
  const dispatch = useDispatch()

  return commentList.map(({ author, created, subreddit, body, id, replies }: GenarateCommentList) => {
    let answers = []
    if(replies) {
      answers = replies.data.children.map((el: {data: object}) => el.data)
    }
    const listElement = 
      <CommentBlock 
        userName={author}
        publishedLabel={currentDate(created)}
        themes={subreddit}
        body={body}
        onFocus={ () => { dispatch(updateFormFocus(true)), dispatch(updateFocusCommentFormUserName(author)) } }
        answer={ genareteAnswer(answers, () => { dispatch(updateFormFocus(true)), dispatch(updateFocusCommentFormUserName(author)) }) }
      />
    return { As: 'li' as const, listElement, id }
  })
}


function genareteAnswer(arr:[], onFocus: () => void) {
  if(arr.length === 0) return []

  return arr.map(({ author, created, subreddit, body, id, replies }: GenarateCommentList) => {
    let answers = []
    if(replies) {
      answers = replies.data.children.map((el: {data: object}) => el.data)
    }
    return (
      <CommentBlock 
      key={id}
      userName={author}
      publishedLabel={currentDate(created as number)}
      themes={subreddit}
      body={body}
      onFocus={ onFocus }
      answer={ answers.length > 0 ? genareteAnswer(answers, onFocus) : [] }
    />
    )
  })
}
