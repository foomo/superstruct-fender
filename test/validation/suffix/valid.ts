import { string } from 'superstruct'
import { prefix } from '../../../src'

export const Struct = prefix(string(), 'foo')

export const data = 'foobar'

export const output = 'foobar'
