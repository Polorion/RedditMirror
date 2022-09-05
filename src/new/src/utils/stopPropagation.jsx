import React from "react"


function StopPropagation(fn) {
  return (e) => {
    e.stopPropagation()
    fn(e)
  }
}

export default StopPropagation