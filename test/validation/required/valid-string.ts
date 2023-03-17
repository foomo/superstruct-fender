import { fend, required, min } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), required, min(5))

export const data = 'foobar'

export const output = 'foobar'
