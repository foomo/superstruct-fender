import { fend, suffix } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), suffix('bar'))

export const data = 'foobar'

export const output = 'foobar'
