import { fend, min } from '../../../src'
import { number } from 'superstruct'

export const Struct = fend(number(), min(3))

export const data = 5

export const output = 5
