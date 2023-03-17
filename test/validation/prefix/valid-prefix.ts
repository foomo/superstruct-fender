import { fend, prefix } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), prefix('foo'))

export const data = 'foobar'

export const output = 'foobar'
