import { fend, equal } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), equal('foo'))

export const data = 'foo'

export const output = 'foo'
