import { fend, match } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), match('foo', /^[0-9]+$/))

export const data = '123'

export const output = '123'
