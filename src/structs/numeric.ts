import { match } from './match'

export const NameNumeric = 'numeric'

export const stringNumeric = match(NameNumeric, /^[0-9]+$/)
