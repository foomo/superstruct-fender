import { fend, emailWeak } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), emailWeak)

export const data = 'foo@bar.com'

export const output = 'foo@bar.com'
