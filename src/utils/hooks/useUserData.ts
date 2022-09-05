import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequestAsync } from '../../store/login/actions'
import { RootState } from '../../store/reducer'

export interface UserData {
  name?: string
  iconImg?: string
}

export const useUserData = () => {
  const data = useSelector<RootState, UserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)

  const token = useSelector<RootState, string>(state => state.token)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: any = useDispatch()
  
  useEffect(() => {
    if(token) {
      dispatch(loginRequestAsync())
    }
  }, [token])


  return { data, loading }
}