import React from 'react'
import ReactDOM from 'react-dom'
import { useGetPost } from '../../../../../../utils/hooks/useGetPost'
import { currentDate } from '../../../../../../utils/js/currentDate'
import { Post } from '../Post'

export const PostContainer = () => {  
  const { comment, post, loading } = useGetPost()  
  
  const node = document.querySelector('#modal_root')
  if(!node) return null
  
  return ReactDOM.createPortal((
    <Post 
      loading={loading as boolean}
      title={post.title}
      karma={post.score}
      publishedLabel={currentDate(post.created)}
      userName={post.author}
      themes={post.subreddit}
      mainText={post.selftext}
      commentList={comment as []}
    />
  ), node)
}
