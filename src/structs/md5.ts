import { match } from './match'

export const NameMD5 = 'md5'

export const md5 = match(NameMD5, /^[0-9a-f]{32}$/)
