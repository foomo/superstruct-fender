import { fend, bool } from '../../../src'
import { boolean } from 'superstruct'

export const Struct = fend(boolean(), bool(true))

export const data = true

export const output = true
