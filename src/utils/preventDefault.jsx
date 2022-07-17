import React from "react"


function PreventDefault(fn) {
  return (e) => {
    e.preventDefault()
    fn(e)
  }
}

export default PreventDefault