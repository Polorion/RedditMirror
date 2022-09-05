export const stopScrollPage = (isfocus:boolean):void => {
  if(isfocus) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'initial'
}