import { fend, noSuffix } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), noSuffix('baz'))

export const data = 'foobar'

export const output = 'foobar'
