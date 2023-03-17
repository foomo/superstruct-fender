import { equal, fend } from '../../../src'
import { number } from 'superstruct'

export const Struct = fend(number(), equal(5))

export const data = 5

export const output = 5
