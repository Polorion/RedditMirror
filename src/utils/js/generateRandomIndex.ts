import { assoc } from './assoc'

// or nanoid
export const genarateRandomString = () => Math.random().toString(36).substring(2, 15)

export const assignId = assoc('id', genarateRandomString())

export const generateId = <O extends object>(obj: O) => assignId(obj)