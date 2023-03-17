import { fend, min } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), min(2))

export const data = 'foo'

export const output = 'foo'
