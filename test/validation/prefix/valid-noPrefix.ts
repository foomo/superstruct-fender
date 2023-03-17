import { fend, noPrefix } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), noPrefix('bar'))

export const data = 'foobar'

export const output = 'foobar'
