import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/reducer'

export const useGetPost = () => {
  const { id } = useParams()
  const [comment, setComments] = useState([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>([])
  const [loading, setLoading] = useState<boolean>()

  const token = useSelector<RootState, string>(state => state.token)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://oauth.reddit.com/comments/${id}`, {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((res) => { 
        const currentPost = res.data[0].data.children.map((el: {data: []}) => el.data)[0]
        const currentComments = res.data[1].data.children.map((el: {data: []}) => el.data)
        setComments(currentComments) 
        setPost(currentPost)
      })
      .catch((error) => { console.log(error) })
      .finally(() => { setLoading(false) })
  }, [token])
    
  return { comment, post, loading }
}




