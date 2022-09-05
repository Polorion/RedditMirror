import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { stopScrollPage } from '../dom/stopScrollPage'

export const useModal = (resetFocus?: () => void) => {
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  useEffect(() => {
    function handleClick(e:MouseEvent) {
      if(e.target instanceof Node && !ref.current?.contains(e.target)) {
        navigate('/posts')
      } else {
        resetFocus?.()
      }
    }
    document.addEventListener('click', handleClick)
    stopScrollPage(true)
    return () => { 
      document.removeEventListener('click', handleClick) 
      stopScrollPage(false)
    }
  }, [])

  return [ref]
}