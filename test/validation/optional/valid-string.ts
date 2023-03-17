import { fend, optional, min } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), optional, min(10))

export const data = ''

export const output = ''
