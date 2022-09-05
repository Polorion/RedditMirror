/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation()
    fn(e)
  }
}