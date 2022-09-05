import React from 'react'

export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => {
    return <E extends ((t: T[K]) => void)>(fn: E) => {
      return (e: React.SyntheticEvent<T>) => {
        return fn(e.currentTarget[key])
      }
    }
  }
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')