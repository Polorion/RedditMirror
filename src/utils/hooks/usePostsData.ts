import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducer'

export const usePostData = () => {
  const token = useSelector<RootState>(store => store.token)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(0)
  const [data, setData] = useState([])
  const [afterLoad, setAfterLoad] = useState('')

  const fetchData = () => {
    if(!token) return
    setLoading(true)
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}` },
      params: { limit: '10', after: afterLoad }
    })
      .then(({ data: { data: { children, after } } }) => {
        setData(prevData => prevData.concat(...children.map((el: {data: []}) => el.data)))
        setAfterLoad(after)
      })
      .catch((error) => { console.log('usePostData',error) })
      .finally(() => { setLoading(false) })
  }

  const loadHandler = () => {
    setLoaded(0)
    fetchData()
  }

  return { data, loading, loaded, loadHandler, fetchData, setLoaded }
}

